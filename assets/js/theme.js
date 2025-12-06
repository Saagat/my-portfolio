// Dark mode toggle logic
document.addEventListener('DOMContentLoaded', () => {
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    var themeToggleDarkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');
    var themeToggleLightIconMobile = document.getElementById('theme-toggle-light-icon-mobile');
    var themeToggleBtn = document.getElementById('theme-toggle');
    var themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');

    // Initial check
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        updateIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateIcons(false);
    }

    function updateIcons(isDark) {
        if (isDark) {
            if (themeToggleLightIcon) themeToggleLightIcon.classList.remove('hidden');
            if (themeToggleDarkIcon) themeToggleDarkIcon.classList.add('hidden');
            if (themeToggleLightIconMobile) themeToggleLightIconMobile.classList.remove('hidden');
            if (themeToggleDarkIconMobile) themeToggleDarkIconMobile.classList.add('hidden');
        } else {
            if (themeToggleLightIcon) themeToggleLightIcon.classList.add('hidden');
            if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove('hidden');
            if (themeToggleLightIconMobile) themeToggleLightIconMobile.classList.add('hidden');
            if (themeToggleDarkIconMobile) themeToggleDarkIconMobile.classList.remove('hidden');
        }
    }

    function toggleTheme() {
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
                updateIcons(true);
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
                updateIcons(false);
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
                updateIcons(false);
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
                updateIcons(true);
            }
        }
    }

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (themeToggleBtnMobile) themeToggleBtnMobile.addEventListener('click', toggleTheme);
});
