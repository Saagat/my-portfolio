
import os

file_path = r"d:\Google-Antigravity\new\New folder\Index.html"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# We want to keep lines up to the modal start.
# Based on previous views, the modal starts at line 1099 with "  <!-- PROJECT DETAILS MODAL -->"
# But we should find it dynamically to be safe.

output_lines = []
found_modal = False
for line in lines:
    if "<!-- PROJECT DETAILS MODAL -->" in line:
        found_modal = True
        break
    output_lines.append(line)

if not found_modal:
    print("Could not find modal start tag. Appending anyway?")
    # If we can't find it, maybe we should just look for the end of the script before it?
    # The script before it ends with </script> around line 1098.
    # Let's just use the line count if we are sure, or search for the specific script end.
    pass

# Append the new content
new_content = """
  <!-- PROJECT NAVIGATION LOGIC -->
  <script>
    // Instead of a modal, we navigate to the case study page
    document.getElementById('projects-grid').addEventListener('click', function (e) {
      const card = e.target.closest('.project-card');
      if (card) {
        e.preventDefault(); // Prevent default link behavior
        const projectId = card.getAttribute('data-id');
        if (projectId) {
          window.location.href = `case-study.html?id=${projectId}`;
        }
      }
    });
  </script>
</body>
</html>
"""

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(output_lines)
    f.write(new_content)

print("Successfully updated Index.html")
