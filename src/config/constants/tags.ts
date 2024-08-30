import { Tag } from "@/types/tag";

export type Tags = {
  [key: string]: Tag;
};

export const tags: Tags = {
  "Next.js": {
    name: "Next.js",
    color: "#00d8a5", // Verde menta
  },
  Typescript: {
    name: "Typescript",
    color: "#3178c6", // Azul claro
  },
  PrismaORM: {
    name: "PrismaORM",
    color: "#1a202c", // Cinza escuro
  },
  PostgreSQL: {
    name: "PostgreSQL",
    color: "#336791", // Azul escuro
  },
  "React.js": {
    name: "React.js",
    color: "#61dafb", // Azul React
  },
  ".NET": {
    name: ".NET",
    color: "#7f00ff", // Roxo vibrante
  },
  Django: {
    name: "Django",
    color: "#092147", // Azul profundo
  },
  Python: {
    name: "Python",
    color: "#ffe873", // Amarelo Python
  },
  jQuery: {
    name: "jQuery",
    color: "#0769ad", // Azul jQuery
  },
  Java: {
    name: "Java",
    color: "#f89820", // Laranja Java
  },
  MongoDB: {
    name: "MongoDB",
    color: "#47a248", // Verde MongoDB
  },
  API: {
    name: "API",
    color: "#e34f26", // Laranja forte
  },
  Electron: {
    name: "Electron",
    color: "#47848f", // Azul esverdeado
  },
  "Vue.js": {
    name: "Vue.js",
    color: "#42b883", // Verde claro
  },
  "FastAPI": {
    name: "FastAPI",
    color: "#009688", // Verde FastAPI
  },
  "Flask": {
    name: "Flask",
    color: "#ffffff", // Branco
  },
  Render: {
    name: "Render",
    color: "#ff4500", // Laranja vivo
  },
  "Web Development": {
    name: "Web Development",
    color: "#ff6347", // Tomate
  },
  "Backend Development": {
    name: "Backend Development",
    color: "#ffd700", // Amarelo ouro
  },
};
