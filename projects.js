const projects = [
  {
    title: "DevX Project",
    desc: "Developer tools platform with code snippets, API testing, and team collaboration. Built for productivity.",
    img: "assets/projects/devx.png",
    tags: ["web"],
    tech: ["HTML", "CSS"],
    live: "https://devx-demo.com",
    code: "https://github.com/yourusername/devx",
  },
  {
    title: "CryptoZ Project",
    desc: "Crypto exchange dashboard with real-time prices, portfolio tracking, and trading charts using Currency converter API.",
    img: "assets/projects/crypto.png",
    tags: ["web", "api"],
    tech: ["HTML", "CSS", "JavaScript", "Currency Converter API"],
    live: "https://joseph-cryptoz-project.netlify.app/",
    code: "https://github.com/yourusername/cryptoproject",
  },
  {
    title: "Expenses Tracker",
    desc: "Personal finance app to track income/expenses. Category filters, monthly reports, and data export to CSV.",
    img: "assets/projects/expenses.png",
    tags: ["web"],
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://expenses-demo.com",
    code: "https://github.com/yourusername/expenses-tracker",
  },
  {
    title: "Chat Application",
    desc: "a chat feature people used for engagement.",
    img: "assets/projects/chat.png",
    tags: ["app"],
    tech: ["React"],
    live: "#",
    code: "#",
  },
  {
    title: "LearnFlow Management System",
    desc: "LearnFlow is a learning system that allows students to see their courses, track progress, and explore new learning opportunities.",
    img: "assets/projects/lms.png",
    tags: ["web", "app"],
    tech: ["HTML", "CSS", "JavaScript","React Js"],
    live: "https://jllearnflow.netlify.app/#/Landing",
    code: "https://github.com/yourusername/lms",
  },
];

// RENDER PROJECTS
function renderProjects(filter = "all") {
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = "";

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  filtered.forEach((project) => {
    const card = `
      <div class="project-card" data-category="${project.tags.join(" ")}">
        <img src="${project.img}" alt="${project.title}" class="project-img" onerror="this.src='https://via.placeholder.com/400x200/D0DBFF/2752E7?text=${project.title.replace(/ /g, "+")}'">
        <div class="project-content">
          <div class="project-tags">
            ${project.tech.map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.desc}</p>
          <div class="project-links">
            ${project.live ? `<a href="${project.live}" target="_blank" class="project-btn btn-live">Live Demo</a>` : ""}
            ${project.code ? `<a href="${project.code}" target="_blank" class="project-btn btn-code"><i class="fab fa-github"></i> Code</a>` : ""}
          </div>
        </div>
      </div>
    `;
    projectsGrid.insertAdjacentHTML("beforeend", card);
  });
}

// RENDER FILTERS DYNAMICALLY
function renderFilters() {
  const allTags = [...new Set(projects.flatMap(p => p.tags))];
  const filterContainer = document.querySelector('.project-filters');
  
  filterContainer.innerHTML = `
    <button class="filter-btn active" data-filter="all">All</button>
    ${allTags.map(tag => `
      <button class="filter-btn" data-filter="${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</button>
    `).join('')}
  `;
  
  // Re-attach event listeners
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

// INITIAL LOAD
document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderProjects();
});

// THEME TOGGLE
const themeToggle = document.getElementById('themeToggle');
const profileCard = document.querySelector('.profile-card');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    profileCard.classList.add('dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    profileCard.classList.toggle('dark-mode');
    
    // Update icon
    if (profileCard.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});


// HIRE ME TOGGLE
const hireMeBtn = document.getElementById('hireMeBtn');
const hireMeText = document.getElementById('hireMeText');

if (hireMeBtn && hireMeText) {
    hireMeBtn.addEventListener('click', () => {
        hireMeText.classList.toggle('active');
        
        // Change button text/icon when active
        const icon = hireMeBtn.querySelector('i');
        if (hireMeText.classList.contains('active')) {
            hireMeBtn.innerHTML = '<i class="fas fa-times"></i> Close';
        } else {
            hireMeBtn.innerHTML = '<i class="fas fa-briefcase"></i> Hire Me';
        }
    });
}