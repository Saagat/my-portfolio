// ==========================================
// DYNAMIC CONTENT LOADING
// ==========================================

const projectsData = {
    "project-1": {
        title: "E-commerce UX & Product UI",
        category: "UX / Research",
        role: "Lead UX Designer",
        timeline: "8 Weeks",
        tools: "Figma, Maze, Jira",
        year: "2024",
        heroImg: "https://via.placeholder.com/1280x720.png?text=E-commerce+Hero",
        content: `
  <h3>The Challenge</h3>
  <p>The client, a mid-sized fashion retailer, was experiencing a high cart abandonment rate (68%) and low mobile conversion. Users reported that the checkout process was confusing and the product filtering was ineffective.</p>
  
  <h3>The Solution</h3>
  <p>We conducted user interviews and heat map analysis to identify friction points. The redesign focused on:</p>
  <ul>
    <li>Simplifying the checkout flow to a single page.</li>
    <li>Implementing a robust faceted search and filtering system.</li>
    <li>Optimizing the mobile interface for touch targets and speed.</li>
  </ul>
  
  <h3>The Result</h3>
  <p>Post-launch analytics showed a <strong>27% increase in conversion rate</strong> and a <strong>15% reduction in cart abandonment</strong>. User satisfaction scores (CSAT) improved by 40%.</p>
`,
        gallery: [
            "https://via.placeholder.com/600x400.png?text=Wireframes",
            "https://via.placeholder.com/600x400.png?text=Mobile+UI",
            "https://via.placeholder.com/600x400.png?text=Style+Guide",
            "https://via.placeholder.com/600x400.png?text=Final+Screens"
        ]
    },
    "project-2": {
        title: "3D Product Visual & Motion Teaser",
        category: "3D / Motion",
        role: "3D Artist",
        timeline: "3 Weeks",
        tools: "Blender, After Effects",
        year: "2024",
        heroImg: "https://via.placeholder.com/1280x720.png?text=3D+Hero",
        content: `
  <h3>The Challenge</h3>
  <p>Launch a new tech gadget with high-impact visuals that stand out in a crowded market. The client needed photorealistic renders and a hype-building teaser video for social media.</p>
  
  <h3>The Solution</h3>
  <p>I created a high-fidelity 3D model of the product, focusing on materials and lighting to highlight its premium build. The motion teaser used dynamic camera angles and rhythmic editing synced to a high-energy track.</p>
  
  <h3>The Result</h3>
  <p>The teaser generated over <strong>50k views</strong> on Instagram in the first week. The hero imagery was used across the landing page and ad campaigns, contributing to a successful pre-order phase.</p>
`,
        gallery: [
            "https://via.placeholder.com/600x400.png?text=Render+1",
            "https://via.placeholder.com/600x400.png?text=Render+2",
            "https://via.placeholder.com/600x400.png?text=Wireframe",
            "https://via.placeholder.com/600x400.png?text=Motion+Still"
        ]
    },
    "project-3": {
        title: "SaaS Dashboard Interaction Design",
        category: "Product Design",
        role: "UI Designer",
        timeline: "6 Weeks",
        tools: "Figma, React",
        year: "2024",
        heroImg: "https://via.placeholder.com/1280x720.png?text=SaaS+Hero",
        content: `
  <h3>The Challenge</h3>
  <p>Users of a complex analytics platform were struggling to navigate the data. The existing dashboard was cluttered and lacked hierarchy.</p>
  
  <h3>The Solution</h3>
  <p>I introduced a modular widget system allowing users to customize their view. I also established a consistent design system with clear data visualization guidelines to make charts easier to read.</p>
  
  <h3>The Result</h3>
  <p>Support tickets related to "how to find data" dropped by <strong>35%</strong>. The new component library accelerated the dev team's velocity by 2x.</p>
`,
        gallery: [
            "https://via.placeholder.com/600x400.png?text=Dashboard+Overview",
            "https://via.placeholder.com/600x400.png?text=Widget+Library",
            "https://via.placeholder.com/600x400.png?text=Dark+Mode",
            "https://via.placeholder.com/600x400.png?text=Mobile+View"
        ]
    },
    "project-4": {
        title: "Mobile App UI/UX Redesign",
        category: "Mobile App",
        role: "Product Designer",
        timeline: "10 Weeks",
        tools: "Figma, Protopie",
        year: "2024",
        heroImg: "https://via.placeholder.com/1280x720.png?text=App+Hero",
        content: `
  <h3>The Challenge</h3>
  <p>A fintech app had a high drop-off rate during the KYC (Know Your Customer) onboarding process. Users found it tedious and intrusive.</p>
  
  <h3>The Solution</h3>
  <p>We gamified the onboarding process and broke it down into bite-sized steps. We also added "why we need this" tooltips to build trust.</p>
  
  <h3>The Result</h3>
  <p>Onboarding completion rate increased from 45% to <strong>72%</strong>. User retention after Day 30 improved by 15%.</p>
`,
        gallery: [
            "https://via.placeholder.com/600x400.png?text=Onboarding+Flow",
            "https://via.placeholder.com/600x400.png?text=Home+Screen",
            "https://via.placeholder.com/600x400.png?text=Profile",
            "https://via.placeholder.com/600x400.png?text=Interactions"
        ]
    },
    "project-5": {
        title: "Brand Website + 3D Hero Visuals",
        category: "Web Design",
        role: "Visual Designer",
        timeline: "4 Weeks",
        tools: "Webflow, Spline",
        year: "2024",
        heroImg: "https://via.placeholder.com/1280x720.png?text=Brand+Hero",
        content: `
  <h3>The Challenge</h3>
  <p>A boutique agency wanted to rebrand and position themselves as a premium, forward-thinking partner. Their old site was static and dated.</p>
  
  <h3>The Solution</h3>
  <p>I designed a Webflow site featuring interactive 3D elements and smooth scroll animations. The hero section features a 3D abstract shape that reacts to mouse movement.</p>
  
  <h3>The Result</h3>
  <p>The agency reported a significant increase in inbound leads from higher-tier clients. The site won a "Site of the Day" award on Awwwards.</p>
`,
        gallery: [
            "https://via.placeholder.com/600x400.png?text=Homepage",
            "https://via.placeholder.com/600x400.png?text=About+Page",
            "https://via.placeholder.com/600x400.png?text=Menu+Interaction",
            "https://via.placeholder.com/600x400.png?text=Mobile"
        ]
    },
    "project-6": {
        title: "Design System + Components",
        category: "Design Systems",
        role: "System Designer",
        timeline: "12 Weeks",
        tools: "Figma, Storybook",
        year: "2025",
        heroImg: "https://via.placeholder.com/1280x720.png?text=System+Hero",
        content: `
  <h3>The Challenge</h3>
  <p>A scaling startup had inconsistent UI across their 3 products. Developers were reinventing the wheel for every new feature.</p>
  
  <h3>The Solution</h3>
  <p>I audited the existing products and created a unified design language. I built a comprehensive Figma library with variables for theming and documented usage guidelines.</p>
  
  <h3>The Result</h3>
  <p>Development time for new features decreased by <strong>40%</strong>. The design system is now used by 15+ designers and developers.</p>
`,
        gallery: [
            "https://via.placeholder.com/600x400.png?text=Component+Library",
            "https://via.placeholder.com/600x400.png?text=Documentation",
            "https://via.placeholder.com/600x400.png?text=Tokens",
            "https://via.placeholder.com/600x400.png?text=Usage+Examples"
        ]
    }
};

// Parse URL param
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

// Populate Content
if (projectId && projectsData[projectId]) {
    const data = projectsData[projectId];

    // Text fields
    document.title = `${data.title} — Case Study`;
    const csCategory = document.getElementById('cs-category');
    if (csCategory) csCategory.innerText = data.category;

    const csTitle = document.getElementById('cs-title');
    if (csTitle) csTitle.innerText = data.title;

    const csRole = document.getElementById('cs-role');
    if (csRole) csRole.innerText = data.role;

    const csTimeline = document.getElementById('cs-timeline');
    if (csTimeline) csTimeline.innerText = data.timeline;

    const csTools = document.getElementById('cs-tools');
    if (csTools) csTools.innerText = data.tools;

    const csYear = document.getElementById('cs-year');
    if (csYear) csYear.innerText = data.year;

    // Hero Image
    const heroImg = document.getElementById('cs-hero-img');
    if (heroImg) {
        heroImg.src = data.heroImg;
        heroImg.alt = data.title;
    }

    // HTML Content
    const csContent = document.getElementById('cs-content');
    if (csContent) csContent.innerHTML = data.content;

    // Gallery
    const galleryContainer = document.getElementById('cs-gallery');
    if (galleryContainer) {
        data.gallery.forEach(imgSrc => {
            const div = document.createElement('div');
            div.className = 'rounded-xl overflow-hidden shadow-sm bg-gray-100 dark:bg-gray-800';
            div.innerHTML = `<img src="${imgSrc}" alt="Gallery Image" class="w-full h-auto hover:scale-105 transition-transform duration-500">`;
            galleryContainer.appendChild(div);
        });
    }

    // Navigation Logic (Simple Next/Prev)
    const pIds = Object.keys(projectsData);
    const currentIndex = pIds.indexOf(projectId);

    const prevIndex = (currentIndex - 1 + pIds.length) % pIds.length;
    const nextIndex = (currentIndex + 1) % pIds.length;

    const prevProjBtn = document.getElementById('prev-project');
    if (prevProjBtn) prevProjBtn.href = `case-study.html?id=${pIds[prevIndex]}`;

    const nextProjBtn = document.getElementById('next-project');
    if (nextProjBtn) nextProjBtn.href = `case-study.html?id=${pIds[nextIndex]}`;

} else {
    // Fallback or 404
    const csContent = document.getElementById('cs-content');
    if (csContent) csContent.innerHTML = '<p class="text-center text-red-500">Project not found.</p>';
}
