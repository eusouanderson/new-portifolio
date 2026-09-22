import { Tag } from "./tag";

export type IconProject =
  | "React.js"
  | "Vite"
  | "Next.js"
  | "Node.js"
  | ".NET"
  | "Java"
  | "HTML5"
  | "CSS3"
  | "JavaScript"
  | "Python"
  | "Vue.js"
  | "TypeScript";

export interface Experience {
  name: string;
  description: string;
  companyName: string;
  tags: Tag[];
  from: string;
  to?: string;
  iconName?: IconProject;
}
