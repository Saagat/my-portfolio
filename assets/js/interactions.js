// Parallax on thumbnails based on mouse position
(function () {
    const thumbs = document.querySelectorAll('.project-thumb');
    if (!thumbs.length) return;

    window.addEventListener('mousemove', (e) => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = (e.clientX - cx) / cx;
        const dy = (e.clientY - cy) / cy;

        thumbs.forEach((img, i) => {
            // stagger intensity by index
            const intensity = 4 + (i % 3);
            // apply transforms quietly
            img.style.transform = `translate(${dx * intensity}px, ${dy * intensity}px) scale(${1.02 - Math.abs(dx) * 0.005})`;
        });
    });

    // reset on leave
    window.addEventListener('mouseleave', () => {
        thumbs.forEach(img => img.style.transform = '');
    });
})();

// Project Navigation Logic
const projectsGrid = document.getElementById('projects-grid');
if (projectsGrid) {
    projectsGrid.addEventListener('click', function (e) {
        // Check if we are in index.html (implied by this script being used there)
        // If this script is shared, we might need a check, but for now assuming direct link behavior logic
        const card = e.target.closest('.project-card');
        if (card) {
            // If we are on the main page, we navigate. If on projects page, we might open modal (handled by modal.js)
            // But the original code in Index.html was:
            // window.location.href = `case-study.html?id=${projectId}`;
            // So we'll preserve that for the home page.

            // We can detect if we have a modal present to decide? 
            // Or just check the page URL? 
            // Simpler: If there is no logic preventing it, we let the <a> tag inside work, 
            // OR if it's a div acting as link:

            const projectId = card.getAttribute('data-id');
            if (projectId && !document.getElementById('project-modal')) { // Only navigate if no modal exists on page
                e.preventDefault();
                window.location.href = `case-study.html?id=${projectId}`;
            }
        }
    });
}

// Contact Form Handling (AJAX)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerText;

        // 1. Show Loading State
        btn.innerText = 'Sending...';
        btn.disabled = true;

        // 2. Collect Data
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
                console.log("Form response status:", response.status);
                if (response.ok) {
                    // Success (FormSubmit usually returns 200 OK with success message)
                    formStatus.innerText = "Message sent successfully! I'll get back to you soon.";
                    formStatus.className = "text-xs font-medium mt-2 text-emerald-600";
                    contactForm.reset();
                } else {
                    // Error from server
                    response.json().then(data => {
                        console.log("Form error data:", data);
                        if (data.message) {
                            formStatus.innerText = "Error: " + data.message;
                        } else if (Object.hasOwn(data, 'errors')) {
                            // Web3Forms style
                            formStatus.innerText = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            // Generic JSON error
                            formStatus.innerText = "Submission failed. (Status: " + response.status + ")";
                        }
                    }).catch(parseErr => {
                        // Non-JSON error (e.g. HTML error page or network block)
                        console.error("Form response parsing error:", parseErr);
                        formStatus.innerText = "Server Error (" + response.status + "): Please try again later.";
                    });

                    formStatus.className = "text-xs font-medium mt-2 text-red-600";
                }
            })
            .catch(error => {
                // Network Error
                console.error("Form submission network error:", error);
                formStatus.innerText = "Network Error: Check your connection or try again.";
                formStatus.className = "text-xs font-medium mt-2 text-red-600";
            })
            .finally(() => {
                // 4. Reset Button
                formStatus.classList.remove('hidden');
                btn.innerText = originalText;
                btn.disabled = false;

                // Hide status after 5 seconds
                setTimeout(() => {
                    formStatus.classList.add('hidden');
                    formStatus.innerText = '';
                }, 5000);
            });
    });
}
