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

// Contact Form Placeholder Backend
const contactForm = document.getElementById('contact-form');
// Note: In some versions ID might be 'contact-form' on form or just in section. Checked Index.html:
// Line 738: <form ... onsubmit="...">
// It has no ID! line 737: <form class="mt-6 space-y-4 text-sm"
// But line 1152 says: document.getElementById('contact-form').addEventListener...
// So the original script was probably FAILING or I missed where ID was added.
// Looking at file content Step 13, line 737: <form class="mt-6..." ...
// It does NOT have id="contact-form".
// However, I should ADD id="contact-form" to the HTML or select it by class.
// The original script in Step 16 line 1152 referenced 'contact-form'.
// I will assume I need to fix the HTML too.
// For now, I'll use a safer selector in JS or just add the ID in HTML upgrade.
// I'll make JS robust.
if (!contactForm) {
    const forms = document.querySelectorAll('form');
    // iterate to find the one in contact section if needed, or just attach to the first one form in contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const form = contactSection.querySelector('form');
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                // Simulate sending
                const btn = this.querySelector('button[type="submit"]');
                const originalText = btn.innerText;
                btn.innerText = 'Sending...';
                btn.disabled = true;

                setTimeout(() => {
                    alert("Thank you for your message! I'll get back to you soon.");
                    // this.reset();
                    form.reset();
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, 1000);
            });
        }
    }
} else {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Simulate sending
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        btn.innerText = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            alert("Thank you for your message! I'll get back to you soon.");
            this.reset();
            btn.innerText = originalText;
            btn.disabled = false;
        }, 1000);
    });
}
