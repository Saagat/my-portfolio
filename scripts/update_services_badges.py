
import os

file_path = r"d:\Google-Antigravity\new\New folder\services.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Inject CSS Styles
style_block = """  <style>
    @keyframes neonPulseGreen {
      0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
      70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
      100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
    }
    @keyframes neonPulseBlue {
      0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
      70% { box-shadow: 0 0 0 6px rgba(59, 130, 246, 0); }
      100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
    }
    .neon-green {
      animation: neonPulseGreen 2s infinite;
    }
    .neon-blue {
      animation: neonPulseBlue 2s infinite;
    }
  </style>
</head>"""

if "</head>" in content and "@keyframes neonPulseGreen" not in content:
    content = content.replace("</head>", style_block)
    print("Injected CSS styles.")

# 2. Update Badge Container
# We look for the container div and replace it with the centered version + classes
old_container_start = '<div class="mt-6 flex flex-wrap gap-3">'
new_container_start = '<div class="mt-6 flex flex-wrap justify-center gap-3">'

if old_container_start in content:
    content = content.replace(old_container_start, new_container_start)
    print("Centered badge container.")

# Add neon classes to spans
# We'll use a simple string replace for the specific classes we know are there
# Green badge
old_green_class = 'text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"'
new_green_class = 'text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 neon-green"'

if old_green_class in content and "neon-green" not in content:
    content = content.replace(old_green_class, new_green_class)
    print("Added neon-green class.")

# Blue badge
old_blue_class = 'text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"'
new_blue_class = 'text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 neon-blue"'

if old_blue_class in content and "neon-blue" not in content:
    content = content.replace(old_blue_class, new_blue_class)
    print("Added neon-blue class.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
