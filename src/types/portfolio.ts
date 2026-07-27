export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  avatarUrl?: string;
  github?: string;
  linkedin?: string;
  summary: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Internship {
  role: string;
  organization: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  toolsUsed: string[];
}

export interface Project {
  id: string;
  title: string;
  type: string;
  technologies: string[];
  description: string[];
  url?: string;
  badge?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  status?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface PortfolioData {
  contact: ContactInfo;
  internship: Internship;
  skills: SkillCategory[];
  software: string[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  languages: string[];
  interests: string[];
}
