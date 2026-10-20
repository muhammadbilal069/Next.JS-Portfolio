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
     "I'm a Full-Stack Developer passionate about building modern, responsive, and user-friendly web applications using React.js, Next.js, Node.js, Express.js, and MongoDB to create functional web experiences with clean design and reliable performance.",
  resumeUrl: '/resume.pdf',
  email: 'hello@arjunmehta.dev',
  phone: '+92 3111300393',
  location: 'Karachi, Pakistan',
  avatar: null, // add a real image path here, e.g. '/avatar.jpg'
  socials: [
    { name: 'GitHub', href: 'https://github.com/', icon: 'FiGithub' },
    { name: 'LinkedIn', href: 'https://linkedin.com/', icon: 'FiLinkedin' },
    { name: 'Twitter', href: 'https://twitter.com/', icon: 'FiTwitter' },
    { name: 'Dribbble', href: 'https://dribbble.com/', icon: 'FiDribbble' },
  ],
}

export const aboutStats = [
  { label: 'Projects Completed', value: 48, suffix: '+' },
  { label: 'Happy Clients', value: 26, suffix: '+' },
  { label: 'Certificates', value: 12, suffix: '' },
  { label: 'Years Learning', value: 5, suffix: '+' },
]

export const skills = {
  Frontend: [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 92 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 93 },
    { name: 'Redux', level: 82 },
    { name: 'Tailwind CSS', level: 90 },
  ],
  Backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 83 },
    { name: 'MongoDB', level: 80 },
  ],
  Tools: [
    { name: 'Git', level: 90 },
    { name: 'GitHub', level: 90 },
    { name: 'VS Code', level: 95 },
    { name: 'Figma', level: 78 },
  ],
}

export const services = [
  {
    title: 'Frontend Development',
    description:
      'Interfaces built with modern JavaScript and semantic HTML, tuned for speed and accessibility on every device.',
    icon: 'FiCode',
  },
  {
    title: 'React Development',
    description:
      'Component-driven applications with clean state management, reusable hooks, and maintainable architecture.',
    icon: 'FiLayers',
  },
  {
    title: 'Responsive Design',
    description:
      'Layouts that adapt fluidly from a 5-inch phone to an ultrawide monitor, without compromising on detail.',
    icon: 'FiSmartphone',
  },
  {
    title: 'UI Implementation',
    description:
      'Turning Figma files into production-ready interfaces, matching motion, spacing, and detail precisely.',
    icon: 'FiFeather',
  },
]

export const projectCategories = ['All', 'Frontend', 'React', 'Full Stack']

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

export const testimonials = [
  {
    name: 'Sara Ahmed',
    position: 'Product Manager, Nova Digital',
    photo: null,
    review:
      "Arjun turns vague requirements into polished, working interfaces faster than anyone I've worked with. Communication is excellent throughout.",
  },
  {
    name: 'Daniel Cho',
    position: 'Founder, Brightloop Studio',
    photo: null,
    review:
      'The attention to detail on animation and responsiveness is rare. Our clients noticed the difference immediately.',
  },
  {
    name: 'Meera Khan',
    position: 'CTO, Pixel Forge',
    photo: null,
    review:
      'Reliable, communicative, and genuinely invested in the product — not just the ticket in front of them.',
  },
  {
    name: 'James Ortiz',
    position: 'Engineering Lead, Foundry',
    photo: null,
    review:
      'Our component library is cleaner and more consistent thanks to the system Arjun designed and documented.',
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
  'React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Redux',
  'Tailwind CSS', 'Git', 'GitHub', 'Figma', 'HTML5', 'CSS3',
]

export const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Services', to: 'services' },
  { name: 'Projects', to: 'projects' },
  { name: 'Testimonials', to: 'testimonials' },
  { name: 'Contact', to: 'contact' },
]
