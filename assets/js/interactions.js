// Parallax removed as per user request (image should be static inside card)

// Project Navigation Logic
const projectsGrid = document.getElementById('projects-grid');
if (projectsGrid) {
    projectsGrid.addEventListener('click', function (e) {
        // Check if we are in index.html (implied by this script being used there)
        const card = e.target.closest('.project-card');
        if (card) {
            const projectId = card.getAttribute('data-id');
            // Only navigate if no modal exists on page (assuming modal logic is separate if added later)
            if (projectId && !document.getElementById('project-modal')) {
                e.preventDefault();
                window.location.href = `case-study.html?id=${projectId}`;
            }
        }
    });
}

// Contact Form Handling (AJAX)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm && formStatus) {
    // 0. Auto-detect Country Code
    const countrySelect = contactForm.querySelector('select[name="country_code"]');
    if (countrySelect) {
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
                const code = data.country_calling_code; // e.g., +91, +1
                if (code) {
                    // Try to finding matching option
                    const option = Array.from(countrySelect.options).find(opt => opt.value === code);
                    if (option) {
                        countrySelect.value = code;
                    }
                }
            })
            .catch(err => console.log('Country auto-detect failed:', err));
    }

    // 1. Real-time Validation Setup
    const emailInput = contactForm.querySelector('input[name="email"]');
    const phoneInput = contactForm.querySelector('input[name="phone"]');

    // Helper to show/hide errors
    const showError = (msg) => {
        formStatus.innerText = msg;
        formStatus.className = "text-xs font-medium mt-2 text-red-600";
        formStatus.classList.remove('hidden');
    };
    const hideError = () => {
        formStatus.classList.add('hidden');
        formStatus.innerText = "";
    };

    const validateEmail = () => {
        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Only show error if not empty and invalid
        if (email && !emailRegex.test(email)) {
            showError("Please enter a valid email address.");
            return false;
        }
        hideError();
        return true;
    };

    const validatePhone = () => {
        const phone = phoneInput.value;
        const countryCode = countrySelect ? countrySelect.value : '+91'; // Fallback

        // Return true if empty (allow user to start typing) or if valid
        // But if they typed something, it must be valid for the code
        if (!phone) return true;

        let phoneRegex;
        let phoneHint;
        switch (countryCode) {
            case '+91': // India (10 digits, starts 6-9)
                phoneRegex = /^[6-9]\d{9}$/;
                phoneHint = "10 digits (6-9xxxxxxxxx)";
                break;
            case '+1': // US (10 digits)
                phoneRegex = /^\d{10}$/;
                phoneHint = "10 digits";
                break;
            case '+44': // UK (10-11 digits)
                phoneRegex = /^\d{10,11}$/;
                phoneHint = "10-11 digits";
                break;
            case '+971': // UAE (9 digits, usually starts 5)
                phoneRegex = /^\d{9}$/;
                phoneHint = "9 digits";
                break;
            case '+61': // AU (9 digits, usually starts 4)
                phoneRegex = /^\d{9}$/;
                phoneHint = "9 digits";
                break;
            default:
                phoneRegex = /^\d{7,15}$/; // Fallback
                phoneHint = "valid number";
        }

        // Clean non-digits for check
        const cleanPhone = phone.replace(/\D/g, '');
        if (!phoneRegex.test(cleanPhone)) {
            showError(`Invalid phone number for ${countryCode}. Required: ${phoneHint}.`);
            return false;
        }
        hideError();
        return true;
    };

    // Attach Listeners
    if (emailInput) {
        // Validate on blur (when leaving field) to avoid annoyance, clear on input if fixed
        emailInput.addEventListener('blur', validateEmail);
        emailInput.addEventListener('input', () => {
            // If error is currently shown, re-validate on input to clear it
            if (!formStatus.classList.contains('hidden') && formStatus.innerText.includes('email')) {
                validateEmail();
            }
        });
    }
    if (phoneInput) {
        phoneInput.addEventListener('input', validatePhone); // Phone is short, real-time is okay
        phoneInput.addEventListener('blur', validatePhone);
    }
    if (countrySelect) {
        countrySelect.addEventListener('change', () => {
            if (phoneInput.value) validatePhone(); // Re-validate phone if country changes
        });
    }

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Final Validation Check
        if (emailInput && !validateEmail()) return;
        if (phoneInput && !validatePhone()) return;

        // Strict Empty Check for Phone (since validatePhone allows empty for typing)
        if (phoneInput && phoneInput.value && !validatePhone()) return;

        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerText;

        // 1. Show Loading State
        btn.innerText = 'Sending...';
        btn.disabled = true;

        // 2. Collet Data
        const formData = new FormData(contactForm);

        // 3. Send via Fetch
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    formStatus.innerText = "Message sent successfully! I'll get back to you soon.";
                    formStatus.className = "text-xs font-medium mt-2 text-emerald-600";
                    contactForm.reset();
                    // Clear any lingering errors
                    formStatus.classList.remove('hidden');
                } else {
                    response.json().then(data => {
                        if (data.message) {
                            showError("Error: " + data.message);
                        } else if (data.errors) {
                            showError(data.errors.map(e => e.message).join(", "));
                        } else {
                            showError("Submission failed.");
                        }
                    }).catch(() => showError("Server Error. Please try again."));
                }
            })
            .catch(error => {
                console.error("Form error:", error);
                showError("Network Error: Check your connection.");
            })
            .finally(() => {
                btn.innerText = originalText;
                btn.disabled = false;

                // Success message auto-hide
                if (formStatus.classList.contains('text-emerald-600')) {
                    setTimeout(() => {
                        formStatus.classList.add('hidden');
                        formStatus.innerText = '';
                    }, 5000);
                }
            });
    });
}
