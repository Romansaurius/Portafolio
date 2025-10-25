// Skills data
const skillsData = [
    { name: "PHP", icon: "🐘" },
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "🟨" },
    { name: "HTML", icon: "🏗️" },
    { name: "CSS", icon: "🎨" },
    { name: "MySQL", icon: "🗄️" },
    { name: "SQLite", icon: "🗄️" },
    { name: "Git", icon: "📚" },
    { name: "GitHub", icon: "🐙" },
    { name: "APIs REST", icon: "🔗" },
    { name: "JSON", icon: "📄" },
    { name: "Bash Scripts", icon: "💻" },
    { name: "Linux", icon: "🐧" },
    { name: "React Js", icon: "⚛️" },
    { name: "Next Js", icon: "▲" },
    { name: "Vue Js", icon: "💚" },
    { name: "React Native", icon: "📱" },
    { name: "Redux", icon: "🔄" },
    { name: "Firebase", icon: "🔥" },
    { name: "Tailwind", icon: "💨" },
    { name: "Framer Motion", icon: "🎭" },
    { name: "GSAP", icon: "🎬" },
];

// Works data
const reactData = [
    {
        title: "Halo",
        desc: "Premium landing experience showcasing immersive GSAP animations, smooth scrolling, and 3D visuals.",
        tech: ["Next.js", "Three.js", "GSAP", "TailwindCss"],
        gitlink: "https://github.com/Pappyjay23/Halo",
        site: "https://halo-vp.vercel.app",
    },
    {
        title: "Techi-Dashboard",
        desc: "Jira-style task manager with drag-and-drop tasks and Context API state management.",
        tech: ["React.js", "Dnd-Kit", "TailwindCss", "Context API"],
        gitlink: "https://github.com/Pappyjay23/Techinnover",
        site: "https://techinnover-vp.vercel.app",
    },
    {
        title: "Netflix Clone",
        desc: "Custom Netflix-style UI with API integration and responsive layouts.",
        tech: ["React.js", "Firebase", "TailwindCss", "APIs", "Axios", "Context API", "PWAs"],
        gitlink: "https://github.com/Pappyjay23/netflix-clone",
        site: "https://netflix-vp.vercel.app",
    },
    {
        title: "Digitaly",
        desc: "Digital agency site with smooth UI animations using Framer Motion.",
        tech: ["React.js", "TailwindCss", "Framer Motion"],
        gitlink: "https://github.com/Pappyjay23/Digitaly",
        site: "https://digitaly.netlify.app/",
    },
    {
        title: "Titan",
        desc: "3D car customization app using React + Three.js for interactive modeling.",
        tech: ["React.js", "Three.js", "TailwindCss"],
        gitlink: "https://github.com/Pappyjay23/Titan",
        site: "https://titan-motors.vercel.app/",
    },
    {
        title: "Forcythe Clone",
        desc: "UI clone project showcasing animations and transitions for a smooth UX.",
        tech: ["Next.js", "TailwindCss", "CSS Animations"],
        gitlink: "https://github.com/Pappyjay23/forcythe",
        site: "https://forcythe-pearl.vercel.app",
    },
];

const vueData = [
    {
        title: "DevHire",
        desc: "An innovative platform that connects tech talents with their potential employers.",
        tech: ["Vue.js", "Pinia", "APIs", "TailwindCss", "Firebase", "Vue-Router", "Yup", "Axios"],
        gitlink: "https://github.com/Pappyjay23/DevHire",
        site: "https://dev-hire-vp.vercel.app/",
    },
    {
        title: "ArtSphere",
        desc: "A platform to showcase beautiful image collections.",
        tech: ["Vue.js", "APIs", "TailwindCss", "Firebase", "Vue-Router"],
        gitlink: "https://github.com/Pappyjay23/ArtSphere",
        site: "https://art-sphere-gallery.vercel.app/",
    },
    {
        title: "Mini Unsplash",
        desc: "A platform that allows you to enjoy the beauty of high-quality imagery right at your fingertips",
        tech: ["Vue.js", "APIs", "Sass", "Axios"],
        gitlink: "",
        site: "https://mini-unsplash-clone.vercel.app/",
    },
];

const reactNativeData = [
    {
        title: "Serenify",
        desc: "A mobile app combining guided meditation and daily affirmations to inspire and uplift",
        tech: ["React Native", "Expo", "Expo-Router", "Expo-Vector-Icons", "Native Wind"],
        gitlink: "https://github.com/Pappyjay23/Serenify",
        app: "https://drive.google.com/uc?export=download&id=1WGhO4zmFH6C05_PY9C5CYYEUVNCNVRHJ",
    },
];

// DOM elements
const loader = document.getElementById('loader');
const navbar = document.getElementById('navbar');
const menuIcon = document.getElementById('menu-icon');
const toTopIcon = document.getElementById('to-top-icon');
const skillsBox = document.getElementById('skills-box');
const worksBox = document.getElementById('works-box');
const tabs = document.querySelectorAll('.tab');
const contactForm = document.getElementById('contact-form');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader after 3 seconds
    setTimeout(() => {
        loader.style.display = 'none';
    }, 3000);

    // Initialize components
    initSkills();
    initWorks();
    initNavbar();
    initScrollToTop();
    initForm();
});

// Initialize skills section
function initSkills() {
    skillsData.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <small class="skill-desc">${skill.name}</small>
        `;
        skillsBox.appendChild(skillCard);
    });
}

// Initialize works section
function initWorks() {
    showWorks('react');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            showWorks(tabId);

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
}

function showWorks(tabId) {
    worksBox.innerHTML = '';

    let data;
    switch(tabId) {
        case 'react':
            data = reactData;
            break;
        case 'vue':
            data = vueData;
            break;
        case 'react-native':
            data = reactNativeData;
            break;
        default:
            data = reactData;
    }

    data.forEach(work => {
        const workCard = document.createElement('a');
        workCard.className = 'work-link-group';
        workCard.href = tabId === 'react-native' ? work.app : work.site;
        workCard.target = '_blank';

        workCard.innerHTML = `
            <div class="works-card">
                <div class="works-container">
                    <div class="top-work">
                        <span class="work-folder">📁</span>
                        <div class="right">
                            ${work.gitlink ? `<a class="work-git" href="${work.gitlink}" target="_blank">🐙</a>` : ''}
                            ${tabId === 'react-native' ?
                                `<a class="work-link" href="${work.app}" download="${work.title}" target="_blank">⬇️</a>` :
                                `<span class="work-link">🔗</span>`
                            }
                        </div>
                    </div>
                    <div class="mid-work">
                        <p class="work-title">${work.title}</p>
                        <p class="work-desc">${work.desc}</p>
                    </div>
                    <div class="bottom-work">
                        ${work.tech.map(tech => `<small>${tech}</small>`).join('')}
                    </div>
                </div>
            </div>
        `;

        worksBox.appendChild(workCard);
    });
}

// Initialize navbar functionality
function initNavbar() {
    let navOpen = false;

    menuIcon.addEventListener('click', () => {
        navOpen = !navOpen;
        if (navOpen) {
            navbar.classList.add('active');
        } else {
            navbar.classList.remove('active');
        }
    });

    // Close navbar when clicking on links
    document.querySelectorAll('.mid-links').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            navOpen = false;
        });
    });

    // Close navbar when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
            navbar.classList.remove('active');
            navOpen = false;
        }
    });
}

// Initialize scroll to top functionality
function initScrollToTop() {
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            toTopIcon.classList.remove('hide');
            toTopIcon.classList.add('show');
        } else {
            toTopIcon.classList.remove('show');
            toTopIcon.classList.add('hide');
        }
    });

    // Scroll to top when clicked
    toTopIcon.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize contact form
function initForm() {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Simple form validation
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all fields');
            return;
        }

        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});