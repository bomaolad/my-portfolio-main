

/** @typedef {{ title: string, context: string, role: string, outcome: string, technologies: string[], demo: string, code: string }} Project */

/** @type {Project[]} */
export const PROJECTS = [
  {
    title: 'Barcode Scanner App',
    context: 'Inventory management was bottlenecked by manual product lookups.',
    role: 'Lead Mobile Developer',
    outcome: 'Built a React Native app that reduced lookup time by 60% through instant QR/Barcode scanning.',
    technologies: ['React Native', 'Expo', 'Camera API'],
    demo: 'https://drive.google.com/drive/folders/1aBmXOo3XxE_ADhKiCiWuxh67S19TQ3J_?usp=sharing',
    code: 'https://github.com/muhammed-codes/scan-item',
  },
  {
    title: 'Family Portal',
    context: 'Needed a secure, centralized platform for family event coordination.',
    role: 'FullStack Developer',
    outcome: 'Delivered a private Next.js application that streamlined event planning and memory sharing.',
    technologies: ['Next.js', 'TypeScript', 'REST API'],
    demo: 'https://royal-chuckles-family-portal.vercel.app/',
    code: 'https://github.com/bomaolad/royal-chuckles-family-portal',
  },
  {
    title: 'AI Assistant Interface',
    context: 'Exploring real-time AI conversational interfaces.',
    role: 'Frontend Engineer',
    outcome: 'Implemented a responsive chat UI with streaming responses, integrating external AI APIs.',
    technologies: ['React', 'Tailwind CSS', 'REST API'],
    demo: 'https://gemini-clone-ruby-eight.vercel.app/',
    code: 'https://github.com/bomaolad/gemini-clone',
  },
  {
    title: 'HRS Platform',
    context: 'HR operations were slowed by fragmented spreadsheet tracking.',
    role: 'Frontend Developer',
    outcome: 'Developed a unified dashboard for attendance and payroll processing.',
    technologies: ['React Native', 'TypeScript', 'Tailwind'],
    demo: '',
    code: 'https://github.com/bomaolad/hrs-app',
  },
];

/** @typedef {{ title: string, skills: string[] }} SkillCategory */

/** @type {SkillCategory[]} */
export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    skills: ['React', 'React Native', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend & Database',
    skills: ['Node.js', 'Express.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'GraphQL'],
  },
  {
    title: 'Languages & Core',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Go', 'REST APIs', 'Git', 'Docker', 'Postman'],
  },
];
