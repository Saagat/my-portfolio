
import os
import re

file_path = r"d:\Google-Antigravity\new\New folder\projects.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove "pause on hover" CSS
# We look for .marquee-track:hover { animation-play-state: paused; } and remove it.
# The regex needs to be flexible with whitespace.
pause_css_pattern = r'\.marquee-track:hover\s*\{\s*animation-play-state:\s*paused;\s*\}'
content = re.sub(pause_css_pattern, '', content)
print("Removed pause on hover CSS.")

# 2. Update HTML Structure
# We need to:
# - Remove 'gap-6' from the container
# - Add 'mr-6' to each card

# Define the single set of logos
companies = ["Airbnb", "Stripe", "Netflix", "Uber", "Adobe", "Figma", "Google", "Spotify"]

def create_card(name):
    # Added mr-6 to the class list
    return f"""
      <div class="flex-shrink-0 w-32 h-20 bg-gray-800/50 border border-gray-700 rounded-xl flex items-center justify-center hover:border-gray-600 transition-colors mr-6">
        <span class="text-gray-400 font-semibold text-sm">{name}</span>
      </div>"""

# Generate cards for 2 sets (margin-based)
cards_html = "\n".join([create_card(name) for name in companies * 2])

# New Marquee Section
# - Removed gap-6
# - Kept galaxy-bg
new_marquee_section = f"""  <!-- LOGO MARQUEE -->
  <section class="py-16 bg-black border-t border-gray-800 overflow-hidden galaxy-bg">
    <div class="mx-auto max-w-6xl px-4 mb-10 text-center">
      <p class="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">Trusted by</p>
    </div>
    <!-- Flattened Track: No padding, NO GAP (using margins instead) -->
    <div class="marquee-track flex items-center">
{cards_html}
    </div>
  </section>"""

# Regex to find the existing marquee section
pattern = r'(<!-- LOGO MARQUEE -->.*?)(<footer)'

match = re.search(pattern, content, re.DOTALL)

if match:
    new_content = content.replace(match.group(1), new_marquee_section + "\n\n  ")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully applied margin-based fix and removed pause.")
else:
    print("Could not find marquee section to fix.")
