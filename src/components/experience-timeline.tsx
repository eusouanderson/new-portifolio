"use client";

import { useLanguage } from "@/contexts/language-context";
import { countYears, formatDate } from "@/lib/date";
import { cn } from "@/lib/utils";
import { Experience, IconProject } from "@/types/experience";
import { motion, useScroll, useSpring } from "framer-motion";
import { ReactElement, useRef } from "react";
import { AiOutlineDotNet } from "react-icons/ai";
import {
    FaCss3Alt,
    FaHtml5,
    FaJava,
    FaNode,
    FaPython,
    FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
    SiNextdotjs,
    SiTypescript,
    SiVite,
    SiVuedotjs,
} from "react-icons/si";
import { TbBriefcase, TbBuilding, TbCalendar } from "react-icons/tb";
import { Tilt } from "react-tilt";

const iconMap: Record<IconProject, ReactElement> = {
  "React.js": <FaReact />,
  Vite: <SiVite />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <FaNode />,
  ".NET": <AiOutlineDotNet />,
  Java: <FaJava />,
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  JavaScript: <IoLogoJavascript />,
  Python: <FaPython />,
  "Vue.js": <SiVuedotjs />,
  TypeScript: <SiTypescript />,
};

export const ExperienceTimeline = ({
  experiences,
}: {
  experiences: Experience[];
}) => {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 75%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative w-full py-8 md:py-16">
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-light-blue to-purple-500 shadow-[0_0_12px_#00d8ff,0_0_24px_#6e00ff]"
      />

      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-2 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            top: ["-10%", "110%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 -translate-x-1/2 w-1.5 h-24 bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_15px_#00d8ff]"
        />
      </div>

      <div className="relative z-10 flex flex-col gap-12 md:gap-20">
        {experiences.map((experience, index) => {
          const isEven = index % 2 === 0;
          const isCurrent = !experience.to;

          return (
            <div key={`exp-${index}`} className="relative flex items-center w-full">
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="relative flex items-center justify-center cursor-pointer group"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={cn(
                      "absolute w-12 h-12 rounded-full border",
                      isCurrent
                        ? "border-emerald-400/60"
                        : "border-light-blue/50"
                    )}
                  />
                  <div
                    className={cn(
                      "w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0d0d12] border-2 flex items-center justify-center text-lg md:text-xl transition-transform group-hover:scale-110",
                      isCurrent
                        ? "border-emerald-400 text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.5)]"
                        : "border-light-blue text-light-blue shadow-[0_0_20px_rgba(0,216,255,0.45)]"
                    )}
                  >
                    {iconMap[experience.iconName as IconProject] || (
                      <TbBriefcase />
                    )}
                  </div>
                </motion.div>
              </div>

              <div
                className="hidden md:block absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none h-[2px]"
                style={
                  isEven
                    ? { right: "50%", width: "48px" }
                    : { left: "50%", width: "48px" }
                }
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{ transformOrigin: isEven ? "right" : "left" }}
                  className="h-[2px] w-full bg-gradient-to-r from-light-blue via-accent to-light-blue shadow-[0_0_10px_#00d8ff]"
                />
              </div>

              <div
                className="md:hidden absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none h-[2px]"
                style={{ left: "24px", width: "40px" }}
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                  className="h-[2px] w-full bg-gradient-to-r from-light-blue to-accent shadow-[0_0_8px_#00d8ff]"
                />
              </div>

              <div
                className={cn(
                  "w-full pl-16 md:pl-0 md:w-[calc(50%-48px)]",
                  isEven ? "md:mr-auto" : "md:ml-auto"
                )}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Tilt
                    options={{
                      max: 8,
                      scale: 1.01,
                      speed: 400,
                      perspective: 1000,
                    }}
                    className="w-full bg-[#121217]/95 border border-white/10 hover:border-light-blue/70 transition-all duration-300 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl backdrop-blur-md group hover:shadow-[0_0_35px_rgba(110,0,255,0.35)]"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border",
                          isCurrent
                            ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                            : "bg-light-blue/15 text-light-blue border-light-blue/30"
                        )}
                      >
                        {isCurrent ? (
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                          </span>
                        ) : (
                          <TbCalendar className="text-sm" />
                        )}
                        <span>
                          {language === "en" ? (
                            <>
                              From {formatDate(experience.from, "MM/yyyy")} to{" "}
                              {isCurrent
                                ? "Present"
                                : formatDate(experience.to!, "MM/yyyy")}
                            </>
                          ) : (
                            <>
                              De {formatDate(experience.from, "MM/yyyy")} a{" "}
                              {isCurrent
                                ? "Momento"
                                : formatDate(experience.to!, "MM/yyyy")}
                            </>
                          )}
                        </span>
                      </span>

                      <span className="text-xs text-gray-400 font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                        {countYears(experience.from, experience.to, language)}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors mb-1.5">
                      {experience.name}
                    </h3>

                    <div className="flex items-center gap-2 text-sm md:text-base font-semibold text-light-blue mb-4">
                      <TbBuilding className="text-base" />
                      <span>{experience.companyName}</span>
                    </div>

                    {experience.description && (
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-6">
                        {experience.description}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {experience.tags.map((tag, tagIndex) => (
                        <span
                          key={tag?.name || `tag-${tagIndex}`}
                          style={{
                            color: tag?.color || "#ffffff",
                          }}
                          className="text-xs md:text-sm font-medium px-2.5 py-0.5 rounded bg-white/5"
                        >
                          #{tag?.name || "Unknown"}
                        </span>
                      ))}
                    </div>
                  </Tilt>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
