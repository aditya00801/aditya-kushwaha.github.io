/* ==========================================================================
   Projects Data Array
   ========================================================================== */
// Add new projects by creating a new object in this array
const projects = [
    {
        title: "Student Lifestyle and Stress Prediction",
        description: "An end-to-end Machine Learning web app predicting student health conditions across 3 categories. Trained on 690,088 records using an optimized CatBoost classifier and 20 engineered features, achieving a 94.985% balanced accuracy.",
        tags: ["Machine Learning", "CatBoost", "Streamlit", "Optuna"],
        codeLink: "https://github.com/aditya00801/Student_Lifestyle_and_Stress_Prediction",
        liveLink: "https://studentlifestyleandstressprediction-eyme6xuza6uzbh72mqn6rj.streamlit.app/"
    },
    {
        title: "CyberShield-Auto (Ongoing)",
        description: "🚧 [Currently in Development] An AI-driven cybersecurity platform for autonomous threat detection and response. Utilizes machine learning, multi-agent architecture, and security event analysis to identify suspicious activity, assess severity, and initiate actions automatically.",
        tags: ["AI Agents", "Machine Learning", "FastAPI", "Pydantic", "Cybersecurity", "Streamlit"],
        codeLink: "https://github.com/aditya00801/CyberShield-Auto",
        liveLink: ""
    },
    {
        title: "[NAME]",
        description: "[DESCRIPTION]",
        tags: ["[TECH TAGS]", "Placeholder"],
        codeLink: "[GITHUB LINK]",
        liveLink: "[LIVE LINK]"
    }
];

/* ==========================================================================
   DOM Elements & Initialization
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    renderProjects();
});

/* ==========================================================================
   Mobile Menu Functionality
   ========================================================================== */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (!menuBtn || !navLinks) return;

    // Toggle menu
    menuBtn.addEventListener('click', () => {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

/* ==========================================================================
   Render Projects
   ========================================================================== */
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    
    // Clear any existing content (like fallback text) if JS is running
    grid.innerHTML = '';

    projects.forEach(project => {
        // Create card container
        const card = document.createElement('div');
        card.className = 'glass-card project-card';

        // Title
        const title = document.createElement('h3');
        title.className = 'project-title';
        title.textContent = project.title;

        // Description
        const desc = document.createElement('p');
        desc.className = 'project-desc';
        desc.textContent = project.description;

        // Tags
        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'project-tags';
        project.tags.forEach(tagText => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = tagText;
            tagsContainer.appendChild(tag);
        });

        // Links
        const linksContainer = document.createElement('div');
        linksContainer.className = 'project-links';

        if (project.codeLink && project.codeLink.trim() !== '' && project.codeLink !== '[GITHUB LINK]') {
            const codeA = document.createElement('a');
            codeA.href = project.codeLink;
            codeA.target = '_blank';
            codeA.rel = 'noopener noreferrer';
            codeA.innerHTML = 'Code &nearr;';
            linksContainer.appendChild(codeA);
        } else if (project.codeLink === '[GITHUB LINK]') {
            const codeA = document.createElement('a');
            codeA.href = '#';
            codeA.innerHTML = 'Code &nearr;';
            linksContainer.appendChild(codeA);
        }

        if (project.liveLink && project.liveLink.trim() !== '' && project.liveLink !== '[LIVE LINK]') {
            const liveA = document.createElement('a');
            liveA.href = project.liveLink;
            liveA.target = '_blank';
            liveA.rel = 'noopener noreferrer';
            liveA.innerHTML = 'Live Demo &nearr;';
            linksContainer.appendChild(liveA);
        } else if (project.liveLink === '[LIVE LINK]') {
            const liveA = document.createElement('a');
            liveA.href = '#';
            liveA.innerHTML = 'Live Demo &nearr;';
            linksContainer.appendChild(liveA);
        }

        // Assemble card
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(tagsContainer);
        card.appendChild(linksContainer);

        grid.appendChild(card);
    });
}
