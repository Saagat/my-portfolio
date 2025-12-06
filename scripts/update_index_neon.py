
import os

file_path = r"d:\Google-Antigravity\new\New folder\Index.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Inject CSS Styles
style_block = """  <style>
    @keyframes neonPulseBlue {
      0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
      70% { box-shadow: 0 0 0 6px rgba(59, 130, 246, 0); }
      100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
    }
    .neon-blue {
      animation: neonPulseBlue 2s infinite;
    }
  </style>
</head>"""

if "</head>" in content and "@keyframes neonPulseBlue" not in content:
    content = content.replace("</head>", style_block)
    print("Injected CSS styles.")

# 2. Add neon-blue class to the button
# We look for the specific button text and its surrounding anchor tag
# The button has "Hire Me for Freelance" text.
# We will use a regex or a robust string search to find the class attribute and append neon-blue.

import re

# Regex to find the anchor tag containing "Hire Me for Freelance"
# This regex looks for <a href="..." class="...">...Hire Me for Freelance...</a>
# It captures the class attribute value.
pattern = r'(<a\s+href="[^"]*"\s+class=")([^"]*)(">\s*Hire Me for Freelance)'

def add_class(match):
    prefix = match.group(1)
    current_classes = match.group(2)
    suffix = match.group(3)
    
    if "neon-blue" not in current_classes:
        new_classes = current_classes + " neon-blue"
        return f"{prefix}{new_classes}{suffix}"
    return match.group(0)

new_content = re.sub(pattern, add_class, content, flags=re.DOTALL)

if new_content != content:
    content = new_content
    print("Added neon-blue class to button.")
else:
    print("Could not find button or class already exists.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
