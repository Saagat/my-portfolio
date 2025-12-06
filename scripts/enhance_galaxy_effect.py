
import os
import re

file_path = r"d:\Google-Antigravity\new\New folder\projects.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# New Galaxy CSS with colors and randomness
# We use rgba for colors:
# White: rgba(255, 255, 255, 0.8)
# Blue: rgba(100, 149, 237, 0.8) (CornflowerBlueish)
# Purple: rgba(147, 112, 219, 0.8) (MediumPurpleish)
# We mix sizes (1px, 2px) and positions.

new_style_block = """    /* Galaxy Background Effect */
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
    }"""

# Regex to find the existing .galaxy-bg block
# It starts with .galaxy-bg { and ends before @keyframes galaxyMove
# We need to be careful to capture the whole block.
# Since we know the structure from previous edits, we can target the specific block.

# Pattern: .galaxy-bg { ... } (non-greedy match for content)
# We'll rely on the fact that it ends with animation: galaxyMove ... }
pattern = r'\.galaxy-bg\s*\{[^}]*animation:\s*galaxyMove[^}]*\}'

match = re.search(pattern, content, re.DOTALL)

if match:
    new_content = content.replace(match.group(0), new_style_block.strip())
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully enhanced galaxy effect with colors and randomness.")
else:
    print("Could not find existing galaxy-bg CSS to update.")
