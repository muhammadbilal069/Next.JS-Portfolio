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
  resumeUrl: '/Muhammad_Bilal_Khan_Resume.pdf',
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
    title: 'SHOP.CO',
    description:
       'A full-stack e-commerce website built from a Figma design, featuring a responsive React interface, Node.js and Express.js REST APIs, product browsing, product details, and shopping cart functionality.',
    image: './SHOP.CO.png',
    tags: ['React', 'JavaScript', 'CSS', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    category: 'Full Stack',
    live: 'https://shop-co-omega-taupe.vercel.app/',
    github: 'https://github.com/muhammadbilal069/Shop.co',
  },
  {
    id: 2,
    title: 'Stepora',
    description:
       'A responsive shoe e-commerce website featuring Firebase Authentication, Firestore Database, Shopping Cart, and an Admin Dashboard with product CRUD functionality.',
    image: './Stepora.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Firestore'],
    category: 'Full Stack',
    live: 'https://stepora-store.vercel.app/',
    github: 'https://github.com/muhammadbilal069/stepora-store',
  },
  {
    id: 3,
    title: 'TaskFlow',
     description:
       'A React-based task management application featuring a dashboard, task organization, progress tracking, and local storage for data persistence.',
    image: './Taskflow.png',
    tags: ['React.js', 'JavaScript', 'CSS', 'React Router', 'Local Storage'],
    category: 'Frontend',
    live: 'https://taskflow-dev-069.vercel.app/',
    github: 'https://github.com/muhammadbilal069/TaskFlow',
  },
  {
    id: 4,
    title: 'MoveBuddy',
    description:
      'A feature-rich movie discovery web application built with HTML5, Bootstrap, and Custom CSS, featuring responsive layouts and interactive media overviews.',
    image: './MoveBuddy.png',
    tags: ['HTML5', 'Bootstrap', 'CSS', 'JavaScript', 'Responsive Design'],
    category: 'Frontend',
    live: 'https://muhammadbilal069.github.io/movebuddy/',
    github: 'https://github.com/muhammadbilal069/movebuddy',
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
