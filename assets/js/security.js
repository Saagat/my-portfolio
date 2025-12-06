// Disable Right Click
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable Keyboard Shortcuts (Ctrl+C, Ctrl+U, Ctrl+P, F12)
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && (event.key === 'c' || event.key === 'u' || event.key === 'p')) {
        event.preventDefault();
        // Optional: Show a toast/alert saying "Content is protected"
    }
    // F12 (Dev Tools) - Note: Browsers may still allow opening via menu, but this blocks the key
    if (event.key === 'F12') {
        event.preventDefault();
    }
});
