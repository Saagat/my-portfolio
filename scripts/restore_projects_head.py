
import os

file_path = r"d:\Google-Antigravity\new\New folder\projects.html"

# Define the correct head content
head_content = """<html lang="en" class="">

<head>
  <meta charset="utf-8" />
  <title>Projects — Your Name</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class'
    }
  </script>

  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    /* Marquee Animation */
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .marquee-track {
      display: flex;
      width: max-content;
      animation: scroll 30s linear infinite;
    }
    .marquee-track:hover {
      animation-play-state: paused;
    }

    /* Card base tweaks */
    .project-card {
      transition: transform .32s cubic-bezier(.2, .9, .2, 1), box-shadow .28s ease, filter .28s ease;
      transform-origin: center;
      will-change: transform, box-shadow, filter;
      backface-visibility: hidden;
      cursor: pointer;
    }

    /* Soft Apple-style glow on hover */
    .project-card:hover {
      transform: translateY(-6px) scale(1.01);
      box-shadow: 0 10px 30px rgba(2, 6, 23, 0.10), 0 2px 10px rgba(16, 185, 129, 0.08);
      filter: saturate(1.02) drop-shadow(0 6px 18px rgba(16, 185, 129, 0.06));
    }

    /* Thumbnail micro animation */
    .project-thumb {
      transition: transform .6s cubic-bezier(.2, .9, .2, 1);
      will-change: transform;
    }

    .project-card:hover .project-thumb {
      transform: scale(1.06) translateY(-4px) rotate(-0.6deg);
    }

    /* Staggered float for subtle life */
    @keyframes floatY {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-6px); }
      100% { transform: translateY(0px); }
    }

    .float-anim {
      animation: floatY 6s ease-in-out infinite;
    }

    .float-anim.delay-1 { animation-delay: 0.12s; }
    .float-anim.delay-2 { animation-delay: 0.28s; }
    .float-anim.delay-3 { animation-delay: 0.44s; }
    .float-anim.delay-4 { animation-delay: 0.6s; }
    .float-anim.delay-5 { animation-delay: 0.76s; }
    .float-anim.delay-6 { animation-delay: 0.92s; }

    /* micro-interaction for the CTA button */
    .case-cta {
      transition: background-color .18s ease, color .18s ease, transform .18s ease;
    }

    .case-cta:hover {
      transform: translateY(-2px);
    }

    /* Modal Styles */
    #project-modal {
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    #project-modal.hidden {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    #project-modal:not(.hidden) {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    .modal-content {
      transform: scale(0.95);
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    #project-modal:not(.hidden) .modal-content {
      transform: scale(1);
    }

    /* reduce motion preference */
    @media (prefers-reduced-motion: reduce) {
      .float-anim {
        animation: none;
      }
      .project-thumb,
      .project-card {
        transition: none;
        transform: none !important;
      }
    }
  </style>
  <link rel="stylesheet" href="assets/css/security.css">
  <script src="assets/js/security.js"></script>
</head>"""

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find where the body starts
body_start_index = content.find('<body')

if body_start_index != -1:
    # Keep everything from <body... onwards
    body_content = content[body_start_index:]
    
    # Combine new head with existing body
    new_full_content = "<!doctype html>\n" + head_content + "\n\n" + body_content
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_full_content)
    print("Successfully restored projects.html head.")
else:
    print("Could not find <body> tag.")
