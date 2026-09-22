import { Tecnology } from "@/types/tecnologies";
import { FaNode, FaPython, FaReact } from "react-icons/fa";
import { RiBrainLine } from "react-icons/ri";
import {
  SiExpress,
  SiHono,
  SiJest,
  SiNextdotjs,
  SiTypescript,
  SiVitest,
  SiVuedotjs,
} from "react-icons/si";
import { TbRobot } from "react-icons/tb";

export const tecnologies: Tecnology[] = [
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "IA & RAG",
    icon: RiBrainLine,
  },
  {
    name: "MCP",
    icon: TbRobot,
  },
  {
    name: "Vue 3",
    icon: SiVuedotjs,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Hono",
    icon: SiHono,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "Node.js",
    icon: FaNode,
  },
  {
    name: "Vitest",
    icon: SiVitest,
  },
  {
    name: "Jest",
    icon: SiJest,
  },
  {
    name: "Python",
    icon: FaPython,
  },
];
