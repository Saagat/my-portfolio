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

// Contact Form Placeholder Backend Code REMOVED since we are using Formsubmit.co directly in HTML
// The original code here prevented the form from submitting and showed an alert.
// We now rely on standard HTML <form action="..."> submission.
