"use client";
import { countYears, formatDate } from "@/lib/date";
import { Experience, IconProject } from "@/types/experience";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaCss3Alt, FaHtml5, FaJava, FaNode, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiTypescript, SiVite, SiVuedotjs } from "react-icons/si";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const iconMap: { [key in IconProject]?: JSX.Element } = {
  "React.js": <FaReact />,
  "Vite": <SiVite />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <FaNode />,
  ".NET": <AiOutlineDotNet />,
  "Java": <FaJava />,
  "HTML5": <FaHtml5 />,
  "CSS3": <FaCss3Alt />,
  "JavaScript": <IoLogoJavascript />,
  "Python": <FaPython />,
  "Vue.js": <SiVuedotjs />,
  "TypeScript": <SiTypescript />,
};

export const ExperienceTimeline = ({ experiences }: { experiences: Experience[] }) => {
  return (
    <div className="mt-10 md:mt-20 flex flex-col items-center">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={`experience-${index}`}
            contentStyle={{
              background: "#0d0d0d",
              color: "#fff",
            }}
            visible
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={`De ${formatDate(experience.from, "MM/yy")} a ${
              experience.to ? formatDate(experience.to, "MM/yy") : "Momento"
            } - ${countYears(experience.from, experience.to)}`}
            icon={
              <div style={{ backgroundColor: 'light-blue', height: '60px', width: 'auto', marginLeft: 'auto', display: 'flex', borderRadius: '50%' }}>
                {iconMap[experience.iconName as IconProject] || null}
              </div>
            }
            className="[&>*]:z-10"
          >
            <h3 className="text-base md:text-lg vertical-timeline-element-title">
              {experience.name}
            </h3>
            <h4 className="text-xs md:text-sm vertical-timeline-element-subtitle text-light-blue">
              {experience.companyName}
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag, tagIndex) => (
                <span
                  key={tag?.name || `tag-${tagIndex}`}
                  style={{
                    color: tag?.color || '#ffffff',
                  }}
                  className={`text-sm md:text-base`}
                >
                  #{tag?.name || 'Unknown'}
                </span>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};
