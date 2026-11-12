/**
 * Interactive terminal command parser and responses
 */

export interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  content: string;
}

export function executeTerminalCommand(
  rawInput: string,
  onNavigate?: (sectionId: string) => void
): TerminalLine[] {
  const input = rawInput.trim();
  const args = input.split(/\s+/);
  const command = args[0].toLowerCase();

  if (!command) {
    return [];
  }

  const result: TerminalLine[] = [];

  switch (command) {
    case 'help':
      result.push({
        id: Math.random().toString(),
        type: 'output',
        content: `Available commands:
  whoami        Display engineer identity and technical roles
  about         Summary of background, education, and specializations
  skills        Technical stack and core proficiencies
  projects      List highlighted engineering projects
  experience    Current and past engineering positions
  education     Academic background and degree details
  status        Current active technical explorations
  contact       Contact email and official social links
  cat resume    View formatted resume summary
  goto <target> Scroll directly to section (e.g. goto projects)
  clear         Clear the terminal output`,
      });
      break;

    case 'whoami':
      result.push({
        id: Math.random().toString(),
        type: 'output',
        content: `Shahzeb
Title: Full-Stack Engineer | AI/ML Engineer | Cybersecurity Enthusiast
Location: Islamabad, Pakistan
Focus: Scalable Backends, Deep Learning & Vision, LLMs & Agents, Defensive Security`,
      });
      break;

    case 'about':
      result.push({
        id: Math.random().toString(),
        type: 'output',
        content: `Computer Science graduate from COMSATS University Islamabad.
Expertise in end-to-end full-stack architectures (Django/React/Postgres), applied AI (CNNs, Computer Vision, LLMs, RAG), and cybersecurity (Linux, Networking, SOC, Pentesting fundamentals). Built on practical engineering and learning-by-building.`,
      });
      break;

    case 'skills':
      result.push({
        id: Math.random().toString(),
        type: 'output',
        content: `[Backend]     Python, Django, Django REST Framework, Node.js, Express, REST APIs
[Frontend]    React.js, TypeScript, JavaScript, Tailwind CSS, Next.js
[Databases]   PostgreSQL, MongoDB, SQLite, Redis
[AI / ML]     TensorFlow, Keras, CNN, Computer Vision, Image Classification
[Generative]  LLMs, Gemini API, Qwen, Prompt Engineering, RAG & Vector Search
[Security]    Networking, TCP/IP, Linux, Kali, Nmap, Burp Suite, Wireshark, SOC`,
      });
      break;

    case 'projects':
      result.push({
        id: Math.random().toString(),
        type: 'output',
        content: `Featured Engineering Works:
1. Nexora AI       - AI-Powered Multi-Tenant SaaS (Django, React, Redis, Gemini)
2. GemVision AI    - Gemstone Identification & Valuation (CNN, Vision, Flutter, Django)
3. Deepfake Detection - Media Authenticity Forensics via Frame Sampling & CNNs
4. CyberMentor AI  - LLM-Powered Cybersecurity Assistant (Qwen3-4B inference)
5. Agentic RAG Ops - Tool-calling RAG operations assistant (In Progress)
6. GlobalScholar   - Scholarship discovery platform (React, TS)
7. Hire Flow       - Full-stack recruitment portal (Django, SQLite)
8. Tour Guide      - Destination discovery platform (MERN stack)`,
      });
      break;

    case 'experience':
      result.push({
        id: Math.random().toString(),
        type: 'output',
        content: `Professional Experience:
- Full Stack Engineer (Part-time) @ Webloop (Rawalpindi) [Sept 2024 - Present]
  Developing Django REST backends, APIs, data modeling, frontend integration.
- Freelance Full-Stack Web Developer @ Fiverr (Remote) [2022 - Present]
  Full-stack web applications, custom business portals, REST APIs, AI integrations.`,
      });
      break;

    case 'education':
      result.push({
        id: Math.random().toString(),
        type: 'output',
        content: `COMSATS University Islamabad
Degree: Bachelor of Science in Computer Science (Artificial Intelligence)
Duration: August 2022 – August 2026
CGPA: 3.05 / 4.00
Final Year Project: GemVision AI (AI Gemstone Identification & Valuation Platform)`,
      });
      break;

    case 'status':
      result.push({
        id: Math.random().toString(),
        type: 'output',
        content: `Active explorations:
- Agentic AI workflows & Tool Calling
- RAG pipelines & vector embeddings
- LLM inference orchestration
- Defensive cybersecurity & SOC monitoring`,
      });
      break;

    case 'contact':
      result.push({
        id: Math.random().toString(),
        type: 'output',
        content: `Contact Channels:
Email:    shahzabaman971@gmail.com
GitHub:   https://github.com/RootUser-999
LinkedIn: https://linkedin.com/in/shahzeb-aman-4b826b292
Fiverr:   https://www.fiverr.com/shahzabaman`,
      });
      break;

    case 'cat':
      if (args[1] === 'resume' || args[1] === 'resume.pdf' || args[1] === 'resume.md') {
        result.push({
          id: Math.random().toString(),
          type: 'output',
          content: `SHAHZEB — RESUME
Location: Islamabad, Pakistan | Email: shahzabaman971@gmail.com
BS CS (AI) - COMSATS University Islamabad (CGPA: 3.05)
Roles: Full Stack Engineer @ Webloop | Freelance Developer @ Fiverr
Specializations: Full-Stack Web, AI/ML (TensorFlow, CNN, LLM, RAG), Cybersecurity
Click "Download Resume" in the header to view or print the full PDF version.`,
        });
      } else {
        result.push({
          id: Math.random().toString(),
          type: 'error',
          content: `cat: ${args[1] || ''}: No such file. Try 'cat resume'.`,
        });
      }
      break;

    case 'goto': {
      const section = args[1]?.toLowerCase();
      const validSections = [
        'about',
        'experience',
        'projects',
        'ai-engineering',
        'fullstack',
        'cybersecurity',
        'skills',
        'education',
        'contact',
      ];
      if (section && validSections.includes(section)) {
        result.push({
          id: Math.random().toString(),
          type: 'output',
          content: `Navigating to #${section}...`,
        });
        if (onNavigate) {
          onNavigate(section);
        }
      } else {
        result.push({
          id: Math.random().toString(),
          type: 'error',
          content: `Unknown section '${args[1]}'. Valid targets: ${validSections.join(', ')}`,
        });
      }
      break;
    }

    case 'clear':
      // Handled by caller to clear state
      break;

    default:
      result.push({
        id: Math.random().toString(),
        type: 'error',
        content: `command not found: ${command}. Type 'help' to inspect available commands.`,
      });
      break;
  }

  return result;
}
