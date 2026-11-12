export interface LearningDomain {
  domain: string;
  badge: string;
  topics: {
    title: string;
    description: string;
    status: 'Actively Researching' | 'Building Prototypes' | 'Deepening Theory';
  }[];
}

export const activeRoadmapData: LearningDomain[] = [
  {
    domain: 'AI Engineering & Agentic Systems',
    badge: 'Applied AI',
    topics: [
      {
        title: 'RAG Architecture & Chunking Strategies',
        description: 'Evaluating semantic chunking, recursive splitters, and embedding models for low-hallucination domain retrieval.',
        status: 'Building Prototypes',
      },
      {
        title: 'Vector Databases & Similarity Search',
        description: 'Experimenting with vector indexing (HNSW, IVFFlat), cosine distance metrics, and metadata filtering.',
        status: 'Actively Researching',
      },
      {
        title: 'AI Agents & Function Calling',
        description: 'Building multi-step tool-calling loops where LLMs select defined tools, parse JSON parameters, and synthesize outcomes.',
        status: 'Building Prototypes',
      },
      {
        title: 'LLM Orchestration & Context Windows',
        description: 'Managing dynamic token budgets, context trimming, and few-shot system prompt optimization.',
        status: 'Deepening Theory',
      },
    ],
  },
  {
    domain: 'Full-Stack & Cloud Architecture',
    badge: 'Systems Engineering',
    topics: [
      {
        title: 'Advanced Backend Architecture',
        description: 'Designing clean service layers, repository patterns, and domain-driven module separation in Django and Node.js.',
        status: 'Building Prototypes',
      },
      {
        title: 'Scalable REST API & Async Queues',
        description: 'Optimizing Redis message brokers, Celery worker concurrency, and idempotent API design.',
        status: 'Building Prototypes',
      },
      {
        title: 'Multi-Tenant SaaS Data Isolation',
        description: 'Evaluating tenancy strategies: row-level isolation vs multi-schema models for enterprise compliance.',
        status: 'Deepening Theory',
      },
      {
        title: 'Database Query Optimization & Caching',
        description: 'PostgreSQL indexing, query plan analysis with EXPLAIN ANALYZE, and Redis query caching patterns.',
        status: 'Actively Researching',
      },
    ],
  },
  {
    domain: 'Cybersecurity & Defensive Operations',
    badge: 'Security Operations',
    topics: [
      {
        title: 'Web Penetration Testing & OWASP Hardening',
        description: 'Deepening hands-on Burp Suite proxy workflows, session hijacking defenses, and parameter fuzzing.',
        status: 'Actively Researching',
      },
      {
        title: 'SOC Log Correlation & SIEM Monitoring',
        description: 'Writing custom detection rules in Wazuh and Splunk, correlating Windows Event logs with network telemetry.',
        status: 'Building Prototypes',
      },
      {
        title: 'Advanced Network Protocol Analysis',
        description: 'Inspecting encrypted TLS handshakes, DNS tunneling detection, and advanced Wireshark filtering scripts.',
        status: 'Deepening Theory',
      },
      {
        title: 'Incident Response & Threat Hunting',
        description: 'Studying digital forensics artifact extraction, volatile memory analysis, and MITRE ATT&CK adversary profiling.',
        status: 'Deepening Theory',
      },
    ],
  },
];
