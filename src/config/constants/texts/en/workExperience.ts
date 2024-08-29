import { WorkExperienceTexts } from "@/types/texts";
import { tags } from "../../tags";

export const workExperience: WorkExperienceTexts = {
  title: "Experiência Profissional",
  experiences: [
    {
      name: "Engenheiro de Software",
      companyName: "Houg · Autônomo",
      description:
        "Atualmente, trabalho como Engenheiro de Software na Houg, desenvolvendo sistemas web abrangentes. Minhas responsabilidades incluem a criação e manutenção de sites dinâmicos, APIs robustas e bancos de dados eficientes utilizando MongoDB. Foco na qualidade e performance, buscando soluções inovadoras que garantam a escalabilidade e segurança dos nossos serviços.",
      from: "2024-04-01",
      to: "Presente",
      tags: [tags["MongoDB"], tags["API"], tags["Desenvolvimento Web"]],
      // 'icon' é opcional aqui, pode ser omitido
    },
    {
      name: "Engenheiro de Software",
      companyName: "Agência Close · Tempo Integral",
      description:
        "Na Agência Close, sou responsável pelo desenvolvimento do backend e das APIs dos nossos softwares, utilizando Electron e Vue.js. Trabalho na arquitetura e implementação de soluções escaláveis e eficientes, garantindo uma integração perfeita entre frontend e backend e contribuindo para uma experiência de usuário superior.",
      from: "2023-09-01",
      to: "Presente",
      tags: [tags["Electron"], tags["Vue.js"], tags["Desenvolvimento Backend"]],
      
    },
    {
      name: "Desenvolvedor Fullstack",
      companyName: "Allscripts · Freelance",
      description:
        "Como Desenvolvedor Fullstack na Allscripts, fui responsável pela manutenção de projetos, correção de bugs, análise de dados e feedbacks de usuários. Trabalhei na criação de melhorias e atualizações, desenvolvimento de backends com Django, Flask, FastAPI, e Vue.js, além de pequenos softwares com Electron.js.",
      from: "2010-02-01",
      to: "2023-11-01",
      tags: [tags["Django"], tags["Flask"], tags["FastAPI"], tags["Vue.js"], tags["Electron"]],
      
    },
    {
      name: "Desenvolvedor Frontend",
      companyName: "Mestres da Web",
      description:
        "Como Desenvolvedor Frontend na Mestres da Web, utilizo React, Next.js e TypeScript para desenvolver aplicações web de alta qualidade. Minhas responsabilidades incluem criar interfaces de usuário rápidas, interativas e acessíveis. Colaboro com a equipe de backend para integrar o frontend com os serviços do backend e garantir funcionalidade perfeita. Além disso, cuido do deployment das aplicações. Trabalhando em um ambiente ágil, contribuo ativamente para os esforços da equipe em entregar software de ponta.",
      from: "2023-01-01",
      to: "2024-06-01",
      tags: [tags["React.js"], tags["Next.js"], tags["TypeScript"]],
      icon: "Next.js", // Valor de exemplo
    },
    {
      name: "Estagiário em Desenvolvimento Frontend",
      companyName: "Mestres da Web",
      description:
        "Como Estagiário em Desenvolvimento Frontend na Mestres da Web, trabalhei no desenvolvimento de aplicações web utilizando React. Colaborei com a equipe para criar interfaces de usuário amigáveis e garantir a responsividade e performance das aplicações. Também ganhei experiência com TypeScript e na integração do frontend com serviços backend. Durante o estágio, aprendi as melhores práticas em desenvolvimento frontend e contribui para os projetos da equipe.",
      from: "2022-07-05",
      to: "2022-12-01",
      tags: [tags["React.js"], tags["TypeScript"]],
      icon: "React.js", // Valor de exemplo
    },
  ],
};
