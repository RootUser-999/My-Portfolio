export type ProficiencyLevel = 'Practical Project Experience' | 'Familiar' | 'Currently Learning';

export interface SkillItem {
  name: string;
  level: ProficiencyLevel;
  note?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    description: 'Core languages used for backend logic, full-stack systems, machine learning models, and scripting.',
    skills: [
      { name: 'Python', level: 'Practical Project Experience', note: 'Primary backend & AI language' },
      { name: 'JavaScript', level: 'Practical Project Experience', note: 'ES6+, DOM, client-side apps' },
      { name: 'TypeScript', level: 'Practical Project Experience', note: 'Type-safe React & full-stack development' },
      { name: 'Dart', level: 'Practical Project Experience', note: 'Used in Flutter mobile apps (GemVision, Deepfake)' },
      { name: 'SQL', level: 'Practical Project Experience', note: 'Relational schema design & queries' },
      { name: 'HTML5 & CSS3', level: 'Practical Project Experience', note: 'Semantic web standards & responsive layouts' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Development',
    description: 'Server architectures, RESTful API engineering, data modeling, authentication, and async queues.',
    skills: [
      { name: 'Django', level: 'Practical Project Experience', note: 'Production backend systems & ORM' },
      { name: 'Django REST Framework', level: 'Practical Project Experience', note: 'Token auth, viewsets, serializers' },
      { name: 'REST APIs', level: 'Practical Project Experience', note: 'Clean API contract design & error handling' },
      { name: 'Node.js', level: 'Practical Project Experience', note: 'Server runtimes & CLI tools' },
      { name: 'Express.js', level: 'Practical Project Experience', note: 'Lightweight REST APIs & middleware' },
      { name: 'FastAPI', level: 'Familiar', note: 'High-performance async Python endpoints' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Modern component-driven web interfaces, responsive design, state management, and user interaction.',
    skills: [
      { name: 'React.js', level: 'Practical Project Experience', note: 'Single Page Apps, hooks, modular state' },
      { name: 'Tailwind CSS', level: 'Practical Project Experience', note: 'Utility-first modern styling systems' },
      { name: 'Bootstrap', level: 'Practical Project Experience', note: 'Rapid UI prototyping & layout grids' },
      { name: 'Next.js', level: 'Familiar', note: 'SSR, App Router & full-stack React' },
      { name: 'Flutter', level: 'Practical Project Experience', note: 'Cross-platform mobile UI integration' },
    ],
  },
  {
    id: 'databases',
    name: 'Databases & Storage',
    description: 'Relational data modeling, document stores, key-value caching, and database migrations.',
    skills: [
      { name: 'PostgreSQL', level: 'Practical Project Experience', note: 'Multi-tenant relational schemas' },
      { name: 'SQLite', level: 'Practical Project Experience', note: 'Lightweight embedded storage' },
      { name: 'MongoDB', level: 'Practical Project Experience', note: 'Document-oriented persistence' },
      { name: 'Redis', level: 'Practical Project Experience', note: 'Message broker for Celery queues & caching' },
      { name: 'Supabase', level: 'Familiar', note: 'Managed Postgres & serverless backend' },
    ],
  },
  {
    id: 'ai-ml',
    name: 'Artificial Intelligence & Deep Learning',
    description: 'Neural network training, computer vision workflows, dataset preparation, and inference pipelines.',
    skills: [
      { name: 'TensorFlow', level: 'Practical Project Experience', note: 'Model architecture definition & training' },
      { name: 'Keras', level: 'Practical Project Experience', note: 'Layer composition & callbacks' },
      { name: 'Custom 2D CNN', level: 'Practical Project Experience', note: 'Image feature extraction & classification' },
      { name: 'Computer Vision', level: 'Practical Project Experience', note: 'OpenCV image preprocessing & augmentation' },
      { name: 'Image Classification', level: 'Practical Project Experience', note: 'Multi-class supervised prediction' },
      { name: 'Model Evaluation', level: 'Practical Project Experience', note: 'Confusion matrices, loss curves, metrics' },
    ],
  },
  {
    id: 'genai',
    name: 'Generative AI & LLMs',
    description: 'Prompt engineering, LLM API integration, token budgets, and local inference serving.',
    skills: [
      { name: 'Google Gemini API', level: 'Practical Project Experience', note: 'Structured outputs & operational summaries' },
      { name: 'Local Qwen LLMs', level: 'Practical Project Experience', note: 'Decoupled inference with Qwen3-4B' },
      { name: 'Prompt Engineering', level: 'Practical Project Experience', note: 'System constraints, few-shot, JSON modes' },
      { name: 'Context Management', level: 'Practical Project Experience', note: 'Sliding windows & token economics' },
      { name: 'Structured Outputs', level: 'Practical Project Experience', note: 'JSON schema enforcement for API consumers' },
    ],
  },
  {
    id: 'rag-agents',
    name: 'RAG & Agentic AI',
    description: 'Retrieval systems, semantic vector search, tool calling, and autonomous multi-step execution.',
    skills: [
      { name: 'Retrieval-Augmented Generation (RAG)', level: 'Currently Learning', note: 'Active research & pipeline implementation' },
      { name: 'Text Embeddings', level: 'Currently Learning', note: 'Dense vector generation for text chunks' },
      { name: 'Semantic & Vector Search', level: 'Currently Learning', note: 'Cosine similarity & retrieval rankings' },
      { name: 'AI Agents & Tool Calling', level: 'Currently Learning', note: 'Function routing & structured execution' },
      { name: 'Agent Orchestration Concepts', level: 'Currently Learning', note: 'Multi-step task decomposition' },
    ],
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Defensive Operations',
    description: 'Network protocols, vulnerability reconnaissance, log forensics, and defensive SOC concepts.',
    skills: [
      { name: 'Networking & TCP/IP', level: 'Practical Project Experience', note: 'Subnetting, routing, ports & protocols' },
      { name: 'Linux System Administration', level: 'Practical Project Experience', note: 'Permissions, processes, shell scripting' },
      { name: 'Wireshark', level: 'Practical Project Experience', note: 'Packet capture & HTTP/TCP traffic analysis' },
      { name: 'Nmap & Gobuster', level: 'Practical Project Experience', note: 'Network port discovery & web enumeration' },
      { name: 'Kali Linux', level: 'Practical Project Experience', note: 'Dedicated security audit distribution' },
      { name: 'Burp Suite', level: 'Familiar', note: 'HTTP interception & proxy analysis' },
      { name: 'SOC Log Analysis', level: 'Currently Learning', note: 'Windows Event IDs & Linux auth logs' },
      { name: 'MITRE ATT&CK', level: 'Familiar', note: 'Adversary tactics & technique mapping' },
      { name: 'SIEM Concepts', level: 'Currently Learning', note: 'Splunk, Wazuh & security event correlation' },
    ],
  },
  {
    id: 'tools',
    name: 'DevOps & Developer Tools',
    description: 'Version control, containers, debuggers, and engineering productivity tools.',
    skills: [
      { name: 'Git & GitHub', level: 'Practical Project Experience', note: 'Branching, PRs, version control' },
      { name: 'Docker', level: 'Practical Project Experience', note: 'Containerizing Django, Postgres & Redis' },
      { name: 'Postman', level: 'Practical Project Experience', note: 'API testing & collection documentation' },
      { name: 'Jupyter Notebook', level: 'Practical Project Experience', note: 'Data exploration & model experimentation' },
      { name: 'VS Code & Linux CLI', level: 'Practical Project Experience', note: 'Daily engineering environment' },
    ],
  },
];
