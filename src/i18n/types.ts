export const languages = ['en', 'es'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

export interface Language {
  name: string;
  level: string | null;
}

export interface Profile {
  title: string;
  tagline: string;
  location: string;
  yearsOfExperience: string;
  summary: string[];
  focusAreas: string[];
  specialties: string[];
  languages: Language[];
}

export interface Role {
  title: string;
  period: string;
}

export interface Experience {
  company: string;
  entity?: string;
  period: string;
  current?: boolean;
  roles: Role[];
  highlights: string[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export interface Project {
  title: string;
  description: string;
  year: string;
  stack: string[];
  highlights?: string[];
  image?: string;
  repo?: string;
  demo?: string;
  featured?: boolean;
  isPrivate?: boolean;
}

export interface Ui {
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
  };
  actions: {
    langSwitch: string;
    themeToggle: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
  };
  hero: {
    getInTouch: string;
    viewExperience: string;
    downloadCv: string;
    focusLabel: string;
    portraitAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    asideTitle: string;
    languagesLabel: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    lead: string;
    current: string;
    technologiesLabel: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    lead: string;
    emptyTitle: string;
    emptyText: string;
    code: string;
    demo: string;
    privateLabel: string;
  };
  education: {
    eyebrow: string;
    title: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    emailMe: string;
    downloadCv: string;
    basedIn: string;
    labels: {
      email: string;
      linkedin: string;
      phone: string;
      github: string;
    };
  };
  footer: {
    builtWith: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

export interface SiteContent {
  profile: Profile;
  experience: Experience[];
  skills: SkillGroup[];
  education: Education[];
  projects: Project[];
  ui: Ui;
}
