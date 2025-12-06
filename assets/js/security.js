(function () {
    'use strict';

    // Disable Right Click
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    }, false);

    // Disable Keyboard Shortcuts
    document.addEventListener('keydown', function (e) {
        // Ctrl+C (Copy), Ctrl+X (Cut), Ctrl+S (Save), Ctrl+U (View Source), Ctrl+P (Print)
        if (e.ctrlKey && (e.key === 'c' || e.key === 'C' ||
            e.key === 'x' || e.key === 'X' ||
            e.key === 's' || e.key === 'S' ||
            e.key === 'u' || e.key === 'U' ||
            e.key === 'p' || e.key === 'P')) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+I (DevTools), Ctrl+Shift+C (Inspect), Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I' ||
            e.key === 'c' || e.key === 'C' ||
            e.key === 'j' || e.key === 'J')) {
            e.preventDefault();
            return false;
        }

        // F12 (DevTools)
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }

        // PrintScreen (Attempt to block/clear)
        if (e.key === 'PrintScreen') {
            // We can't strictly block the OS screenshot, but we can try to clear clipboard or hide content
            navigator.clipboard.writeText('');
            // Optional: Briefly hide body content? (Can be jarring)
            // document.body.style.display = 'none';
            // setTimeout(() => document.body.style.display = 'block', 100);
        }
    });

    // Disable Drag and Drop for images
    document.addEventListener('dragstart', function (e) {
        if (e.target.nodeName === 'IMG') {
            e.preventDefault();
        }
    }, false);

    // Attempt to clear clipboard on copy (if event leaks through)
    document.addEventListener('copy', function (e) {
        e.preventDefault();
        e.clipboardData.setData('text/plain', '');
    });

})();
