
import os
import re

files = [
    r"d:\Google-Antigravity\new\New folder\Index.html",
    r"d:\Google-Antigravity\new\New folder\projects.html",
    r"d:\Google-Antigravity\new\New folder\services.html",
    r"d:\Google-Antigravity\new\New folder\case-study.html",
    r"d:\Google-Antigravity\new\New folder\blog.html"
]

# The new standardized button code
new_button_code = """          <button id="theme-toggle" class="p-2 rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
            aria-label="Toggle theme">"""

# Regex pattern to match the existing button opening tag
# It matches <button id="theme-toggle" ... > (multiline)
# We stop at the first >
pattern = re.compile(r'<button id="theme-toggle"[^>]*>', re.DOTALL)

for file_path in files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if the file has the button
        if '<button id="theme-toggle"' in content:
            # Replace the opening tag
            new_content = pattern.sub(new_button_code, content)
            
            # If the content changed, write it back
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {os.path.basename(file_path)}")
            else:
                print(f"No changes needed for {os.path.basename(file_path)}")
        else:
            print(f"Button not found in {os.path.basename(file_path)}")

    except Exception as e:
        print(f"Error processing {os.path.basename(file_path)}: {e}")
