"use client";

import { texts } from "@/config/constants";
import { AiEcosystemTexts, AiSolutionItem } from "@/types/texts";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ReactElement, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
    TbBrain,
    TbBrandGithubFilled,
    TbBrandVscode,
    TbCpu,
    TbExternalLink,
    TbTestPipe,
    TbX,
} from "react-icons/tb";
import { Tilt } from "react-tilt";
import type { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  texts?: AiEcosystemTexts;
}

const iconRegistry: Record<AiSolutionItem["icon"], ReactElement> = {
  hub: <TbBrandVscode className="text-2xl md:text-3xl text-accent" />,
  mcp: <TbCpu className="text-2xl md:text-3xl text-light-blue" />,
  memory: <TbBrain className="text-2xl md:text-3xl text-[#06b6d4]" />,
  qa: <TbTestPipe className="text-2xl md:text-3xl text-[#10b981]" />,
};

const SolutionCard = ({
  solution,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  solution: AiSolutionItem;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}) => {
  return (
    <div
      className="h-[175px] md:h-[185px] px-2 py-1 select-none cursor-pointer group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <Tilt
        options={{
          max: 10,
          scale: 1.02,
          speed: 400,
          perspective: 1000,
        }}
        className="w-full h-full rounded-2xl p-5 md:p-6 transition-all duration-300 backdrop-blur-md flex flex-col justify-between bg-[#121217]/95 border border-white/10 group-hover:border-light-blue/70 shadow-lg group-hover:shadow-[0_0_30px_rgba(110,0,255,0.35)]"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
              {iconRegistry[solution.icon]}
            </div>
            <span className="text-xs uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-light-blue/20 text-light-blue border border-light-blue/30">
              {solution.badge}
            </span>
          </div>

          {solution.github && (
            <div className="text-white/40 group-hover:text-white transition-colors p-1.5 rounded-lg bg-white/5">
              <TbBrandGithubFilled className="text-lg" />
            </div>
          )}
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors line-clamp-2">
            {solution.title}
          </h3>
          <span className="text-xs text-light-blue/70 mt-1 block opacity-0 group-hover:opacity-100 transition-opacity">
            Clique para ver detalhes
          </span>
        </div>
      </Tilt>
    </div>
  );
};

export const AiEcosystem = ({ texts }: Props) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeSolution, setActiveSolution] = useState<AiSolutionItem | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!texts) {
    return null;
  }

  const handleCardMouseEnter = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const handleCardMouseLeave = () => {
    if (!activeSolution) {
      swiperRef.current?.autoplay?.start();
    }
  };

  const handleCardClick = (solution: AiSolutionItem) => {
    setActiveSolution(solution);
    swiperRef.current?.autoplay?.stop();
  };

  const handleClose = () => {
    setActiveSolution(null);
    swiperRef.current?.autoplay?.start();
  };

  return (
    <section
      id="ai-ecosystem"
      className="text-white py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto flex flex-col justify-center gap-12 [&>*]:z-10"
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
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
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
          className="pb-16 !overflow-visible [&_.swiper-pagination-bullet]:!bg-white/40 [&_.swiper-pagination-bullet-active]:!bg-light-blue [&_.swiper-pagination-bullet-active]:!w-6 [&_.swiper-pagination-bullet-active]:!rounded-full transition-all"
        >
          {texts.solutions.map((solution) => (
            <SwiperSlide key={solution.id} className="h-auto">
              <SolutionCard
                solution={solution}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
                onClick={() => handleCardClick(solution)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isMounted &&
        createPortal(
          <AnimatePresence>
            {activeSolution && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md"
                onClick={handleClose}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="w-full max-w-2xl relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Tilt
                    options={{
                      max: 10,
                      scale: 1.01,
                      speed: 400,
                      perspective: 1000,
                    }}
                    className="w-full bg-[#121217]/95 border border-light-blue/60 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_0_60px_rgba(110,0,255,0.4),0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl relative"
                  >
                    <button
                      type="button"
                      onClick={handleClose}
                      className="absolute top-5 right-5 text-white/60 hover:text-white p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer z-10"
                      aria-label="Fechar visualização"
                    >
                      <TbX className="text-2xl" />
                    </button>

                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                        {iconRegistry[activeSolution.icon]}
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-light-blue/20 text-light-blue border border-light-blue/30 w-fit">
                          {activeSolution.badge}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 pr-10">
                      {activeSolution.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                      {activeSolution.description}
                    </p>

                    <div className="space-y-3 mb-6 bg-white/[0.02] border border-white/5 rounded-2xl p-4 sm:p-5">
                      <span className="text-xs uppercase tracking-wider text-light-blue font-semibold block mb-2">
                        Destaques & Capacidades
                      </span>
                      {activeSolution.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-sm text-gray-300"
                        >
                          <span className="text-accent font-bold mt-0.5">•</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-2">
                        {activeSolution.tags.map((tag, tagIndex) => (
                          <span
                            key={tag?.name || tagIndex}
                            style={{ color: tag?.color || "#ffffff" }}
                            className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10"
                          >
                            #{tag?.name}
                          </span>
                        ))}
                      </div>

                      {activeSolution.github && (
                        <Link
                          href={activeSolution.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl bg-accent/20 hover:bg-accent/30 text-white border border-accent/40 transition-colors"
                        >
                          <TbBrandGithubFilled className="text-lg" />
                          <span>Ver Repositório</span>
                          <TbExternalLink className="text-sm text-white/70" />
                        </Link>
                      )}
                    </div>
                  </Tilt>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};
