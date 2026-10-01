import { aboutme } from "@/config/constants/texts/pt-br/aboutme";
import { aiEcosystem } from "@/config/constants/texts/pt-br/aiEcosystem";
import { contact } from "@/config/constants/texts/pt-br/contact";
import { projects } from "@/config/constants/texts/pt-br/projects";
import { workExperience } from "@/config/constants/texts/pt-br/workExperience";

interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  role: string;
  education: string[];
  location: string;
  bio: string;
  contacts: {
    email: string;
    whatsapp: string;
    linkedin: string;
    github: string;
  };
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const getProfileData = (): ProfileData => {
  return {
    name: "Anderson Rodrigues",
    title: aboutme.title,
    role: aboutme.role,
    education: [
      "Graduado em Análise e Desenvolvimento de Sistemas (ADS)",
      "Pós-graduando em Engenharia de Software",
    ],
    location: "São Paulo, Brasil · Disponível para atuação Remota ou Híbrida",
    bio: aboutme.description,
    contacts: {
      email: contact.directEmail || "eusouanderson@outlook.com",
      whatsapp: "https://wa.me/5511983523869",
      linkedin: "https://www.linkedin.com/in/anderson-rodrigues-24003823b/",
      github: "https://github.com/eusouanderson",
    },
  };
};

export const getSkillsData = (category?: string): SkillCategory[] => {
  const allCategories: SkillCategory[] = [
    {
      category: "frontend",
      items: [
        "Vue 3 (Composition API, Pinia, Vue Router)",
        "React.js",
        "Next.js (App Router, Server Components)",
        "TypeScript",
        "Tailwind CSS",
        "Micro-frontends",
        "Design Systems",
        "Framer Motion",
      ],
    },
    {
      category: "backend",
      items: [
        "Node.js",
        "Express",
        "Hono",
        "FastAPI",
        "Flask",
        "Django",
        "PHP / Laravel",
        "RESTful APIs de Alto Desempenho",
        "Arquitetura de Microsserviços",
      ],
    },
    {
      category: "ai_llm",
      items: [
        "Model Context Protocol (MCP) - Criação de servidores nativos e suíte corporativa",
        "Arquiteturas RAG (Retrieval-Augmented Generation)",
        "Agentes Autônomos de IA e Orquestração de Fluxos",
        "Integração com LLMs (Claude, Gemini, OpenAI, Groq)",
        "Manipulação de AST (Tree-Sitter, Babel Parser, ts-morph)",
        "Embeddings e Busca Semântica no MongoDB Atlas",
      ],
    },
    {
      category: "testing",
      items: [
        "Vitest",
        "Jest",
        "Playwright",
        "Pytest",
        "TDD / Testes Automatizados com Alta Cobertura e Resiliência",
      ],
    },
    {
      category: "database",
      items: [
        "MongoDB Atlas (Busca Vetorial e Memória Persistente)",
        "PostgreSQL",
        "SQLite",
        "Drizzle ORM",
        "Prisma ORM",
      ],
    },
    {
      category: "devops",
      items: [
        "Docker",
        "Git & GitHub Actions",
        "Linux",
        "CI/CD Pipelines",
        "Vite",
        "Electron.js",
      ],
    },
  ];

  if (!category || category === "all") {
    return allCategories;
  }

  return allCategories.filter((cat) => cat.category.toLowerCase() === category.toLowerCase());
};

export const getWorkExperienceData = (companyFilter?: string) => {
  if (!companyFilter) {
    return workExperience.experiences;
  }

  return workExperience.experiences.filter((exp) =>
    exp.companyName.toLowerCase().includes(companyFilter.toLowerCase()) ||
    exp.name.toLowerCase().includes(companyFilter.toLowerCase())
  );
};

export const getProjectsData = (tagFilter?: string) => {
  const list = projects.projects.map((proj) => ({
    title: proj.title,
    description: proj.description,
    tags: proj.tags.map((t) => t.name),
    githubUrl: proj.github,
  }));

  if (!tagFilter) {
    return list;
  }

  return list.filter((proj) =>
    proj.tags.some((t) => t.toLowerCase().includes(tagFilter.toLowerCase())) ||
    proj.title.toLowerCase().includes(tagFilter.toLowerCase())
  );
};

export const getAiEcosystemData = (solutionId?: string) => {
  if (!solutionId) {
    return {
      title: aiEcosystem.title,
      description: aiEcosystem.description,
      solutions: aiEcosystem.solutions.map((sol) => ({
        id: sol.id,
        title: sol.title,
        badge: sol.badge,
        description: sol.description,
        features: sol.features,
        tags: sol.tags.map((t) => t.name),
        github: sol.github,
      })),
    };
  }

  const solution = aiEcosystem.solutions.find(
    (s) => s.id.toLowerCase() === solutionId.toLowerCase()
  );

  return solution ? {
    id: solution.id,
    title: solution.title,
    badge: solution.badge,
    description: solution.description,
    features: solution.features,
    tags: solution.tags.map((t) => t.name),
    github: solution.github,
  } : null;
};

const fallbackRepos = [
  {
    name: "ai-provider-hub",
    description: "Extensão VS Code que unifica Claude, Gemini, OpenAI e Groq com suporte nativo ao Model Context Protocol (MCP) e Webview UI.",
    html_url: "https://github.com/eusouanderson/ai-provider-hub",
    language: "TypeScript",
    stargazers_count: 12,
    forks_count: 2,
    updated_at: "2026-09-25",
  },
  {
    name: "project-memory-mcp",
    description: "Servidor MCP projetado para persistência de memória de longo prazo de agentes LLM com MongoDB Atlas e deduplicação semântica.",
    html_url: "https://github.com/eusouanderson/new-portifolio",
    language: "TypeScript",
    stargazers_count: 8,
    forks_count: 1,
    updated_at: "2026-09-30",
  },
  {
    name: "new-portifolio",
    description: "Portfólio ultra-moderno desenvolvido em Next.js 14, Tailwind CSS, Framer Motion e Three.js com agentes e circuitos neon interativos.",
    html_url: "https://github.com/eusouanderson/new-portifolio",
    language: "TypeScript",
    stargazers_count: 15,
    forks_count: 4,
    updated_at: "2026-09-30",
  },
  {
    name: "crm-financial-system",
    description: "Sistema financeiro completo com schemas, controllers, migrations, testes automatizados e arquitetura modular escalável.",
    html_url: "https://github.com/eusouanderson",
    language: "TypeScript",
    stargazers_count: 6,
    forks_count: 0,
    updated_at: "2026-08-15",
  },
  {
    name: "bobot-automation",
    description: "Ecossistema agêntico de automações e orquestração de scripts inteligentes em TypeScript e Node.js.",
    html_url: "https://github.com/eusouanderson",
    language: "TypeScript",
    stargazers_count: 5,
    forks_count: 1,
    updated_at: "2026-07-20",
  },
];

export const getGithubRepositoriesData = async (limitStr?: string) => {
  const limit = limitStr ? Math.min(Math.max(parseInt(limitStr, 10) || 10, 1), 30) : 10;
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "eusouanderson";

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`, {
      signal: controller.signal,
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Anderson-Portfolio-Agent",
      },
      next: { revalidate: 3600 },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return fallbackRepos.slice(0, limit);
    }

    const repos: GithubRepo[] = await response.json();
    return repos.map((repo) => ({
      name: repo.name,
      description: repo.description || "Repositório do portfólio de Anderson Rodrigues",
      html_url: repo.html_url,
      language: repo.language || "TypeScript",
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at,
    })).slice(0, limit);
  } catch {
    return fallbackRepos.slice(0, limit);
  }
};
