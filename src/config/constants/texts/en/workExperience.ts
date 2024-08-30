import { WorkExperienceTexts } from "@/types/texts";
import { tags } from "../../tags";

export const workExperience: WorkExperienceTexts = {
  title: "Professional Experience",
  experiences: [
    {
      name: "Software Engineer",
      companyName: "Agência Close",
      description:
        "At Agência Close, I am responsible for backend and API development for our software, using Electron and Vue.js. I work on the architecture and implementation of scalable and efficient solutions, ensuring seamless integration between frontend and backend, and contributing to a superior user experience.",
      from: "2023-09-01",
      to: "Present",
      tags: [tags["FastAPI"], tags["Vue.js"], tags["Backend Development"], tags["Render"]],
      iconName: "Vite",
    },
    {
      name: "Software Engineer",
      companyName: "Houg · Freelance",
      description:
        "Currently, I work as a Software Engineer at Houg, developing comprehensive web systems. My responsibilities include creating and maintaining dynamic websites, robust APIs, and efficient databases with MongoDB. I focus on quality and performance, seeking innovative solutions that ensure scalability and security of our services.",
      from: "2024-04-01",
      to: "2024-08-01",
      tags: [tags["MongoDB"], tags["API"], tags["Web Development"], tags["React.js"]],
      iconName: "React.js",
    },
    {
      name: "Fullstack Developer",
      companyName: "Allscripts · Freelance",
      description:
        "As a Fullstack Developer at Allscripts, I was responsible for maintaining projects, fixing bugs, analyzing data, and user feedback. I worked on creating improvements and updates, developing backends with Django, Flask, FastAPI, and Vue.js, and small software with Electron.js.",
      from: "2010-02-01",
      to: "2023-11-01",
      tags: [tags["Django"], tags["Flask"], tags["FastAPI"], tags["Vue.js"], tags["Electron"]],
      iconName: "Python",
    },
    {
      name: "Backend Developer",
      companyName: "App Data",
      description:
        "As a Backend Developer at App Data, I was responsible for designing and implementing robust and scalable APIs using Node.js and Express. I worked on creating backend solutions that ensured high performance and security of applications. Additionally, I integrated complex systems with relational and non-relational databases, using technologies such as MongoDB and PostgreSQL. I contributed significantly to the microservices architecture, ensuring the modularity and maintainability of the system.",
      from: "2014-01-01",
      to: "2024-06-01",
      tags: [tags["Node.js"], tags["Express"], tags["MongoDB"], tags["PostgreSQL"]],
      iconName: "Node.js",
    },
    {
      name: "Backend Development Intern",
      companyName: "App Data",
      description:
        "During my internship in Backend Development at App Data, I gained practical experience in building RESTful APIs and integrating systems with various backend services. I worked with Node.js and Express to develop efficient and scalable backend solutions. Additionally, I gained experience with databases such as MongoDB and implemented solutions that improved the efficiency and performance of applications.",
      from: "2009-07-05",
      to: "2014-12-01",
      tags: [tags["Node.js"], tags["Express"], tags["MongoDB"]],
      iconName: "Python",
    }
  ],
};
