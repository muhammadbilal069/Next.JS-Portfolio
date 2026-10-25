// Centralized content for the portfolio. Edit this file to personalize the site.

export const personal = {
  name: 'M.Bilal Khan',
  title: 'Full-Stack Developer',
  taglineWords: [
    'Full-Stack Developer',
    'React Specialist',
    'MERN Stack Developer',
    'Problem Solver',
    'Frontend Engineer',
  ],
  intro:
    "I'm a Full-Stack Developer focused on building modern, responsive, and user-friendly web applications. Using React.js, Next.js, Node.js, Express.js, and MongoDB, I turn ideas into functional digital experiences with clean code, intuitive design, and reliable performance.",
  resumeUrl: '/resume.pdf',
  email: 'muhammadbilalkhan1120@gmail.com',
  phone: '+92 3111300393',
  location: 'Karachi, Pakistan',
  avatar: "/bilal.jpeg",
  socials: [
    { name: 'GitHub', href: 'https://github.com/your-username', icon: 'FiGithub' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/your-username', icon: 'FiLinkedin' },
    { name: 'Email', href: 'mailto:hello@arjunme', icon: 'FiMail' },
    { name: 'WhatsApp', href: 'https://wa.me/923111300393', icon: 'FaWhatsapp' },
  ],
}

export const aboutStats = [
  { label: 'Projects Completed', value: 15, suffix: '+' },
  { label: 'Technologies', value: 10, suffix: '+' },
  { label: 'Certificates', value: 3, suffix: '' },
  { label: 'Years Learning', value: 2, suffix: '+' },
]

export const skills = {
  Frontend: [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 92 },
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 93 },
    { name: 'Next.js', level: 85 },
    { name: 'Redux Toolkit', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Responsive Design', level: 95 },
  ],
  Backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 83 },
    { name: 'MongoDB', level: 80 },
    { name: 'Mongoose', level: 85 },
    { name: 'REST APIs', level: 90 },

  ],
  Tools: [
    { name: 'Git', level: 90 },
    { name: 'GitHub', level: 90 },
    { name: 'VS Code', level: 95 },
    { name: 'Postman', level: 88 },
    { name: 'Figma', level: 78 },
  ],
}

export const services = [
  {
    title: 'Frontend Development',
    description:
      'Creating clean, interactive, and responsive interfaces using React.js, Next.js, JavaScript, and Tailwind CSS.',
    icon: 'FiCode',
  },
  {
    title: 'Full-Stack Development',
    description:
      'Building complete web applications by connecting modern user interfaces with backend services and databases using React.js, Node.js, Express.js, and MongoDB.',
    icon: 'FiLayers',
  },
  {
    title: 'Backend Development',
    description:
      'Developing server-side functionality and REST APIs using Node.js and Express.js, with MongoDB and Mongoose for data storage and management.',
    icon: 'FiServer',
  },
  {
    title: 'UI Implementation',
    description:
      'Turning Figma designs into responsive web interfaces with careful attention to layout, spacing, visual consistency, and detail.',
    icon: 'FiFeather',
  },
]

export const projectCategories = ['All', 'Frontend','Full Stack']

export const projects = [
  {
    id: 1,
    title: 'Nimbus Analytics',
    description:
      'A real-time analytics dashboard with live charts, custom filters, and role-based access control.',
    image: null,
    tags: ['React', 'Redux', 'Chart.js'],
    category: 'React',
    live: 'https://example.com',
    github: 'https://github.com/',
  },
  {
    id: 2,
    title: 'Marketing Site — Lumen',
    description:
      'A conversion-focused marketing site with scroll-triggered animation and a 98 Lighthouse score.',
    image: null,
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    live: 'https://example.com',
    github: 'https://github.com/',
  },
  {
    id: 3,
    title: 'Orbit — Team Workspace',
    description:
      'A full-stack collaboration tool with real-time chat, kanban boards, and file sharing.',
    image: null,
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    live: 'https://example.com',
    github: 'https://github.com/',
  },
  {
    id: 4,
    title: 'Pulse — Fitness Tracker',
    description:
      'A mobile-first tracker with animated progress rings and offline-first data sync.',
    image: null,
    tags: ['React', 'PWA', 'IndexedDB'],
    category: 'React',
    live: 'https://example.com',
    github: 'https://github.com/',
  },
  {
    id: 5,
    title: 'Foundry — Component Library',
    description:
      'A themeable design-system component library used across four internal products.',
    image: null,
    tags: ['React', 'Storybook', 'Tailwind'],
    category: 'Frontend',
    live: 'https://example.com',
    github: 'https://github.com/',
  },
  {
    id: 6,
    title: 'Marketplace API + Storefront',
    description:
      'A two-sided marketplace with Stripe payments, seller dashboards, and search.',
    image: null,
    tags: ['Node.js', 'Express', 'MongoDB', 'React'],
    category: 'Full Stack',
    live: 'https://example.com',
    github: 'https://github.com/',
  },
]

export const education = [
  {
    institution: 'FAST National University',
    degree: 'BS Computer Science',
    duration: '2018 — 2022',
    description: 'Focused on web technologies, data structures, and software architecture.',
  },
  {
    institution: 'The City School',
    degree: 'A-Levels, Computer Science & Mathematics',
    duration: '2016 — 2018',
    description: 'Graduated with distinction; built first web projects during this time.',
  },
]


export const certificates = [
  { title: 'Meta Front-End Developer', issuer: 'Meta (Coursera)', year: '2023', image: null },
  { title: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', year: '2022', image: null },
  { title: 'React — The Complete Guide', issuer: 'Udemy', year: '2022', image: null },
  { title: 'Node.js Developer Certification', issuer: 'OpenJS Foundation', year: '2023', image: null },
  { title: 'UI/UX Design Fundamentals', issuer: 'Google (Coursera)', year: '2023', image: null },
  { title: 'MongoDB Associate Developer', issuer: 'MongoDB University', year: '2024', image: null },
]

export const techStack = [
  'React.js', 'Next.js', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit', 'Mongoose', 'REST APIs', 'Postman',
  'Tailwind CSS', 'Git', 'GitHub', 'Figma', 'HTML5', 'CSS3', 'Responsive Design'
]

export const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Services', to: 'services' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
]
