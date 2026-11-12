export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  employmentType: string;
  location: string;
  period: string;
  current: boolean;
  responsibilities: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'webloop',
    company: 'Webloop',
    role: 'Full Stack Engineer',
    employmentType: 'Part-time',
    location: 'Rawalpindi, Pakistan',
    period: 'September 2024 – Present',
    current: true,
    responsibilities: [
      'Develop and maintain full-stack applications using Python, Django, Django REST Framework, and JavaScript.',
      'Build REST APIs, backend business logic, database models, and application functionality.',
      'Integrate third-party APIs and external web services into core production modules.',
      'Implement authentication, data handling pipelines, and reusable application components.',
      'Troubleshoot, debug, and resolve complex backend and frontend functional issues.',
      'Develop responsive user interfaces and improve application performance and reliability.',
    ],
    technologies: ['Python', 'Django', 'Django REST Framework', 'JavaScript', 'PostgreSQL', 'REST APIs', 'Git'],
  },
  {
    id: 'fiverr',
    company: 'Fiverr',
    role: 'Freelance Full-Stack Web Developer',
    employmentType: 'Freelance / Contract',
    location: 'Remote',
    period: '2022 – Present',
    current: true,
    responsibilities: [
      'Develop custom web applications and business solutions tailored to client specifications.',
      'Build backend systems using Python, Django, and Django REST Framework.',
      'Develop frontend interfaces using JavaScript, React, and modern UI tooling.',
      'Implement authentication, database operations, REST APIs, and third-party integrations.',
      'Integrate AI services into web applications where required by business workflows.',
      'Work on business management systems, marketplaces, job portals, and other custom web platforms.',
      'Manage complete development cycles, debugging, code quality, and on-time project delivery.',
    ],
    technologies: ['Python', 'Django', 'React', 'JavaScript', 'REST APIs', 'SQLite', 'PostgreSQL', 'Tailwind CSS'],
  },
];
