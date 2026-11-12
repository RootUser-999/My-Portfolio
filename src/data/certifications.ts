export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  domain: 'Cybersecurity' | 'Web Development';
  skillsCovered: string[];
  credentialStatus: 'Verified Certificate' | 'Completed Course';
  description: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: 'google-foundations-cybersecurity',
    title: 'Foundations of Cybersecurity',
    issuer: 'Google',
    domain: 'Cybersecurity',
    skillsCovered: [
      'Core Security Principles',
      'Confidentiality, Integrity & Availability (CIA Triad)',
      'Threat Modeling & Vulnerability Concepts',
      'Security Tools & Operating Systems',
    ],
    credentialStatus: 'Verified Certificate',
    description: 'Foundational credential covering organizational security, common security threats, ethical considerations, and defense-in-depth methodologies.',
  },
  {
    id: 'google-networks-security',
    title: 'Networks and Network Security',
    issuer: 'Google',
    domain: 'Cybersecurity',
    skillsCovered: [
      'TCP/IP & OSI Network Models',
      'Network Protocols (DNS, DHCP, HTTP/S, SSH)',
      'Firewalls, Proxies & VPN Architectures',
      'Network Hardening & Packet Inspection',
    ],
    credentialStatus: 'Verified Certificate',
    description: 'Comprehensive study of network architectures, protocol analysis, intrusion defense, port configurations, and securing communication channels.',
  },
  {
    id: 'google-manage-security-risks',
    title: 'Manage Security Risks',
    issuer: 'Google',
    domain: 'Cybersecurity',
    skillsCovered: [
      'Risk Identification & Calculation',
      'NIST Cybersecurity Framework (CSF)',
      'Security Audits & Compliance Standards',
      'Incident Response & Playbooks',
    ],
    credentialStatus: 'Verified Certificate',
    description: 'Risk management principles, evaluating threats, conducting security audits, and aligning defenses with industry security frameworks.',
  },
  {
    id: 'fcc-responsive-web-design',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    domain: 'Web Development',
    skillsCovered: [
      'HTML5 Semantic Markup',
      'Modern CSS3 Layouts (Flexbox & CSS Grid)',
      'Responsive Media Queries',
      'Web Accessibility (WCAG standards)',
    ],
    credentialStatus: 'Verified Certificate',
    description: 'Practical certification validating foundational web development, accessibility standards, responsive layouts, and cross-browser visual fidelity.',
  },
];
