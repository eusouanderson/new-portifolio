"use client";

import { Project } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Tilt } from "react-tilt";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";


interface Props {
  projects: Project[];
}

export function SliderProjects({ projects }: Props) {
  return (
    <Swiper
      spaceBetween={20}
      
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="scale-95">
            <Tilt
              options={{
                max: 30,
                scale: 1,
                speed: 450,
              }}
              className="flex flex-col p-4 bg-dark-gray border border-white rounded-md gap-4 w-80 group relative mx-auto origin-center transition-all"
            >
              <div className="relative">
                {project.image ? (
                  <Image
                    height={project.height ?? 400}
                    width={project.width ?? 400}
                    src={project.image}
                    alt={project.title}
                    className="w-80 h-60 object-cover rounded-md"
                  />
                ) : (
                  <div className="w-80 h-60 flex items-center justify-center bg-black/40 rounded-md">
                    <span className="text-sm text-gray-400">{project.tags[0]?.name || "Code"}</span>
                  </div>
                )}
                <div className="flex gap-4 absolute top-2 right-2 scale-95 transition-all hover:scale-100">
                  <Link
                    href={project.github}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-[#121217]/80 backdrop-blur-md border border-white/15 text-white/80 hover:text-white hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub size={18} />
                  </Link>
                </div>
              </div>
              <div className="transition-all flex flex-col gap-2 [&>*]:z-10">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm max-w-60">{project.description}</p>
                <div className="text-sm space-x-2 flex flex-wrap text-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      style={{
                        color: tag.color,
                      }}
                      // className={`text-[${tag.color}]`}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
