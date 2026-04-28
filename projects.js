const projects = [
  {
    title: "DevX Project",
    desc: "Developer tools platform with code snippets, API testing, and team collaboration. Built for productivity.",
    img: "assets/projects/devx.png",
    tags: ["web", "api"],
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://devx-demo.com", // replace with your link
    code: "https://github.com/yourusername/devx", // replace with your repo
  },
  {
    title: "CryptoProject",
    desc: "Crypto exchange dashboard with real-time prices, portfolio tracking, and trading charts using CoinGecko API.",
    img: "assets/projects/crypto.png",
    tags: ["web", "api"],
    tech: ["JavaScript", "Chart.js", "API"],
    live: "https://joseph-cryptoz-project.netlify.app/", 
    code: "https://github.com/yourusername/cryptoproject", 
  },
  {
    title: "Expenses Tracker",
    desc: "Personal finance app to track income/expenses. Category filters, monthly reports, and data export to CSV.",
    img: "assets/projects/expenses.png",
    tags: ["web"],
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    live: "https://expenses-demo.com", // replace
    code: "https://github.com/yourusername/expenses-tracker", // replace
  },
  {
    title: "Learning Management System",
    desc: "Full LMS for courses, quizzes, and student progress. Admin dashboard, auth, and video streaming support.",
    img: "assets/projects/lms.png",
    tags: ["web"],
    tech: ["PHP", "MySQL", "Bootstrap"],
    live: "https://jllearnflow.netlify.app/#/Landing", // leave blank if no live demo
    code: "https://github.com/yourusername/lms", // replace
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
