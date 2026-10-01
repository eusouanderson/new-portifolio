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
  aiChat?: AiChatTexts;
  workExperience: WorkExperienceTexts;
  contact: ContactTexts;
}

export interface NavbarTexts {
  home: string;
  aboutMe: string;
  tech: string;
  ai?: string;
  chat?: string;
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
  viewRepo?: string;
  viewDetails?: string;
  highlightsLabel?: string;
  solutions: AiSolutionItem[];
}

export interface BlogPost {
  title: string;
  url: string;
  description?: string;
}

export interface ProjectsTexts {
  title: string;
  subtitle?: string;
  description?: string;
  featuredTab?: string;
  githubTab?: string;
  blogTab?: string;
  viewDetails?: string;
  viewRepo?: string;
  searchPlaceholder?: string;
  techAndToolsLabel?: string;
  openSourceLabel?: string;
  accessRepo?: string;
  technicalArticleLabel?: string;
  readArticleLabel?: string;
  projects: Project[];
  blogPosts?: BlogPost[];
}

export interface WorkExperienceTexts {
  title: string;
  subtitle?: string;
  experiences: Experience[];
}

export interface ContactTexts {
  title: string;
  subtitle?: string;
  description?: string;
  statusBadge?: string;
  directEmail?: string;
  location?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  directEmailLabel?: string;
  locationLabel?: string;
  channelsLabel?: string;
  formTitle?: string;
  formDescription?: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  sendButton: string;
  sendingButton?: string;
  sendAnotherButton?: string;
  successTitle: string;
  successMessage: string;
}

export interface AiChatTexts {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  statusOnline: string;
  inputPlaceholder: string;
  sendButton: string;
  thinkingText: string;
  clearButton: string;
  suggestedQuestionsTitle: string;
  suggestedQuestions: string[];
  mcpToolBadgePrefix: string;
  welcomeMessage: string;
  errorGeneric: string;
  groqMissingNotice: string;
}