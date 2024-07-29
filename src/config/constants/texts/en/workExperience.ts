import { WorkExperienceTexts } from "@/types/texts";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { tags } from "../../tags";

export const workExperience: WorkExperienceTexts = {
  title: "Work Experience",
  experiences: [
    {
      name: "Software Engineer",
      companyName: "Houg · Freelance",
      description:
        "Currently, I work as a Software Engineer at Houg, developing comprehensive web systems. My responsibilities include creating and maintaining dynamic websites, robust APIs, and efficient databases using MongoDB. I focus on quality and performance, seeking innovative solutions that ensure scalability and security of our services.",
      from: "2024-04-01",
      to: "Present",
      tags: [tags["MongoDB"], tags["API"], tags["Web Development"]],
      icon: "Database",
    },
    {
      name: "Software Engineer",
      companyName: "Agência Close",
      description:
        "At Agência Close, I am responsible for backend development and APIs for our software, using Electron and Vue.js. I work on designing and implementing scalable and efficient solutions, ensuring seamless integration between frontend and backend, and contributing to a superior user experience.",
      from: "2023-09-01",
      to: "Present",
      tags: [tags["Electron"], tags["Vue.js"], tags["Backend Development"]],
      icon: "Code",
    },
    {
      name: "Fullstack Developer",
      companyName: "Allscripts · Freelance",
      description:
        "As a Fullstack Developer at Allscripts, I was responsible for maintaining projects, fixing bugs, analyzing data, and user feedback. I worked on creating improvements and updates, developing backends with Django, Flask, FastAPI, and Vue.js, and small software with Electron.js.",
      from: "2010-02-01",
      to: "2023-11-01",
      tags: [tags["Django"], tags["Flask"], tags["FastAPI"], tags["Vue.js"], tags["Electron"]],
      icon: "Tools",
    },
    {
      name: "Frontend Developer",
      companyName: "Mestres da Web",
      description:
        "As a Frontend Developer at Mestres da Web, I use React, Next.js, and TypeScript to develop high-quality web applications. My responsibilities include creating fast, interactive, and accessible user interfaces. I collaborate with the backend team to integrate the frontend with backend services and ensure seamless functionality. Additionally, I handle the deployment of applications. Working in an agile environment, I actively contribute to the team's efforts in delivering top-notch software.",
      from: "2023-01-01",
      to: "2024-06-01",
      tags: [tags["React.js"], tags["Next.js"], tags["TypeScript"]],
      icon: "Next.js",
    },
    {
      name: "Frontend Developer Intern",
      companyName: "Mestres da Web",
      description:
        "As a Frontend Developer Intern at Mestres da Web, I worked on developing web applications using React. I collaborated with the team to create user-friendly interfaces and ensure the applications' responsiveness and performance. I also gained experience in working with TypeScript and integrating the frontend with backend services. During my internship, I learned best practices in frontend development and contributed to the team's projects.",
      from: "2022-07-05",
      to: "2022-12-01",
      tags: [tags["React.js"], tags["TypeScript"]],
      icon: "React.js",
    },
  ],
};
