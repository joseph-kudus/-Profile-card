const projects = [
  {
    title: "DevX Project",
    desc: "Developer tools platform with code snippets, API testing, and team collaboration. Built for productivity.",
    img: "assets/projects/devx.png",
    tags: ["HTML", "CSS"],
    tech: ["React", "Node.js", "MongoDB"],
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
    title: "Learning Management System",
    desc: "Full LMS for courses, quizzes, and student progress. Admin dashboard, auth, and video streaming support.",
    img: "assets/projects/lms.png",
    tags: ["web"],
    tech: ["React", "Node Js", "CSS"],
    live: "https://jllearnflow.netlify.app/#/Landing",
    code: "https://github.com/yourusername/lms",
  },
];

// RENDER PROJECTS
const projectsGrid = document.getElementById("projectsGrid");
const filterBtns = document.querySelectorAll(".filter-btn");

function renderProjects(filter = "all") {
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

// FILTER LOGIC
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

// INITIAL LOAD
document.addEventListener("DOMContentLoaded", () => renderProjects());



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