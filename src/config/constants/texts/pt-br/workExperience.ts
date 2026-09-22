import { WorkExperienceTexts } from "@/types/texts";
import { tags } from "../../tags";

export const workExperience: WorkExperienceTexts = {
  title: "Experiência Profissional",
  experiences: [
    {
      name: "Estagiário em Desenvolvimento Backend",
      companyName: "App Data",
      description:
        "Durante meu estágio em Desenvolvimento Backend na App Data, atuei na construção de APIs RESTful e integração com Node.js, Express e MongoDB.",
      from: "2009-07-05",
      to: "2014-12-01",
      tags: [tags["Node.js"], tags["Express"], tags["MongoDB"]],
      iconName: "Python",
    },
    {
      name: "Desenvolvedor Fullstack",
      companyName: "Allscripts · Freelance",
      description:
        "Como Desenvolvedor Fullstack na Allscripts, fui responsável pela manutenção de projetos, correção de bugs, análise de dados e feedbacks de usuários. Trabalhei desenvolvendo backends com Django, Flask, FastAPI e Vue.js, além de softwares com Electron.js.",
      from: "2010-02-01",
      to: "2023-11-01",
      tags: [tags["Django"], tags["Flask"], tags["FastAPI"], tags["Vue.js"], tags["Electron"]],
      iconName: "Python",
    },
    {
      name: "Desenvolvedor Backend",
      companyName: "App Data",
      description:
        "Como Desenvolvedor Backend na App Data, fui responsável por projetar e implementar APIs robustas e escaláveis utilizando Node.js e Express, integrando sistemas com MongoDB e PostgreSQL e colaborando na arquitetura de microsserviços.",
      from: "2014-01-01",
      to: "2024-06-01",
      tags: [tags["Node.js"], tags["Express"], tags["MongoDB"], tags["PostgreSQL"]],
      iconName: "Node.js",
    },
    {
      name: "Engenheiro de Software",
      companyName: "Agência Close",
      description:
        "Na Agência Close, fui responsável pelo desenvolvimento do backend e das APIs para nossos softwares, utilizando Electron e Vue.js. Atuei na arquitetura e implementação de soluções escaláveis e eficientes, assegurando a integração perfeita entre frontend e backend.",
      from: "2023-09-01",
      to: "2023-10-31",
      tags: [tags["FastAPI"], tags["Vue.js"], tags["Backend Development"], tags["Render"]],
      iconName: "Vite",
    },
    {
      name: "Engenheiro de Software",
      companyName: "Houg · Autônomo",
      description:
        "Atuei como Engenheiro de Software na Houg desenvolvendo sistemas web abrangentes, incluindo a criação e manutenção de sites dinâmicos, APIs robustas e bancos de dados com MongoDB, priorizando performance e segurança.",
      from: "2024-04-01",
      to: "2024-08-01",
      tags: [tags["MongoDB"], tags["API"], tags["Web Development"], tags["React.js"]],
      iconName: "React.js",
    },
    {
      name: "Desenvolvedor",
      companyName: "Comerc Energia",
      description:
        "Atuação como desenvolvedor na Comerc Energia, desenvolvendo aplicações web modernas e escaláveis com foco em Vue 3, Composition API e TypeScript. Responsável pelo desenvolvimento de interfaces ricas, integração contínua e cobertura abrangente de testes automatizados com Vitest e Jest.",
      from: "2025-10-01",
      tags: [tags["Vue 3"], tags["TypeScript"], tags["Vitest"], tags["Jest"], tags["Web Development"]],
      iconName: "Vue.js",
    },
  ],
};
