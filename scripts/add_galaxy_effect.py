
import os

file_path = r"d:\Google-Antigravity\new\New folder\projects.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Inject CSS Styles for Galaxy Effect
# We use multiple radial gradients to create stars of different sizes and positions
style_block = """    /* Galaxy Background Effect */
    .galaxy-bg {
      background-color: #000;
      background-image:
        radial-gradient(1px 1px at 10% 10%, white 100%, transparent),
        radial-gradient(1px 1px at 20% 20%, white 100%, transparent),
        radial-gradient(1px 1px at 30% 30%, white 100%, transparent),
        radial-gradient(1px 1px at 40% 40%, white 100%, transparent),
        radial-gradient(2px 2px at 50% 50%, white 100%, transparent),
        radial-gradient(1px 1px at 60% 60%, white 100%, transparent),
        radial-gradient(1px 1px at 70% 70%, white 100%, transparent),
        radial-gradient(1px 1px at 80% 80%, white 100%, transparent),
        radial-gradient(1px 1px at 90% 90%, white 100%, transparent),
        radial-gradient(1px 1px at 15% 85%, white 100%, transparent),
        radial-gradient(1px 1px at 85% 15%, white 100%, transparent);
      background-size: 400px 400px;
      animation: galaxyMove 100s linear infinite;
    }
    
    @keyframes galaxyMove {
      from { background-position: 0 0; }
      to { background-position: 1000px 1000px; }
    }
  </style>"""

if "</style>" in content and ".galaxy-bg" not in content:
    content = content.replace("</style>", style_block)
    print("Injected Galaxy CSS styles.")

# 2. Apply galaxy-bg class to the marquee section
# The marquee section currently has class="py-16 bg-black border-t border-gray-800 overflow-hidden"
# We will append galaxy-bg to it.

old_class = 'class="py-16 bg-black border-t border-gray-800 overflow-hidden"'
new_class = 'class="py-16 bg-black border-t border-gray-800 overflow-hidden galaxy-bg"'

if old_class in content:
    content = content.replace(old_class, new_class)
    print("Applied galaxy-bg class to marquee section.")
else:
    # Fallback: try to find it with slightly different spacing or attributes if needed
    # But since we just wrote it, it should match exactly.
    print("Could not find marquee section class to update.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
