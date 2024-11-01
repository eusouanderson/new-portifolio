import React from "react";
import { ProjectsTexts } from "@/types/texts";

interface Props {
  projectText: ProjectsTexts;
}

const Projects = ({ projectText }: Props) => {
  return (
    <section
      id="projects"
      className="h-dvh text-white py-24 flex flex-col justify-center gap-24 [&>*]:z-10"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center">{projectText.title}</h2>
      <div className="flex flex-wrap">
        {/* Exiba os projetos aqui */}
      </div>
    </section>
  );
};

// Exporta como default
export default Projects;
