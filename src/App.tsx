import React, { useState } from 'react';
import { initialPortfolioData } from './data/initialData';
import { PortfolioData } from './types/portfolio';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { InternshipSection } from './components/InternshipSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [portfolio] = useState<PortfolioData>(initialPortfolioData);
  const [accentColor, setAccentColor] = useState<string>('cyan');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Top Header Navigation */}
      <Header
        portfolio={portfolio}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
      />

      {/* Main Content Sections */}
      <main>
        {/* Overview Hero */}
        <HeroSection portfolio={portfolio} />

        {/* CID Cyber Crime Cell Internship Spotlight */}
        <InternshipSection internship={portfolio.internship} />

        {/* Featured Projects */}
        <ProjectsSection projects={portfolio.projects} />

        {/* Technical Skills & Software Tools */}
        <SkillsSection skills={portfolio.skills} software={portfolio.software} />

        {/* Academic Credentials */}
        <EducationSection education={portfolio.education} />

        {/* Certifications, Achievements & Languages */}
        <CertificationsSection
          certifications={portfolio.certifications}
          languages={portfolio.languages}
          interests={portfolio.interests}
        />

        {/* Contact & Email Composer */}
        <ContactSection portfolio={portfolio} />
      </main>

      {/* Footer */}
      <Footer portfolio={portfolio} />
    </div>
  );
}
