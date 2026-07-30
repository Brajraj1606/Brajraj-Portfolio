import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiTryhackme, SiHackthebox } from 'react-icons/si';
import { initialPortfolioData } from '../data/initialData';
import '../styles/socialLinks.css';

const SocialLinks: React.FC = () => {
  const s = (initialPortfolioData as any).socials || {};

  const links: { icon: React.ReactNode; url?: string; label: string }[] = [
    { icon: <FaLinkedin />, url: s.linkedin, label: 'LinkedIn' },
    { icon: <FaGithub />, url: s.github, label: 'GitHub' },
    { icon: <FaInstagram />, url: s.instagram, label: 'Instagram' },
    { icon: <FaTwitter />, url: s.twitter, label: 'X' },
    { icon: <SiTryhackme />, url: s.tryhackme, label: 'TryHackMe' },
    { icon: <SiHackthebox />, url: s.hackthebox, label: 'HackTheBox' }
  ];

  return (
    <div className="social-links">
      {links.map((l, i) =>
        l.url ? (
          <a
            key={i}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
            className="social-icon"
          >
            {l.icon}
          </a>
        ) : (
          <span key={i} className="social-icon disabled" aria-hidden>
            {l.icon}
          </span>
        )
      )}
    </div>
  );
};

export default SocialLinks;
