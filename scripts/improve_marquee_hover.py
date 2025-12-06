
import re

file_path = r"d:\Google-Antigravity\new\New folder\projects.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Card Container Class
# Add 'group', 'hover:bg-gray-800', 'hover:border-gray-500', 'hover:shadow-lg', 'hover:shadow-emerald-500/20'
# Original: hover:border-gray-600 transition-colors
# New: hover:border-gray-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-emerald-900/20 transition-all duration-300 group

old_card_class = 'hover:border-gray-600 transition-colors'
new_card_class = 'hover:border-gray-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-emerald-900/20 transition-all duration-300 group'

if old_card_class in content:
    content = content.replace(old_card_class, new_card_class)
    print("Updated card container classes.")
else:
    print("Could not find original card class to replace.")

# 2. Update Text Span Class
# Add 'group-hover:text-white'
# Original: text-gray-400 font-semibold text-sm
# New: text-gray-400 font-semibold text-sm group-hover:text-white transition-colors

old_text_class = 'text-gray-400 font-semibold text-sm'
new_text_class = 'text-gray-400 font-semibold text-sm group-hover:text-white transition-colors'

if old_text_class in content:
    content = content.replace(old_text_class, new_text_class)
    print("Updated text span classes.")
else:
    print("Could not find original text class to replace.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
