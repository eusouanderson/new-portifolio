"use client";
import { Experience, IconProject } from "@/types/experience";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact, FaCss3Alt, FaHtml5, FaJava, FaNode, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiVite } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { countYears, formatDate } from "@/lib/date";

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
};

export const ExperienceTimeline = ({ experiences }: { experiences: Experience[] }) => {
  return (
    <div className="mt-10 md:mt-20 flex flex-col items-center">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={`experience-${index}`}
            contentStyle={{
              background: "#1d1836",
              color: "#fff",
            }}
            visible
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={`De ${formatDate(experience.from, "MM/yy")} a ${
              experience.to ? formatDate(experience.to, "MM/yy") : "Momento"
            } - ${countYears(experience.from, experience.to)}`}
            icon={
              <div style={{ backgroundColor: '#232631', height: '60px', width: 'auto',marginLeft: 'auto', display: 'flex', borderRadius: '50%' }}>
                {
                  iconMap[experience.iconName as IconProject] || null
                }
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
            {/* <p>{experience.description}</p> */}
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <span
                  key={tag.name}
                  style={{
                    color: tag.color,
                  }}
                  className={`text-sm md:text-base`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};
