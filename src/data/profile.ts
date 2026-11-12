export interface PersonalProfile {
  name: string;
  titles: string[];
  headline: string;
  heroHeadline: string;
  heroBio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  fiverr: string;
  status: string;
  aboutBio: string[];
  specializations: {
    id: string;
    title: string;
    description: string;
    coreHighlights: string[];
  }[];
}

export const profileData: PersonalProfile = {
  name: 'Shahzeb',
  titles: [
    'Full-Stack Engineer',
    'AI/ML Engineer',
    'Cybersecurity Enthusiast',
  ],
  headline: 'Full-Stack Engineer | AI/ML Engineer | Cybersecurity Enthusiast',
  heroHeadline: 'Building Intelligent Applications and Secure Digital Experiences.',
  heroBio: 'I develop full-stack applications, integrate intelligent AI systems, and explore cybersecurity through practical engineering and continuous learning. My work combines software architecture, backend development, machine learning, and emerging AI technologies to solve real-world problems.',
  location: 'Islamabad, Pakistan',
  email: 'shahzabaman971@gmail.com',
  github: 'https://github.com/RootUser-999',
  linkedin: 'https://linkedin.com/in/shahzeb-aman-4b826b292',
  fiverr: 'https://www.fiverr.com/shahzabaman',
  status: 'Currently exploring: Agentic AI | RAG | LLM Systems | Cybersecurity',
  aboutBio: [
    "I'm a Computer Science graduate from COMSATS University Islamabad with a strong interest in software engineering, artificial intelligence, and cybersecurity.",
    "My development experience includes building full-stack applications using Python, Django, Django REST Framework, JavaScript, React, and modern database technologies.",
    "Alongside software development, I have worked on AI-powered applications involving computer vision, deep learning, image classification, and Large Language Model integration. I am also developing my knowledge of RAG architectures, embeddings, AI agents, tool calling, and intelligent workflow automation.",
    "My cybersecurity interests include networking, Linux, security fundamentals, penetration testing, and security operations. I enjoy learning through technical labs, experimenting with security tools, and understanding how systems can be developed and protected.",
    "I believe in learning by building. I focus on practical projects, technical experimentation, and continuously improving my engineering skills.",
  ],
  specializations: [
    {
      id: 'fullstack',
      title: 'Full-Stack Engineering',
      description: 'End-to-end web applications, backend architecture, REST APIs, databases, authentication, frontend development, and SaaS platforms.',
      coreHighlights: [
        'Django, DRF & Python micro-architectures',
        'React, TypeScript & modern component systems',
        'PostgreSQL, SQLite, MongoDB & Redis caching',
        'Containerized development with Docker',
      ],
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      description: 'Machine learning, computer vision, deep learning, LLMs, RAG, embeddings, AI agents, and intelligent application integration.',
      coreHighlights: [
        'TensorFlow, Keras & custom 2D CNN classification',
        'Computer vision pipelines & frame sampling',
        'Google Gemini API & local Qwen LLM serving',
        'RAG architecture, vector retrieval & agent tool-calling',
      ],
    },
    {
      id: 'security',
      title: 'Cybersecurity',
      description: 'Networking, Linux, ethical hacking fundamentals, vulnerability assessment, security monitoring, and SOC-related learning.',
      coreHighlights: [
        'TCP/IP networking, packet analysis & Wireshark',
        'Kali Linux, Nmap reconnaissance & Burp Suite',
        'Windows/Linux system event log analysis',
        'SOC fundamentals, SIEM concepts & MITRE ATT&CK',
      ],
    },
  ],
};
