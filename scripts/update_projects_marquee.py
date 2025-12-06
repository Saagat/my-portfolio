
import os

file_path = r"d:\Google-Antigravity\new\New folder\projects.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the new marquee section with card-based design
# We use a dark theme for the cards as requested.
# Companies: Airbnb, Stripe, Netflix, Uber, Adobe, Figma, Google, Spotify
companies = ["Airbnb", "Stripe", "Netflix", "Uber", "Adobe", "Figma", "Google", "Spotify"]

def create_card(name):
    return f"""
        <div class="flex-shrink-0 w-32 h-20 bg-gray-800/50 border border-gray-700 rounded-xl flex items-center justify-center hover:border-gray-600 transition-colors">
          <span class="text-gray-400 font-semibold text-sm">{name}</span>
        </div>"""

cards_html = "\n".join([create_card(name) for name in companies])

# We need 2 sets for the loop
marquee_content = f"""  <!-- LOGO MARQUEE -->
  <section class="py-16 bg-black border-t border-gray-800 overflow-hidden">
    <div class="mx-auto max-w-6xl px-4 mb-10 text-center">
      <p class="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">Trusted by</p>
    </div>
    <div class="marquee-track gap-6 px-4">
      <!-- Set 1 -->
      <div class="flex items-center gap-6">
        {cards_html}
      </div>
      <!-- Set 2 -->
      <div class="flex items-center gap-6">
        {cards_html}
      </div>
      <!-- Set 3 -->
      <div class="flex items-center gap-6">
        {cards_html}
      </div>
    </div>
  </section>"""

# Find the existing marquee section to replace
# It starts with <!-- LOGO MARQUEE --> and ends before <footer
import re

# Regex to capture the entire marquee section
# We assume it starts with <!-- LOGO MARQUEE --> and goes until the footer tag
pattern = r'(<!-- LOGO MARQUEE -->.*?)(<footer)'

match = re.search(pattern, content, re.DOTALL)

if match:
    # Replace the found section with the new marquee content + the footer tag (which was consumed by the group)
    new_content = content.replace(match.group(1), marquee_content + "\n\n  ")
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully updated marquee to card-based design.")
else:
    print("Could not find existing marquee section.")
