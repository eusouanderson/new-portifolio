import { WorkExperienceTexts } from "@/types/texts";
import { tags } from "../../tags";

export const workExperience: WorkExperienceTexts = {
  title: "Professional Experience",
  experiences: [
    {
      name: "Backend Development Intern",
      companyName: "App Data",
      description:
        "During my internship at App Data, I gained practical experience building RESTful APIs and integrating backend services with Node.js, Express, and MongoDB.",
      from: "2009-07-05",
      to: "2014-12-01",
      tags: [tags["Node.js"], tags["Express"], tags["MongoDB"]],
      iconName: "Python",
    },
    {
      name: "Fullstack Developer",
      companyName: "Allscripts · Freelance",
      description:
        "As a Fullstack Developer at Allscripts, I maintained projects, fixed bugs, and developed backends with Django, Flask, FastAPI, and Vue.js, as well as software with Electron.js.",
      from: "2010-02-01",
      to: "2023-11-01",
      tags: [tags["Django"], tags["Flask"], tags["FastAPI"], tags["Vue.js"], tags["Electron"]],
      iconName: "Python",
    },
    {
      name: "Backend Developer",
      companyName: "App Data",
      description:
        "As a Backend Developer at App Data, I designed and implemented scalable APIs with Node.js and Express, integrated systems with MongoDB and PostgreSQL, and contributed to microservices architectures.",
      from: "2014-01-01",
      to: "2024-06-01",
      tags: [tags["Node.js"], tags["Express"], tags["MongoDB"], tags["PostgreSQL"]],
      iconName: "Node.js",
    },
    {
      name: "Software Engineer",
      companyName: "Agência Close",
      description:
        "At Agência Close, I was responsible for backend and API development for our software using Electron and Vue.js. I worked on architecture and implementation of scalable and efficient solutions, ensuring seamless integration between frontend and backend.",
      from: "2023-01-01",
      to: "2023-11-30",
      tags: [tags["FastAPI"], tags["Vue.js"], tags["Backend Development"], tags["Render"]],
      iconName: "Vite",
    },
    {
      name: "Software Engineer",
      companyName: "Houg · Freelance",
      description:
        "Worked as a Software Engineer at Houg developing comprehensive web systems, creating and maintaining dynamic websites, robust APIs, and databases with MongoDB, emphasizing performance and security.",
      from: "2024-04-01",
      to: "2024-08-01",
      tags: [tags["MongoDB"], tags["API"], tags["Web Development"], tags["React.js"]],
      iconName: "React.js",
    },
    {
      name: " Developer",
      companyName: "Comerc Energia",
      description:
        "Working as a developer at Comerc Energia, building modern and scalable web applications focusing on Vue 3, Composition API, and TypeScript. Responsible for crafting rich interfaces, continuous integration, and comprehensive automated test coverage with Vitest and Jest.",
      from: "2025-10-01",
      tags: [tags["Vue 3"], tags["TypeScript"], tags["Vitest"], tags["Jest"], tags["Web Development"]],
      iconName: "Vue.js",
    },
  ],
};
