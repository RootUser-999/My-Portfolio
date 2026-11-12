export interface ProjectArchitectureStep {
  from: string;
  to: string;
  label: string;
  type?: 'sync' | 'async' | 'bidirectional';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Full Stack' | 'AI / Machine Learning' | 'Generative AI' | 'Cybersecurity' | 'SaaS';
  categories: string[];
  status: 'Completed' | 'Final Year Project' | 'In Progress' | 'Production';
  featured: boolean;
  shortDescription: string;
  detailedOverview: string;
  problemSolved: string;
  keyFeatures: string[];
  technologies: string[];
  architectureSummary: string;
  architectureFlow: ProjectArchitectureStep[];
  challengesAndDecisions: string[];
  whatLearned: string[];
  imagePath: string;
  githubUrl?: string;
  demoUrl?: string;
  publicLinkStatus: 'Available' | 'Private / Demo Coming Soon' | 'In Progress';
}

export const projectsData: Project[] = [
  {
    id: 'nexora-ai',
    slug: 'nexora-ai',
    title: 'Nexora AI — Multi-Tenant Business Management SaaS',
    category: 'SaaS',
    categories: ['Full Stack', 'Generative AI', 'SaaS'],
    status: 'Completed',
    featured: true,
    shortDescription: 'Multi-tenant business management SaaS designed to centralize operations with CRM, inventory, invoices, and Google Gemini API assistance.',
    detailedOverview: 'Nexora AI is an enterprise-grade multi-tenant business operations management platform. Built with Python and Django REST Framework on the backend and React with TypeScript on the frontend, it centralizes enterprise workflows from customer relationship management (CRM) to stock inventory, order tracking, invoice generation, task management, and business analytics. It integrates Google Gemini API for intelligent business reporting and advisory assistance while offloading compute-intensive operations through Redis and Celery background workers.',
    problemSolved: 'Growing businesses often struggle with fragmented software stacks—using disconnected tools for CRM, inventory, and accounting. Nexora AI unifies these core functions under an isolated multi-tenant architecture with role-based access control and generative AI reporting.',
    keyFeatures: [
      'Multi-tenant architecture with tenant data isolation',
      'Role-Based Access Control (RBAC) with granular tenant permissions',
      'CRM, Customer tracking, and interaction audit trails',
      'Inventory, Product catalog, and real-time stock alerts',
      'Order fulfillment and automated Invoice generation',
      'Task delegation and cross-department collaboration',
      'Business analytics dashboard with financial metrics',
      'Google Gemini API integration for automated report insights',
      'Asynchronous task processing using Redis and Celery',
      'Containerized development and deployment via Docker',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Python',
      'Django REST Framework',
      'PostgreSQL',
      'Google Gemini API',
      'Redis',
      'Celery',
      'Docker',
      'Tailwind CSS',
    ],
    architectureSummary: 'React Frontend → Django REST API → PostgreSQL. Tenant requests are authenticated via JWT tokens with tenant IDs validated on every query. Asynchronous reporting and background tasks are pushed from Django to Redis message queue and processed by Celery workers, while Gemini API is invoked for contextual summaries.',
    architectureFlow: [
      { from: 'React Frontend', to: 'Django REST API', label: 'JWT Authenticated REST Endpoints', type: 'sync' },
      { from: 'Django REST API', to: 'PostgreSQL', label: 'Multi-Tenant Schema & Relational ORM', type: 'sync' },
      { from: 'Django REST API', to: 'Google Gemini API', label: 'Contextual Analytics & Prompt Synthesis', type: 'sync' },
      { from: 'Django REST API', to: 'Redis Message Queue', label: 'Heavy Report & Task Enqueue', type: 'async' },
      { from: 'Redis Message Queue', to: 'Celery Workers', label: 'Background Async Processing', type: 'async' },
    ],
    challengesAndDecisions: [
      'Multi-Tenancy Isolation: Evaluated schema-based vs row-level filtering. Chose robust tenant-scoped querysets in Django ORM to enforce zero data leakage between business tenants.',
      'Asynchronous Processing: Report generation and bulk audit logging were moved to Celery and Redis to maintain sub-100ms API response times on user-facing requests.',
      'AI Prompt Restraint: Designed strict system instructions for Gemini API to return structured JSON analytics rather than open-ended conversational text.',
    ],
    whatLearned: [
      'Architecting maintainable, modular enterprise Django backends with clear service layers.',
      'Configuring Redis brokers and Celery task monitors in production Docker environments.',
      'Handling role permissions and tenant boundaries reliably in full-stack applications.',
    ],
    imagePath: '/src/assets/images/nexora_ai_saas_1794475969170.jpg',
    githubUrl: 'https://github.com/RootUser-999',
    publicLinkStatus: 'Private / Demo Coming Soon',
  },
  {
    id: 'gemvision-ai',
    slug: 'gemvision-ai',
    title: 'GemVision AI — Gemstone Identification & Valuation Platform',
    category: 'AI / Machine Learning',
    categories: ['AI / Machine Learning', 'Full Stack'],
    status: 'Final Year Project',
    featured: true,
    shortDescription: 'AI-powered gemstone identification and marketplace combining deep learning CNNs, Django REST backend, and Flutter mobile app.',
    detailedOverview: 'GemVision AI is a comprehensive University Final Year Project that bridges specialized gemological expertise and accessible digital tooling. It combines custom computer vision deep learning models trained on gemstone datasets with a full-stack Django backend and a Flutter mobile app. It features a critical two-tier visual pipeline: an initial image validation model that filters out non-gemstone photos, followed by a custom 2D Convolutional Neural Network (CNN) that identifies specific gemstone classes and correlates findings with curated market pricing data.',
    problemSolved: 'Accurate gemstone identification and market valuation traditionally require certified gemologists with costly specialized hardware. GemVision AI empowers buyers, sellers, and collectors to capture an image and receive instant AI classification, confidence scores, and fair market estimates.',
    keyFeatures: [
      'Two-tier visual pipeline: Image validation filter followed by CNN classification',
      'Custom 2D CNN model trained using TensorFlow and Keras',
      'Computer vision image preprocessing (normalization, augmentation, resizing)',
      'Confidence scoring with detailed optical characteristics breakdown',
      'Marketplace price estimation workflow using curated market price references',
      'Role accounts for Buyers and Sellers with authenticated profiles',
      'Product listings, catalog search, and transaction tracking',
      'Email OTP verification and secure account lifecycle',
      'Cross-platform Flutter mobile client communicating via REST APIs',
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'Custom 2D CNN',
      'Computer Vision',
      'Django',
      'Django REST Framework',
      'Flutter',
      'Dart',
      'SQLite',
      'JavaScript',
      'Bootstrap',
    ],
    architectureSummary: 'Image Upload → Image Validation Model → 2D CNN Classification → Prediction & Confidence. Django Backend exposes REST endpoints to Flutter mobile clients and Web interfaces, managing market listings, user profiles, and valuation datasets.',
    architectureFlow: [
      { from: 'Flutter Mobile App', to: 'Django REST Backend', label: 'Image Upload & REST Requests', type: 'sync' },
      { from: 'Django REST Backend', to: 'Image Validation Filter', label: 'Isolate Non-Gemstone Inputs', type: 'sync' },
      { from: 'Image Validation Filter', to: '2D CNN Model', label: 'Tensor Preprocessing & Classification', type: 'sync' },
      { from: '2D CNN Model', to: 'Valuation Workflow', label: 'Class Labels + Market Data Mapping', type: 'sync' },
      { from: 'Django REST Backend', to: 'SQLite Database', label: 'Marketplace Listings & Accounts', type: 'sync' },
    ],
    challengesAndDecisions: [
      'Validation vs Classification: Feeding irrelevant non-gemstone photos into a classifier caused misleading high-confidence predictions. Implemented a dedicated validation model upstream to reject non-mineral images first.',
      'Dataset Curation & Augmentation: Gemstones exhibit varying refractions, cuts, and lighting conditions. Applied rigorous rotation, zoom, and brightness augmentation in Keras to achieve robust generalization.',
      'Curated Pricing Data: Rather than claiming a pure generative price model, mapped detected classes to verified, regularly updated gemological benchmark price indices.',
    ],
    whatLearned: [
      'Building and fine-tuning custom CNN architectures in TensorFlow/Keras from scratch.',
      'Integrating mobile Flutter apps with Python REST backend inference endpoints.',
      'Structuring end-to-end machine learning pipelines from raw data preparation to deployment.',
    ],
    imagePath: '/src/assets/images/gemvision_ai_system_1794475969668.jpg',
    githubUrl: 'https://github.com/RootUser-999',
    publicLinkStatus: 'Private / Demo Coming Soon',
  },
  {
    id: 'deepfake-detection',
    slug: 'deepfake-detection',
    title: 'Deepfake Detection AI — Media Authenticity Forensics',
    category: 'AI / Machine Learning',
    categories: ['AI / Machine Learning', 'Cybersecurity'],
    status: 'Completed',
    featured: true,
    shortDescription: 'AI-based media authenticity project analyzing image and video frames to distinguish genuine visual media from manipulated content.',
    detailedOverview: 'Deepfake Detection AI addresses the critical security challenge of synthetic media and identity manipulation. Built with TensorFlow, Keras, and Django, the system evaluates uploaded visual content through convolutional neural network architectures. For video media, it decomposes files into sampled frame sequences, running forensic inference across facial boundaries, frequency domain artifacts, and temporal inconsistencies before synthesizing an overall authenticity assessment.',
    problemSolved: 'Hyper-realistic AI-generated imagery and synthetic media pose severe risks for digital fraud, identity theft, and disinformation. This project provides an automated forensic pipeline to detect subtle visual tampering invisible to human observers.',
    keyFeatures: [
      'Image authenticity classification distinguishing genuine vs manipulated media',
      'Video analysis through systematic frame extraction and temporal sampling',
      'Deep learning CNN inference trained on benchmark synthetic media datasets',
      'Facial boundary artifact inspection and blending boundary detection',
      'Media upload and automated preprocessing pipeline',
      'Backend inference REST APIs for asynchronous media processing',
      'Web interface and Flutter mobile application integration',
      'Detailed forensic breakdown with confidence metrics',
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'CNN',
      'Deep Learning',
      'Computer Vision',
      'Video Frame Analysis',
      'Django',
      'REST APIs',
      'Flutter',
      'Dart',
    ],
    architectureSummary: 'Media Upload → Preprocessing & Frame Extraction → Image/Frame Normalization → CNN Inference Engine → Classification & Confidence Assessment → Frontend Presentation.',
    architectureFlow: [
      { from: 'Media Upload (Image/Video)', to: 'Frame Extraction Module', label: 'Extract & Sample Video Frames', type: 'sync' },
      { from: 'Frame Extraction Module', to: 'Facial Preprocessing', label: 'Boundary Alignment & Normalization', type: 'sync' },
      { from: 'Facial Preprocessing', to: 'CNN Inference Engine', label: 'Spatial Artifact & Neural Evaluation', type: 'sync' },
      { from: 'CNN Inference Engine', to: 'Authenticity Scoring', label: 'Frame-Weighted Confidence Synthesis', type: 'sync' },
      { from: 'Authenticity Scoring', to: 'Client Presentation', label: 'REST API Payload to Web/Flutter', type: 'sync' },
    ],
    challengesAndDecisions: [
      'Video Processing Overhead: Processing every single 60 FPS video frame caused extreme latency. Designed a deterministic sampling algorithm extracting representative keyframes across the video duration.',
      'Model Generalization: Modern generative models produce varied compression artifacts. Tuned preprocessing to avoid over-fitting to specific encoder quirks.',
      'Honest Metric Presentation: Avoided fabricated 99.9% claims, focusing on explainable confidence distributions across sampled frames.',
    ],
    whatLearned: [
      'Video frame extraction workflows and handling temporal consistency in media forensics.',
      'Deploying deep learning inference endpoints in Django REST backends.',
      'Understanding generative AI artifact patterns from a defensive cybersecurity perspective.',
    ],
    imagePath: '/src/assets/images/deepfake_detection_ai_1794475970218.jpg',
    githubUrl: 'https://github.com/RootUser-999',
    publicLinkStatus: 'Private / Demo Coming Soon',
  },
  {
    id: 'cybermentor-ai',
    slug: 'cybermentor-ai',
    title: 'CyberMentor AI — LLM Cybersecurity Learning Assistant',
    category: 'Generative AI',
    categories: ['Generative AI', 'Cybersecurity'],
    status: 'Completed',
    featured: true,
    shortDescription: 'Django-based conversational AI providing cybersecurity concepts and technical guidance using a locally served Qwen3-4B language model.',
    detailedOverview: 'CyberMentor AI is a specialized conversational learning platform for cybersecurity students and practitioners. Unlike generic online chatbots, CyberMentor connects a lightweight Django backend directly to a dedicated local inference endpoint serving the Qwen3-4B model. It guides learners through networking concepts, packet analysis, Linux command-line syntax, vulnerability identification, and defensive security frameworks without leaking proprietary lab queries to external cloud endpoints.',
    problemSolved: 'Cybersecurity students exploring technical commands and defensive techniques need interactive explanations grounded in security principles, while keeping lab configurations and network topologies within private local environments.',
    keyFeatures: [
      'Interactive conversational terminal-style interface',
      'Locally hosted Qwen3-4B model serving via independent inference API',
      'Tailored cybersecurity guidance (Networking, Linux, Recon, SOC, OWASP)',
      'Prompt-engineered system constraints prioritizing defensive security ethics',
      'Asynchronous request dispatching from Django to local model server',
      'Structured markdown and code snippet syntax formatting',
      'Session tracking and chat history persistence via SQLite',
    ],
    technologies: [
      'Python',
      'Django',
      'Qwen3-4B LLM',
      'Local Model Serving',
      'REST Communication',
      'SQLite',
      'JavaScript',
      'Tailwind CSS',
    ],
    architectureSummary: 'Web Interface → Django Backend → Local Model Server (Qwen3-4B) → Formatted Response → Client Stream/Render.',
    architectureFlow: [
      { from: 'User Interface', to: 'Django Backend', label: 'User Query & Session Token', type: 'sync' },
      { from: 'Django Backend', to: 'Prompt Engineering Layer', label: 'Inject Defensive Security Guidelines', type: 'sync' },
      { from: 'Prompt Engineering Layer', to: 'Local Qwen3-4B Server', label: 'HTTP Inference Request', type: 'sync' },
      { from: 'Local Qwen3-4B Server', to: 'Django Backend', label: 'Token Generation Response', type: 'sync' },
      { from: 'Django Backend', to: 'User Interface', label: 'Formatted Syntax & Explanation', type: 'sync' },
    ],
    challengesAndDecisions: [
      'Decoupled Architecture: Separated the Django web application from the model inference process so heavy tensor computation never blocks the web request threads.',
      'Defensive Security Alignment: Enforced system prompts ensuring all exploit explanations focus strictly on ethical security audits and mitigation steps.',
    ],
    whatLearned: [
      'Interfacing web backends with self-hosted open-weights LLMs.',
      'Managing context windows and structuring prompts for specialized technical domains.',
    ],
    imagePath: '/src/assets/images/cybermentor_ai_terminal_1794475971150.jpg',
    githubUrl: 'https://github.com/RootUser-999',
    publicLinkStatus: 'Private / Demo Coming Soon',
  },
  {
    id: 'ai-agent-rag-assistant',
    slug: 'ai-agent-rag-assistant',
    title: 'AI Agent & RAG Business Operations Assistant',
    category: 'Generative AI',
    categories: ['Generative AI', 'Full Stack'],
    status: 'In Progress',
    featured: true,
    shortDescription: 'IN PROGRESS: LLM-powered business operations assistant combining retrieval-augmented generation, embeddings, and tool-calling workflows.',
    detailedOverview: 'An active research and engineering project focused on building an autonomous business operations assistant. The project investigates practical RAG pipelines and agentic tool-calling workflows, allowing non-technical operators to query business knowledge repositories, search vector databases semantically, and execute defined transactional operations (e.g. updating inventory records, drafting invoices, checking shipping status) via structured JSON function calling.',
    problemSolved: 'Standard LLMs suffer from knowledge cutoffs and hallucinations when answering domain-specific company questions, and cannot directly update transactional enterprise databases without controlled tool calling.',
    keyFeatures: [
      'Document ingestion and chunking pipeline for enterprise knowledge docs',
      'Text embedding generation and semantic similarity search',
      'Vector-based context retrieval and grounded prompt synthesis',
      'Agentic tool calling: Intent classification to function execution',
      'Controlled SQL database query tools and external REST API integrations',
      'Structured JSON output validation and error handling',
      'Stateful conversation memory with sliding context window',
    ],
    technologies: [
      'Python',
      'Google Gemini API',
      'Text Embeddings',
      'Vector Search',
      'PostgreSQL',
      'RAG Architecture',
      'AI Agents',
      'Tool Calling',
      'REST APIs',
    ],
    architectureSummary: 'User Request → Agent Intent Recognition → Tool Selection (Vector Retrieval / SQL Tool / REST Tool) → Tool Execution → Grounded Synthesis → Structured Response.',
    architectureFlow: [
      { from: 'User Request', to: 'LLM Agent Core', label: 'Natural Language Query', type: 'sync' },
      { from: 'LLM Agent Core', to: 'Intent & Tool Classifier', label: 'Determine if Retrieval or Action is Needed', type: 'sync' },
      { from: 'Intent & Tool Classifier', to: 'Vector Store / RAG Engine', label: 'Semantic Document Search', type: 'sync' },
      { from: 'Intent & Tool Classifier', to: 'SQL / API Tools', label: 'Controlled Transactional Execution', type: 'sync' },
      { from: 'Tool Results & Context', to: 'Grounded LLM Generator', label: 'Synthesize Verified Answer', type: 'sync' },
    ],
    challengesAndDecisions: [
      'Clear Feature Demarcation: Strictly distinguishing implemented RAG indexing from in-progress multi-step autonomous agent loops.',
      'Deterministic Tool Execution: Constraining agent tool selection with strict JSON Schema definitions to prevent arbitrary unauthorized mutations.',
    ],
    whatLearned: [
      'Vector indexing strategies, chunk overlap tradeoffs, and cosine distance evaluation.',
      'Designing robust agent execution loops with error recovery and fallback behaviors.',
    ],
    imagePath: '/src/assets/images/nexora_ai_saas_1794475969170.jpg',
    githubUrl: 'https://github.com/RootUser-999',
    publicLinkStatus: 'In Progress',
  },
  {
    id: 'globalscholar-ai',
    slug: 'globalscholar-ai',
    title: 'GlobalScholar AI — International Scholarship Discovery',
    category: 'Full Stack',
    categories: ['Full Stack'],
    status: 'Completed',
    featured: false,
    shortDescription: 'Scholarship discovery platform designed to organize global scholarship opportunities with faceted filtering and structured data.',
    detailedOverview: 'GlobalScholar AI is an informational discovery platform designed to help students discover and filter international educational scholarships, funding grants, and fellowships. Built with React and TypeScript, it provides rapid client-side filtering by country, field of study, degree level, and eligibility requirements.',
    problemSolved: 'Students seeking international scholarships often encounter outdated aggregators and chaotic listings. GlobalScholar AI standardizes scholarship criteria into clean, searchable criteria.',
    keyFeatures: [
      'Faceted scholarship search by country, degree, and discipline',
      'Structured opportunity detail cards with verified deadlines',
      'Responsive, high-performance React user interface',
      'Maintainable data schema for ongoing scholarship indexing',
      'Direct application link routing and bookmarking',
    ],
    technologies: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    architectureSummary: 'React Frontend → Structured Scholarship Data Engine → Dynamic Filter & Search UI.',
    architectureFlow: [
      { from: 'User Search', to: 'Filter Engine', label: 'Multi-facet criteria matching', type: 'sync' },
      { from: 'Filter Engine', to: 'Scholarship Index', label: 'Structured Opportunity Store', type: 'sync' },
      { from: 'Scholarship Index', to: 'Responsive Cards', label: 'Dynamic Render', type: 'sync' },
    ],
    challengesAndDecisions: [
      'Client-side search performance across extensive scholarship records.',
      'Structuring clean criteria schemas without noisy unverified entries.',
    ],
    whatLearned: ['Building responsive search & filter architectures in React with zero lag.'],
    imagePath: '/src/assets/images/nexora_ai_saas_1794475969170.jpg',
    githubUrl: 'https://github.com/RootUser-999',
    publicLinkStatus: 'Private / Demo Coming Soon',
  },
  {
    id: 'hire-flow',
    slug: 'hire-flow',
    title: 'Hire Flow — Job Portal & Recruitment Platform',
    category: 'Full Stack',
    categories: ['Full Stack'],
    status: 'Completed',
    featured: false,
    shortDescription: 'Full-stack recruitment application with Gmail-based login, job listings, application tracking, and employer administration.',
    detailedOverview: 'Hire Flow is a full-stack recruitment platform developed with Python, Django, and Bootstrap. It streamlines hiring workflows by connecting job seekers and employers through structured role postings, resume submissions, and administrative status updates.',
    problemSolved: 'Simplifies application tracking for early-stage teams without requiring heavy enterprise subscription tools.',
    keyFeatures: [
      'User registration, authentication, and Gmail-based login integration',
      'Role-based dashboards for Job Applicants and Employers',
      'Job listing creation, editing, and publishing workflow',
      'Candidate application submission and resume management',
      'Administrative review panel with application status changes',
      'Full database persistence with SQLite and Django ORM',
    ],
    technologies: ['Python', 'Django', 'JavaScript', 'Bootstrap', 'HTML5', 'CSS3', 'SQLite'],
    architectureSummary: 'Django MVC Architecture: Templates → URL Routing → Views & Auth → Django ORM → SQLite Database.',
    architectureFlow: [
      { from: 'Applicant / Employer', to: 'Django Auth / Gmail', label: 'Authentication & Session', type: 'sync' },
      { from: 'Employer View', to: 'Job Posting View', label: 'Create & Manage Listings', type: 'sync' },
      { from: 'Applicant View', to: 'Application Pipeline', label: 'Submit Application & Resume', type: 'sync' },
      { from: 'Django Views', to: 'SQLite Database', label: 'Relational Record Persistence', type: 'sync' },
    ],
    challengesAndDecisions: [
      'Separation of applicant vs employer permissions inside standard Django authentication.',
      'Ensuring secure file upload handling for applicant resume documents.',
    ],
    whatLearned: ['Building complete end-to-end CRUD and authentication workflows in Django.'],
    imagePath: '/src/assets/images/nexora_ai_saas_1794475969170.jpg',
    githubUrl: 'https://github.com/RootUser-999',
    publicLinkStatus: 'Private / Demo Coming Soon',
  },
  {
    id: 'tour-guide',
    slug: 'tour-guide',
    title: 'Tour Guide — Travel & Local Experience Platform',
    category: 'Full Stack',
    categories: ['Full Stack'],
    status: 'Completed',
    featured: false,
    shortDescription: 'Travel discovery platform for browsing attractions, destinations, curated local itineraries, and guides.',
    detailedOverview: 'Tour Guide is a MERN-stack web application designed for discovering tourist destinations and local experiences. It features dynamic destination browsing, attraction detail pages, and database-backed content management via Express.js and MongoDB.',
    problemSolved: 'Provides travelers with an intuitive, clean interface to explore curated destinations and local insights.',
    keyFeatures: [
      'Destination browsing by region and travel style',
      'Attraction discovery and itinerary details',
      'Reusable React component architecture',
      'Node.js and Express.js REST API backend',
      'MongoDB database persistence for travel content',
      'Responsive design across mobile and desktop',
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'HTML5', 'CSS3'],
    architectureSummary: 'React Single Page App ↔ Express REST API ↔ MongoDB Database.',
    architectureFlow: [
      { from: 'React Frontend', to: 'Express REST API', label: 'JSON HTTP Requests', type: 'sync' },
      { from: 'Express REST API', to: 'MongoDB Database', label: 'Mongoose ODM Queries', type: 'sync' },
    ],
    challengesAndDecisions: [
      'Structuring flexible document schemas in MongoDB for varying travel attraction attributes.',
      'Implementing seamless loading states during media-heavy destination queries.',
    ],
    whatLearned: ['Building full-stack JavaScript applications with React and Express.'],
    imagePath: '/src/assets/images/nexora_ai_saas_1794475969170.jpg',
    githubUrl: 'https://github.com/RootUser-999',
    publicLinkStatus: 'Private / Demo Coming Soon',
  },
];

export interface SecondaryWork {
  title: string;
  technologies: string[];
  description: string;
  status: string;
}

export const secondaryWorkData: SecondaryWork[] = [
  {
    title: 'Employee Management System',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    description: 'Internal business directory with full CRUD employee records, role assignments, and department filters.',
    status: 'Completed Project',
  },
  {
    title: 'Voyage Hub',
    technologies: ['Django', 'Python', 'Stripe API', 'SMTP', 'AJAX'],
    description: 'Django-based travel marketplace featuring payment gateway integration, automated email receipts, and dynamic AJAX updates.',
    status: 'Completed Project',
  },
  {
    title: 'StreamChat',
    technologies: ['Django Channels', 'WebSockets', 'Redis', 'JavaScript'],
    description: 'Real-time WebSocket chat application supporting 1-on-1 private messaging, group chat rooms, and presence indicators.',
    status: 'Completed Project',
  },
  {
    title: 'AgentOps AI',
    technologies: ['LangGraph', 'LLMs', 'RAG', 'PostgreSQL', 'pgvector'],
    description: 'Architectural concept and experimental prototype exploring multi-agent orchestration, state graphs, and vector retrieval.',
    status: 'Technical Concept / Experiment',
  },
];
