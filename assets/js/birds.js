/* ---------- Bird animation system ---------- */
(function () {
    const birdContainer = document.getElementById('birds');
    const template = document.getElementById('bird-template');

    if (!birdContainer || !template) return;

    // Config - tweak to taste
    const NUM_BIRDS = 8;
    const BOUNDS = { w: window.innerWidth, h: window.innerHeight };
    const MOUSE_INFLUENCE = 0.08; // how strongly birds steer toward/away from mouse
    const MIN_SCALE = 0.65;
    const MAX_SCALE = 1.05;

    // keep track of mouse
    const mouse = { x: BOUNDS.w / 2, y: BOUNDS.h / 2, vx: 0, vy: 0 };
    window.addEventListener('mousemove', (e) => {
        const prevX = mouse.x, prevY = mouse.y;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.vx = mouse.x - prevX;
        mouse.vy = mouse.y - prevY;
    });

    // build a bird DOM element from svg template
    function createBird(i) {
        const birdEl = template.cloneNode(true);
        birdEl.removeAttribute('id');
        birdEl.style.display = 'block';
        birdEl.setAttribute('data-bird', i);

        // wrap svg into a container div so it's transformable
        const wrapper = document.createElement('div');
        wrapper.className = 'bird';
        wrapper.appendChild(birdEl);
        birdContainer.appendChild(wrapper);

        // random initial state
        const scale = MIN_SCALE + Math.random() * (MAX_SCALE - MIN_SCALE);
        wrapper.style.transform = `translate(${Math.random() * BOUNDS.w}px, ${Math.random() * BOUNDS.h}px) scale(${scale}) rotate(${(Math.random() * 30) - 15}deg)`;
        wrapper.style.opacity = 0.9 - Math.random() * 0.35;

        return {
            el: wrapper,
            x: Math.random() * BOUNDS.w,
            y: Math.random() * BOUNDS.h,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            scale: scale,
            angle: 0
        };
    }

    const birds = [];
    for (let i = 0; i < NUM_BIRDS; i++) {
        birds.push(createBird(i));
    }

    // animation loop
    function animate() {
        // update bounds on resize
        BOUNDS.w = window.innerWidth;
        BOUNDS.h = window.innerHeight;

        birds.forEach(b => {
            // basic movement
            b.x += b.vx;
            b.y += b.vy;

            // mouse influence (steer away slightly)
            const dx = b.x - mouse.x;
            const dy = b.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 300) {
                const force = (300 - dist) / 300;
                b.vx += (dx / dist) * force * MOUSE_INFLUENCE;
                b.vy += (dy / dist) * force * MOUSE_INFLUENCE;
            }

            // soft boundaries (wrap around)
            if (b.x < -100) b.x = BOUNDS.w + 100;
            if (b.x > BOUNDS.w + 100) b.x = -100;
            if (b.y < -100) b.y = BOUNDS.h + 100;
            if (b.y > BOUNDS.h + 100) b.y = -100;

            // dampening
            // b.vx *= 0.99;
            // b.vy *= 0.99;

            // limit speed
            const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
            if (speed > 2) {
                b.vx = (b.vx / speed) * 2;
                b.vy = (b.vy / speed) * 2;
            }

            // orientation
            const angle = Math.atan2(b.vy, b.vx) * (180 / Math.PI);
            // smooth rotation
            // b.angle += (angle - b.angle) * 0.1;

            b.el.style.transform = `translate(${b.x}px, ${b.y}px) scale(${b.scale}) rotate(${angle}deg)`;
        });

        requestAnimationFrame(animate);
    }

    animate();
})();
