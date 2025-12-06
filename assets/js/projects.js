document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Function to filter projects
    function filterProjects(category) {
        projectCards.forEach(card => {
            // Get categories from the card's data-category attribute
            // expected format: "ux, ui" or just "ux"
            const cardCategories = card.getAttribute('data-category').toLowerCase().split(',').map(c => c.trim());

            // If category is 'all' or card includes the selected category
            if (category === 'all' || cardCategories.includes(category)) {
                card.parentElement.classList.remove('hidden'); // Show (unhide the anchor wrapper)
                // Re-trigger animation if needed, or just let CSS handle it
                card.classList.remove('opacity-50', 'scale-95'); // Reset any potential hidden states if using transitions
            } else {
                card.parentElement.classList.add('hidden'); // Hide
            }
        });
    }

    // Event Listeners for buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterButtons.forEach(b => {
                b.classList.remove('bg-gray-900', 'text-white', 'dark:bg-white', 'dark:text-gray-900');
                b.classList.add('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200', 'dark:bg-gray-800', 'dark:text-gray-300', 'dark:hover:bg-gray-700');
            });

            // Add active class to clicked
            btn.classList.remove('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200', 'dark:bg-gray-800', 'dark:text-gray-300', 'dark:hover:bg-gray-700');
            btn.classList.add('bg-gray-900', 'text-white', 'dark:bg-white', 'dark:text-gray-900');

            // Filter
            const category = btn.getAttribute('data-filter');
            filterProjects(category);
        });
    });
});
