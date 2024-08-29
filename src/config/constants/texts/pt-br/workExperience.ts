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
      name: "Desenvolvedor Frontend",
      companyName: "App Data",
      description:
        "Como Desenvolvedor Frontend na Mestres da Web, utilizei React, Next.js e TypeScript para criar aplicações web de alta qualidade. Fui responsável por desenvolver interfaces de usuário interativas e acessíveis e por integrar o frontend com o backend. Trabalhei em um ambiente ágil e contribui significativamente para a entrega de software de primeira linha.",
      from: "2023-01-01",
      to: "2024-06-01",
      tags: [tags["React.js"], tags["Next.js"], tags["TypeScript"]],
      icon: "React.js",
    },
    {
      name: "Estagiário em Desenvolvimento Frontend",
      companyName: "App Data",
      description:
        "Como Estagiário em Desenvolvimento Frontend na Mestres da Web, trabalhei com React para desenvolver aplicações web, contribuindo para a criação de interfaces amigáveis e garantindo a responsividade e o desempenho das aplicações. Ganhei experiência em TypeScript e integração com serviços de backend, aprendendo as melhores práticas do desenvolvimento frontend.",
      from: "2022-07-05",
      to: "2022-12-01",
      tags: [tags["React.js"], tags["TypeScript"]],
      icon: "React.js",
    },
  ],
};
