export interface SecurityLab {
  id: string;
  name: string;
  category: 'SOC & Defensive' | 'Network Analysis' | 'Web Reconnaissance';
  objective: string;
  environment: string;
  tools: string[];
  stepsPerformed: string[];
  findings: string;
  whatLearned: string;
  externalLink?: string;
  externalLinkLabel?: string;
}

export const securityLabsData: SecurityLab[] = [
  {
    id: 'soc-analyst-intro',
    name: 'Junior SOC Analyst Fundamentals & Incident Triage',
    category: 'SOC & Defensive',
    objective: 'Understand the core workflow of a Security Operations Center (SOC), event alert triage, escalation tiers, and threat detection fundamentals.',
    environment: 'TryHackMe Junior Security Analyst Lab',
    tools: ['CyberChef', 'VirusTotal', 'TryHackMe AttackBox', 'Log Viewers'],
    stepsPerformed: [
      'Reviewed security alert lifecycles from detection to containment and post-incident review.',
      'Investigated suspicious IP addresses and file hashes using VirusTotal and threat intelligence platforms.',
      'Decoded obfuscated base64 and hex payloads using CyberChef recipes.',
      'Practiced triage procedures determining false positives vs actionable true security incidents.',
    ],
    findings: 'Identified malicious indicators of compromise (IOCs) within simulated suspicious email attachments and categorized attack vectors against standard MITRE ATT&CK techniques.',
    whatLearned: 'Mastered triage workflow discipline, understanding how security alerts are correlated and escalated across tier-1, tier-2, and tier-3 SOC teams.',
    externalLink: 'https://tryhackme.com/room/jrsecanalystintrouxo',
    externalLinkLabel: 'TryHackMe Jr Security Analyst Room',
  },
  {
    id: 'windows-event-logs',
    name: 'Windows Event Log Forensic Analysis',
    category: 'SOC & Defensive',
    objective: 'Analyze Windows Security Event Logs to detect unauthorized authentication attempts, privilege escalation, and lateral movement.',
    environment: 'Windows Lab VM / PowerShell',
    tools: ['Windows Event Viewer', 'PowerShell (Get-WinEvent)', 'LogParser'],
    stepsPerformed: [
      'Filtered Windows Security logs focusing on Event ID 4624 (Successful Logon), 4625 (Failed Logon), and 4720 (User Account Created).',
      'Correlated anomalous logon types (Logon Type 3: Network vs Logon Type 10: RemoteInteractive).',
      'Constructed PowerShell queries to aggregate failed logon attempts by source IP and target username.',
      'Identified brute-force attack patterns occurring outside business hours.',
    ],
    findings: 'Uncovered a targeted brute-force sequence producing repeated 4625 events within a 45-second window followed by an unauthorized interactive login.',
    whatLearned: 'Understood critical Windows Event IDs, how Windows encodes authentication contexts, and how to query high-volume logs systematically.',
  },
  {
    id: 'network-pcap-analysis',
    name: 'Network Traffic & Packet Capture Inspection',
    category: 'Network Analysis',
    objective: 'Inspect raw packet captures (.pcap) to analyze TCP handshake flows, detect unencrypted credential leakage, and identify port scanning signatures.',
    environment: 'Kali Linux / Wireshark',
    tools: ['Wireshark', 'tcpdump', 'tshark'],
    stepsPerformed: [
      'Applied Wireshark display filters (`tcp.flags.syn==1 and tcp.flags.ack==0`) to locate rapid port scan sweeps.',
      'Followed TCP streams to reconstruct cleartext HTTP POST transmissions and headers.',
      'Examined DNS query anomalies identifying suspicious high-entropy subdomains indicative of potential DNS tunneling.',
      'Mapped protocol distributions across IPv4 and IPv6 streams.',
    ],
    findings: 'Reconstructed HTTP request sequences that revealed cleartext credentials transmitted over non-HTTPS ports and confirmed active SYN scans targeting common server ports.',
    whatLearned: 'Gained hands-on proficiency in deep packet inspection, understanding TCP state machines, and writing targeted Wireshark capture and display filters.',
  },
  {
    id: 'web-reconnaissance',
    name: 'Web Application Reconnaissance & Enumeration',
    category: 'Web Reconnaissance',
    objective: 'Perform structured passive and active reconnaissance against web targets to identify exposed endpoints, server banners, and potential misconfigurations.',
    environment: 'Kali Linux Sandbox Environment',
    tools: ['Nmap', 'Gobuster', 'WhatWeb', 'cURL'],
    stepsPerformed: [
      'Executed staged Nmap service version and default script scans (`-sV -sC`) on authorized testing targets.',
      'Used Gobuster directory brute-forcing with common web wordlists to discover hidden administrative paths and backup files.',
      'Inspected HTTP response headers (`Server`, `X-Powered-By`, cookie attributes) for version disclosure and missing security headers.',
      'Documented network topology and attack surface without intrusive exploitation.',
    ],
    findings: 'Identified outdated web server software exposing directory listing on a non-standard management port and unauthenticated configuration backups.',
    whatLearned: 'Learned methodology for methodical attack surface discovery while adhering to strict ethical hacking boundaries and documentation rules.',
  },
];

export interface RoadmapStep {
  step: number;
  title: string;
  focus: string;
  status: 'Completed / Grounded' | 'In Progress' | 'Upcoming';
}

export const cybersecurityRoadmap: RoadmapStep[] = [
  {
    step: 1,
    title: 'Networking Fundamentals',
    focus: 'TCP/IP architecture, subnetting, DNS, routing, HTTP/HTTPS protocols, and Wireshark packet capture analysis.',
    status: 'Completed / Grounded',
  },
  {
    step: 2,
    title: 'Linux & Command-Line Skills',
    focus: 'Linux file hierarchies, permissions, user management, process auditing, bash scripting, and Kali Linux toolchains.',
    status: 'Completed / Grounded',
  },
  {
    step: 3,
    title: 'Web Application Security',
    focus: 'OWASP Top 10 concepts (SQLi, XSS, CSRF, IDOR, broken auth), session management, and HTTP header security.',
    status: 'In Progress',
  },
  {
    step: 4,
    title: 'Reconnaissance & Enumeration',
    focus: 'Passive OSINT, Nmap network scanning, Gobuster directory fuzzing, DNS interrogation, and attack surface discovery.',
    status: 'In Progress',
  },
  {
    step: 5,
    title: 'Vulnerability Assessment',
    focus: 'Systematic vulnerability scanning, evaluating CVSS scores, validating false positives, and patch auditing.',
    status: 'In Progress',
  },
  {
    step: 6,
    title: 'Web Penetration Testing',
    focus: 'Burp Suite proxy interception, parameterized manual testing, authentication bypasses, and security reporting.',
    status: 'Upcoming',
  },
  {
    step: 7,
    title: 'Advanced Independent Testing & SOC Defenses',
    focus: 'Hands-on CTF challenge solving, SIEM detection engineering, log correlation, and purple-team defense hardening.',
    status: 'Upcoming',
  },
];
