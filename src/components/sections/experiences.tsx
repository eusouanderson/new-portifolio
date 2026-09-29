import { WorkExperienceTexts } from "@/types/texts";
import { ExperienceTimeline } from "../experience-timeline";

interface Props {
  texts: WorkExperienceTexts;
}

export const Experiences = ({ texts }: Props) => {
  return (
    <section
      id="work-exp"
      className="flex flex-col h-auto min-h-dvh justify-center [&>*]:z-10 text-white py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto overflow-visible"
    >
      <div className="text-center space-y-3 mb-12 md:mb-16">
        <span className="text-xs md:text-sm uppercase tracking-widest text-accent font-bold">
          {texts.subtitle || "Trajetória & Carreira"}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold">{texts.title}</h2>
      </div>
      <ExperienceTimeline experiences={texts.experiences} />
    </section>
  );
};
