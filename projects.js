// PROJECTS DATA
const projects = [
  {
    title: "LearnFlow Management System",
    desc: "Learning system where students track courses and progress.",
    tags: ["React"],
    img: "assets/projects/lms.png",
    live: "https://jllearnflow.netlify.app/#/Landing",
    code: "https://github.com/joseph-kudus/lms",
  },
  {
    title: "CryptoZ Dashboard", 
    desc: "Crypto exchange dashboard with real-time prices using Currency API.",
    tags: ["HTML CSS & JS"],
    img: "assets/projects/crypto.png",
    live: "https://joseph-cryptoz-project.netlify.app/",
    code: null,
  },
  {
    title: "Expenses Tracker",
    desc: "Personal finance app to track income/expenses with CSV export.",
    tags: ["Pure HTML & CSS"],
    img: "assets/projects/expenses.png",
    live: null,
    code: "https://github.com/yourusername/expenses-tracker",
  },
];

// RENDER PROJECTS
function renderProjects(filter = "all") {
  const projectsList = document.getElementById("projectsList");
  if (!projectsList) return;
  
  projectsList.innerHTML = "";

  const filtered = filter === "all" 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  filtered.forEach((project) => {
    const projectHTML = `
      <div class="project-item">
        <img src="${project.img}" alt="${project.title}" class="project-img" onerror="this.src='https://via.placeholder.com/300x120/D0DBFF/2752E7?text=${project.title.replace(/ /g, '+')}'">
        <h5>${project.title}</h5>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <p>${project.desc}</p>
        <div class="project-links">
          ${project.live ? `<a href="${project.live}" target="_blank">Live Demo</a>` : ""}
          ${project.code ? `<a href="${project.code}" target="_blank">GitHub</a>` : ""}
        </div>
      </div>
    `;
    projectsList.insertAdjacentHTML("beforeend", projectHTML);
  });
}

// FILTER BUTTONS
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
});

// THEME TOGGLE
const themeToggle = document.getElementById('themeToggle');
const profileCard = document.querySelector('.profile-card');
const themeIcon = themeToggle.querySelector('i');

const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    profileCard.classList.add('dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    profileCard.classList.toggle('dark-mode');
    
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
        
        if (hireMeText.classList.contains('active')) {
            hireMeBtn.innerHTML = '<i class="fas fa-times"></i> Close';
        } else {
            hireMeBtn.innerHTML = '<i class="fas fa-briefcase"></i> Hire Me';
        }
    });
}