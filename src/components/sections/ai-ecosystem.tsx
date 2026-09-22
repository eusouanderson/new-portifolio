"use client";

import { AiEcosystemTexts, AiSolutionItem } from "@/types/texts";
import Link from "next/link";
import { ReactElement } from "react";
import {
    TbBrain,
    TbBrandGithubFilled,
    TbBrandVscode,
    TbCpu,
    TbTestPipe,
} from "react-icons/tb";
import { Tilt } from "react-tilt";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  texts?: AiEcosystemTexts;
}

const iconRegistry: Record<AiSolutionItem["icon"], ReactElement> = {
  hub: <TbBrandVscode className="text-3xl text-accent" />,
  mcp: <TbCpu className="text-3xl text-light-blue" />,
  memory: <TbBrain className="text-3xl text-[#06b6d4]" />,
  qa: <TbTestPipe className="text-3xl text-[#10b981]" />,
};

const SolutionCard = ({ solution }: { solution: AiSolutionItem }) => {
  return (
    <div className="h-full py-4 px-2">
      <Tilt
        options={{
          max: 18,
          scale: 1.06,
          speed: 450,
          perspective: 1000,
        }}
        className="h-full bg-[#121217]/95 border border-white/10 hover:border-light-blue/70 transition-all duration-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl backdrop-blur-md group hover:shadow-[0_0_35px_rgba(110,0,255,0.35)] min-h-[460px]"
      >
        <div>
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {iconRegistry[solution.icon]}
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-light-blue/20 text-light-blue border border-light-blue/30">
                {solution.badge}
              </span>
            </div>

            {solution.github && (
              <Link
                href={solution.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10"
                aria-label="Repositório no GitHub"
              >
                <TbBrandGithubFilled className="text-xl" />
              </Link>
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
            {solution.title}
          </h3>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
            {solution.description}
          </p>

          <ul className="space-y-2 mb-6">
            {solution.features.map((feature, idx) => (
              <li
                key={idx}
                className="text-xs md:text-sm text-gray-400 flex items-start gap-2"
              >
                <span className="text-accent font-bold mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {solution.tags.map((tag, tagIndex) => (
            <span
              key={tag?.name || tagIndex}
              style={{ color: tag?.color || "#ffffff" }}
              className="text-xs md:text-sm font-medium px-2 py-0.5 rounded bg-white/5"
            >
              #{tag?.name}
            </span>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

export const AiEcosystem = ({ texts }: Props) => {
  if (!texts) {
    return null;
  }

  return (
    <section
      id="ai-ecosystem"
      className="text-white py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto flex flex-col justify-center gap-12 [&>*]:z-10 overflow-hidden"
    >
      <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
        <span className="text-xs md:text-sm uppercase tracking-widest text-accent font-bold">
          {texts.subtitle}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold">{texts.title}</h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          {texts.description}
        </p>
      </div>

      <div className="w-full relative px-2">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 28,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="pb-14 !overflow-visible [&_.swiper-pagination-bullet]:!bg-white/40 [&_.swiper-pagination-bullet-active]:!bg-light-blue [&_.swiper-pagination-bullet-active]:!w-6 [&_.swiper-pagination-bullet-active]:!rounded-full transition-all"
        >
          {texts.solutions.map((solution) => (
            <SwiperSlide key={solution.id} className="h-auto">
              <SolutionCard solution={solution} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
