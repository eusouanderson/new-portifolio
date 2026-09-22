import { Experience } from "./experience";
import { Project } from "./projects";
import { Tag } from "./tag";

export interface Texts {
  navbar: NavbarTexts;
  hero: HeroTexts;
  aboutMe: AboutMeTexts;
  projects: ProjectsTexts;
  technologies: TechnologiesTexts;
  aiEcosystem?: AiEcosystemTexts;
  workExperience: WorkExperienceTexts;
  contact: ContactTexts;
}

export interface NavbarTexts {
  home: string;
  aboutMe: string;
  tech: string;
  ai?: string;
  workExp: string;
  projects: string;
  contact: string;
}

export interface HeroTexts {
  greetings: string;
  title: {
    content: string;
    emphasis?: boolean;
  }[];
  cvButton: string;
  subtitle: string;
}

export interface AboutMeTexts {
  title: string;
  subtitle: string;
  role: string;
  description: string;
}

export interface TechnologiesTexts {
  title: string;
  description: string;
  highlights: string[];
}

export interface AiSolutionItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
  tags: Tag[];
  github?: string;
  icon: "hub" | "mcp" | "memory" | "qa";
}

export interface AiEcosystemTexts {
  title: string;
  subtitle: string;
  description: string;
  solutions: AiSolutionItem[];
}

export interface ProjectsTexts {
  title: string;
  projects: Project[];
}

export interface WorkExperienceTexts {
  title: string;
  experiences: Experience[];
}

export interface ContactTexts {
  title: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  sendButton: string;
  successTitle: string;
  successMessage: string;
}