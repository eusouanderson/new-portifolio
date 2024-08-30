import { WorkExperienceTexts } from "@/types/texts";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { tags } from "../../tags";

export const workExperience: WorkExperienceTexts = {
  title: "Experiência Profissional",
  experiences: [
    {
      name: "Engenheiro de Software",
      companyName: "Houg · Autônomo",
      description:
        "Atualmente, atuo como Engenheiro de Software na Houg, desenvolvendo sistemas web abrangentes. Minhas responsabilidades incluem a criação e manutenção de sites dinâmicos, APIs robustas e bancos de dados eficientes com MongoDB. Foco na qualidade e performance, buscando soluções inovadoras que garantam escalabilidade e segurança dos nossos serviços.",
      from: "2024-04-01",
      to: "Presente",
      tags: [tags["MongoDB"], tags["API"], tags["Web Development"]],
      
    },
    {
      name: "Engenheiro de Software",
      companyName: "Agência Close",
      description:
        "Na Agência Close, sou responsável pelo desenvolvimento do backend e das APIs para nossos softwares, utilizando Electron e Vue.js. Trabalho na arquitetura e implementação de soluções escaláveis e eficientes, assegurando a integração perfeita entre frontend e backend e contribuindo para uma experiência de usuário superior.",
      from: "2023-09-01",
      to: "Presente",
      tags: [tags["Electron"], tags["Vue.js"], tags["Backend Development"]],
      
    },
    {
      name: "Desenvolvedor Fullstack",
      companyName: "Allscripts · Freelance",
      description:
        "Como Desenvolvedor Fullstack na Allscripts, fui responsável pela manutenção de projetos, correção de bugs, análise de dados e feedbacks de usuários. Trabalhei na criação de melhorias e atualizações, desenvolvendo backends com Django, Flask, FastAPI e Vue.js, e pequenos softwares com Electron.js.",
      from: "2010-02-01",
      to: "2023-11-01",
      tags: [tags["Django"], tags["Flask"], tags["FastAPI"], tags["Vue.js"], tags["Electron"]],
      
    },
    {
      name: "Desenvolvedor Backend",
      companyName: "App Data",
      description:
        "Como Desenvolvedor Backend na App Data, fui responsável por projetar e implementar APIs robustas e escaláveis utilizando Node.js e Express. Trabalhei na criação de soluções backend que garantiram a alta performance e segurança das aplicações. Além disso, integrei sistemas complexos com bancos de dados relacionais e não relacionais, utilizando tecnologias como MongoDB e PostgreSQL. Contribuí significativamente para a arquitetura de microservices, garantindo a modularidade e manutenção do sistema.",
      from: "2014-01-01",
      to: "2024-06-01",
      tags: [tags["Node.js"], tags["Express"], tags["MongoDB"], tags["PostgreSQL"]],
      
    },
    {
      name: "Estagiário em Desenvolvimento Backend",
      companyName: "App Data",
      description:
        "Durante meu estágio em Desenvolvimento Backend na App Data, adquiri experiência prática na construção de APIs RESTful e na integração de sistemas com diferentes serviços backend. Trabalhei com Node.js e Express para desenvolver soluções backend eficientes e escaláveis. Além disso, ganhei experiência com bancos de dados como MongoDB, e implementei soluções que melhoraram a eficiência e performance das aplicações.",
      from: "2009-07-05",
      to: "2014-12-01",
      tags: [tags["Node.js"], tags["Express"], tags["MongoDB"]],
      
    }
  ],
};
