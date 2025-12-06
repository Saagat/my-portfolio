
import os

file_path = r"d:\Google-Antigravity\new\New folder\projects.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the single set of logos (diverse list)
companies = ["Airbnb", "Stripe", "Netflix", "Uber", "Adobe", "Figma", "Google", "Spotify"]

def create_card(name):
    return f"""
        <div class="flex-shrink-0 w-32 h-20 bg-gray-800/50 border border-gray-700 rounded-xl flex items-center justify-center hover:border-gray-600 transition-colors">
          <span class="text-gray-400 font-semibold text-sm">{name}</span>
        </div>"""

cards_html = "\n".join([create_card(name) for name in companies])

# Create the full marquee content with exactly 2 sets
marquee_inner_html = f"""
      <!-- Set 1 -->
      <div class="flex items-center gap-6">
        {cards_html}
      </div>
      <!-- Set 2 -->
      <div class="flex items-center gap-6">
        {cards_html}
      </div>"""

# We need to replace the content inside <div class="marquee-track gap-6 px-4"> ... </div>
# Regex is risky if there are nested divs, but here the structure is known.
# We'll look for the start tag and the closing tag of the section or track.

import re

# Find the marquee track div
# It starts with <div class="marquee-track gap-6 px-4">
# We can just replace the whole section content if we are careful.

# Let's target the inner content of the marquee-track
# We know it starts after <div class="marquee-track gap-6 px-4"> and ends before the closing </div> of that track.
# But finding the matching closing div with regex is hard.
# Instead, let's replace the whole <section ... galaxy-bg> ... </section> block since we know what it should look like.

new_marquee_section = f"""  <!-- LOGO MARQUEE -->
  <section class="py-16 bg-black border-t border-gray-800 overflow-hidden galaxy-bg">
    <div class="mx-auto max-w-6xl px-4 mb-10 text-center">
      <p class="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">Trusted by</p>
    </div>
    <div class="marquee-track gap-6 px-4">
{marquee_inner_html}
    </div>
  </section>"""

# Regex to find the existing marquee section
# It starts with <!-- LOGO MARQUEE --> and ends before <footer
pattern = r'(<!-- LOGO MARQUEE -->.*?)(<footer)'

match = re.search(pattern, content, re.DOTALL)

if match:
    new_content = content.replace(match.group(1), new_marquee_section + "\n\n  ")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully fixed marquee loop with 2 identical sets.")
else:
    print("Could not find marquee section to fix.")
