
import os
import re

file_path = r"d:\Google-Antigravity\new\New folder\Index.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Inject Galaxy CSS
# We use the enhanced version with colors
galaxy_css = """    /* Galaxy Background Effect */
    .galaxy-bg {
      background-color: #000;
      background-image:
        radial-gradient(1px 1px at 5% 10%, rgba(255, 255, 255, 0.9) 100%, transparent),
        radial-gradient(1px 1px at 15% 25%, rgba(100, 149, 237, 0.8) 100%, transparent),
        radial-gradient(2px 2px at 25% 5%, rgba(255, 255, 255, 1) 100%, transparent),
        radial-gradient(1px 1px at 30% 35%, rgba(147, 112, 219, 0.7) 100%, transparent),
        radial-gradient(1px 1px at 45% 20%, rgba(255, 255, 255, 0.8) 100%, transparent),
        radial-gradient(2px 2px at 55% 45%, rgba(100, 149, 237, 0.9) 100%, transparent),
        radial-gradient(1px 1px at 65% 15%, rgba(255, 255, 255, 0.6) 100%, transparent),
        radial-gradient(1px 1px at 75% 30%, rgba(147, 112, 219, 0.8) 100%, transparent),
        radial-gradient(2px 2px at 85% 10%, rgba(255, 255, 255, 0.9) 100%, transparent),
        radial-gradient(1px 1px at 95% 40%, rgba(100, 149, 237, 0.7) 100%, transparent),
        radial-gradient(1px 1px at 10% 60%, rgba(255, 255, 255, 0.8) 100%, transparent),
        radial-gradient(2px 2px at 20% 80%, rgba(147, 112, 219, 0.9) 100%, transparent),
        radial-gradient(1px 1px at 35% 70%, rgba(100, 149, 237, 0.8) 100%, transparent),
        radial-gradient(1px 1px at 50% 90%, rgba(255, 255, 255, 0.7) 100%, transparent),
        radial-gradient(2px 2px at 60% 65%, rgba(255, 255, 255, 0.9) 100%, transparent),
        radial-gradient(1px 1px at 70% 85%, rgba(147, 112, 219, 0.7) 100%, transparent),
        radial-gradient(1px 1px at 80% 55%, rgba(100, 149, 237, 0.8) 100%, transparent),
        radial-gradient(2px 2px at 90% 75%, rgba(255, 255, 255, 0.8) 100%, transparent);
      background-size: 500px 500px;
      animation: galaxyMove 120s linear infinite;
    }
    
    @keyframes galaxyMove {
      from { background-position: 0 0; }
      to { background-position: 1000px 1000px; }
    }
  </style>"""

if "/* Galaxy Background Effect */" not in content:
    content = content.replace("</style>", galaxy_css)
    print("Injected Galaxy CSS.")

# 2. Update Hero Section Class
# Find <section class="bg-white dark:bg-gray-900 transition-colors duration-300">
# Replace with <section class="galaxy-bg transition-colors duration-300">
hero_section_pattern = r'<section class="bg-white dark:bg-gray-900 transition-colors duration-300">'
if re.search(hero_section_pattern, content):
    content = re.sub(hero_section_pattern, '<section class="galaxy-bg transition-colors duration-300">', content)
    print("Applied galaxy-bg to Hero section.")

# 3. Update Text Colors for Readability
# We need to force light text colors in this section because the background is now always black.

# Update "UX / UI • 3D..." text
# <p class="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
# -> text-gray-400 (always)
content = content.replace('text-gray-500 dark:text-gray-400"', 'text-gray-400"')

# Update "Hi, I’m Sagar..." h1
# <h1 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight dark:text-white">
# -> text-white (always)
content = content.replace('leading-tight dark:text-white"', 'leading-tight text-white"')

# Update "UX / UI Designer & Visual Designer" span
# <span class="text-gray-800 dark:text-gray-300">
# -> text-gray-300 (always)
content = content.replace('text-gray-800 dark:text-gray-300"', 'text-gray-300"')

# Update Description paragraph
# <p class="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl">
# -> text-gray-300 (always)
content = content.replace('text-gray-600 dark:text-gray-400 max-w-xl"', 'text-gray-300 max-w-xl"')

# Update Tags
# <div class="mt-5 flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400">
# -> text-gray-400 (always)
content = content.replace('text-gray-500 dark:text-gray-400">', 'text-gray-400">')

# Update Profile Card Background to be dark/transparent so it fits
# <div class="w-full max-w-xs rounded-3xl bg-gray-50 border shadow-sm p-5 flex flex-col items-center text-center dark:bg-gray-800 dark:border-gray-700">
# -> bg-gray-900/80 border-gray-700
card_pattern = r'bg-gray-50 border shadow-sm p-5 flex flex-col items-center text-center dark:bg-gray-800 dark:border-gray-700'
new_card_style = 'bg-gray-900/80 border border-gray-700 shadow-sm p-5 flex flex-col items-center text-center backdrop-blur-sm'
content = content.replace(card_pattern, new_card_style)

# Update Profile Card Text
# <p class="text-sm font-semibold dark:text-white"> -> text-white
content = content.replace('text-sm font-semibold dark:text-white"', 'text-sm font-semibold text-white"')

# <p class="text-xs text-gray-500 dark:text-gray-400"> -> text-gray-400
content = content.replace('text-xs text-gray-500 dark:text-gray-400"', 'text-xs text-gray-400"')

# <div class="mt-4 w-full text-left text-xs text-gray-600 dark:text-gray-400 space-y-1"> -> text-gray-300
content = content.replace('text-gray-600 dark:text-gray-400 space-y-1"', 'text-gray-300 space-y-1"')


with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
    print("Updated text colors for readability.")
