import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { ProjectShowcase } from './components/ProjectShowcase.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { FullStackSection } from './components/FullStackSection.tsx';
import { AIEngineeringSection } from './components/AIEngineeringSection.tsx';
import { CybersecuritySection } from './components/CybersecuritySection.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { EducationSection } from './components/EducationSection.tsx';
import { CertificationsSection } from './components/CertificationsSection.tsx';
import { RoadmapSection } from './components/RoadmapSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { Footer } from './components/Footer.tsx';
import { Project } from './data/projects.ts';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F8FAFC] selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sticky Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onNavigate={handleNavigate}
        />

        <About onNavigate={handleNavigate} />

        <ProjectShowcase onSelectProject={(project) => setSelectedProject(project)} />

        <FullStackSection />

        <AIEngineeringSection />

        <CybersecuritySection />

        <ExperienceSection />

        <SkillsSection />

        <EducationSection />

        <CertificationsSection />

        <RoadmapSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
