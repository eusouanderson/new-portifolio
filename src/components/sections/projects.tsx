"use client";

import { cn } from "@/lib/utils";
import { Project } from "@/types/projects";
import { ProjectsTexts } from "@/types/texts";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaGithub } from "react-icons/fa";
import {
    TbBrandGithubFilled,
    TbCode,
    TbExternalLink,
    TbEye,
    TbSearch,
    TbX,
} from "react-icons/tb";
import { Tilt } from "react-tilt";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language?: string | null;
  stargazers_count?: number;
}

interface Props {
  projectText: ProjectsTexts;
}

interface ProjectCardProps {
  project: Project;
  viewDetailsText: string;
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const FeaturedProjectCard = ({
  project,
  viewDetailsText,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ProjectCardProps) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className="h-full select-none cursor-pointer"
    >
      <Tilt
        options={{
          max: 10,
          scale: 1.01,
          speed: 400,
          perspective: 1000,
        }}
        className="h-full flex flex-col rounded-2xl bg-[#121217]/85 backdrop-blur-xl border border-white/10 hover:border-light-blue/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(110,0,255,0.25)] transition-all duration-500 overflow-hidden group"
      >
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-black/40">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#161622] via-[#101017] to-[#0c0c12] relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-light-blue/20 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-light-blue text-2xl shadow-inner group-hover:border-accent/40 group-hover:text-accent group-hover:shadow-[0_0_20px_rgba(110,0,255,0.3)] transition-all">
                  <TbCode />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                  {project.tags[0]?.name || "Code"}
                </span>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-black/30 pointer-events-none" />

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-[#121217]/90 backdrop-blur-md border border-white/15 text-white/90 hover:text-white hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] transition-all duration-300 z-10"
              aria-label="GitHub Repository"
            >
              <FaGithub size={16} />
            </Link>
          )}
        </div>

        <div className="p-5 flex flex-col flex-1 justify-between gap-3">
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors line-clamp-1">
              {project.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-300 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag.name}
                  style={{
                    color: tag.color,
                    borderColor: `${tag.color}40`,
                    backgroundColor: `${tag.color}15`,
                  }}
                  className="text-[11px] font-medium px-2.5 py-0.5 rounded-full border backdrop-blur-sm"
                >
                  #{tag.name}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/10">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-white/5 text-xs text-light-blue group-hover:text-accent transition-colors">
              <span className="flex items-center gap-1 font-medium">
                {viewDetailsText}
                <TbEye className="text-sm" />
              </span>
              <TbExternalLink className="text-sm text-white/40 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export const Projects = ({ projectText }: Props) => {
  const [activeTab, setActiveTab] = useState<"featured" | "github" | "blog">("featured");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState<boolean>(false);
  const [reposError, setReposError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (activeTab === "github" && repos.length === 0 && !loadingRepos && !reposError) {
      const fetchRepos = async () => {
        try {
          setLoadingRepos(true);
          const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "eusouanderson";
          const response = await axios.get<Repo[]>(
            `https://api.github.com/users/${username}/repos`,
            {
              params: {
                per_page: 30,
                sort: "updated",
              },
            }
          );
          const filtered = response.data.filter((r) => r.description);
          setRepos(filtered.length > 0 ? filtered : response.data);
          setLoadingRepos(false);
        } catch {
          setReposError("Não foi possível carregar os repositórios no momento.");
          setLoadingRepos(false);
        }
      };

      fetchRepos();
    }
  }, [activeTab, repos.length, loadingRepos, reposError]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleCardMouseEnter = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const handleCardMouseLeave = () => {
    if (!activeProject) {
      swiperRef.current?.autoplay?.start();
    }
  };

  const handleCardClick = (project: Project) => {
    setActiveProject(project);
    swiperRef.current?.autoplay?.stop();
  };

  const handleCloseModal = () => {
    setActiveProject(null);
    swiperRef.current?.autoplay?.start();
  };

  const filteredRepos = useMemo(() => {
    if (!searchQuery.trim()) return repos;
    const query = searchQuery.toLowerCase();
    return repos.filter(
      (repo) =>
        repo.name.toLowerCase().includes(query) ||
        (repo.description && repo.description.toLowerCase().includes(query))
    );
  }, [repos, searchQuery]);

  return (
    <section
      id="projects"
      className="text-white py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto flex flex-col justify-center gap-10 [&>*]:z-10"
    >
      <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
        <span className="text-xs md:text-sm uppercase tracking-widest text-accent font-bold">
          {projectText.subtitle || "Portfólio & Aplicações"}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold">{projectText.title}</h2>
        {projectText.description && (
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            {projectText.description}
          </p>
        )}
      </div>

      <div className="flex items-center justify-center gap-2 p-1 rounded-full bg-[#121217]/80 backdrop-blur-xl border border-white/10 w-fit mx-auto shadow-lg">
        <button
          type="button"
          onClick={() => setActiveTab("featured")}
          className={cn(
            "px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300",
            activeTab === "featured"
              ? "bg-light-blue/20 text-white border border-light-blue/50 shadow-[0_0_15px_rgba(110,0,255,0.35)]"
              : "text-white/60 hover:text-white"
          )}
        >
          {projectText.featuredTab || "Destaques"} ({projectText.projects.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("github")}
          className={cn(
            "px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300",
            activeTab === "github"
              ? "bg-light-blue/20 text-white border border-light-blue/50 shadow-[0_0_15px_rgba(110,0,255,0.35)]"
              : "text-white/60 hover:text-white"
          )}
        >
          {projectText.githubTab || "Repositórios GitHub"}
        </button>
        {projectText.blogPosts && projectText.blogPosts.length > 0 && (
          <button
            type="button"
            onClick={() => setActiveTab("blog")}
            className={cn(
              "px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300",
              activeTab === "blog"
                ? "bg-light-blue/20 text-white border border-light-blue/50 shadow-[0_0_15px_rgba(110,0,255,0.35)]"
                : "text-white/60 hover:text-white"
            )}
          >
            {projectText.blogTab || "Artigos & Blog"} ({projectText.blogPosts.length})
          </button>
        )}
      </div>

      {activeTab === "featured" && (
        <div className="w-full relative px-2">
          <Swiper
            modules={[Pagination, Autoplay]}
            onSwiper={(swiper: SwiperType) => {
              swiperRef.current = swiper;
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
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
            {projectText.projects.map((project, index) => (
              <SwiperSlide key={`${project.title}-${index}`} className="h-auto">
                <FeaturedProjectCard
                  project={project}
                  viewDetailsText={projectText.viewDetails || "Ver Detalhes"}
                  onClick={() => handleCardClick(project)}
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {activeTab === "github" && (
        <div className="w-full space-y-6">
          <div className="relative max-w-md mx-auto w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={projectText.searchPlaceholder || "Buscar repositório..."}
              className="w-full bg-[#121217]/80 border border-white/10 focus:border-light-blue/60 rounded-xl px-4 py-2.5 pl-10 text-sm text-white placeholder-white/40 focus:outline-none transition-all shadow-inner backdrop-blur-xl"
            />
            <TbSearch className="absolute left-3.5 top-3 text-white/40 text-lg" />
          </div>

          {loadingRepos && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-[#121217]/60 border border-white/5 animate-pulse space-y-3 h-40"
                >
                  <div className="h-4 bg-white/10 rounded w-3/4" />
                  <div className="h-3 bg-white/5 rounded w-full" />
                  <div className="h-3 bg-white/5 rounded w-5/6" />
                </div>
              ))}
            </div>
          )}

          {reposError && (
            <div className="p-8 rounded-2xl bg-[#121217]/80 border border-white/10 text-center space-y-4 max-w-md mx-auto">
              <p className="text-sm text-gray-300">{reposError}</p>
              <Link
                href="https://github.com/eusouanderson"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all"
              >
                <TbBrandGithubFilled className="text-lg" />
                <span>Explorar Perfil no GitHub</span>
              </Link>
            </div>
          )}

          {!loadingRepos && !reposError && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredRepos.map((repo) => (
                <div
                  key={repo.id}
                  className="p-5 rounded-2xl bg-[#121217]/80 backdrop-blur-xl border border-white/10 hover:border-light-blue/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(110,0,255,0.2)] flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <Link
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-white group-hover:text-accent transition-colors flex items-center gap-2 line-clamp-1"
                      >
                        <TbCode className="text-light-blue shrink-0 text-lg" />
                        <span className="truncate">{repo.name}</span>
                      </Link>
                      <TbExternalLink className="text-white/40 group-hover:text-white shrink-0 text-sm transition-colors" />
                    </div>
                    <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed">
                      {repo.description || "Repositório open-source sem descrição definida."}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    {repo.language ? (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                        {repo.language}
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-white/40">
                        {projectText.openSourceLabel || "Código aberto"}
                      </span>
                    )}

                    <Link
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-blue hover:text-accent font-medium transition-colors flex items-center gap-1"
                    >
                      <span>{projectText.accessRepo || "Acessar"}</span>
                      <TbExternalLink className="text-xs" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === "blog" && projectText.blogPosts && (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectText.blogPosts.map((post, idx) => (
            <div
              key={`${post.title}-${idx}`}
              className="p-6 rounded-2xl bg-[#121217]/85 backdrop-blur-xl border border-white/10 hover:border-light-blue/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(110,0,255,0.25)] flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/25">
                    {projectText.technicalArticleLabel || "Artigo Técnico"}
                  </span>
                  <TbExternalLink className="text-white/40 group-hover:text-white transition-colors text-base" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-light-blue transition-colors line-clamp-2">
                  {post.title}
                </h3>
                {post.description && (
                  <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <Link
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-light-blue hover:text-accent transition-colors"
                >
                  <span>{projectText.readArticleLabel || "Ler artigo"}</span>
                  <TbExternalLink className="text-xs" />
                </Link>
                <span className="text-[11px] text-white/40 font-mono">eusouanderson.me</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {isMounted &&
        createPortal(
          <AnimatePresence>
            {activeProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md"
                onClick={handleCloseModal}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="w-full max-w-2xl relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="w-full bg-[#121217]/95 border border-light-blue/60 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(110,0,255,0.4),0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl relative">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-xl bg-black/50 hover:bg-black/70 backdrop-blur-md transition-colors cursor-pointer z-20"
                      aria-label="Fechar visualização"
                    >
                      <TbX className="text-2xl" />
                    </button>

                    <div className="relative w-full h-56 sm:h-64 bg-black/50 overflow-hidden">
                      {activeProject.image ? (
                        <Image
                          src={activeProject.image}
                          alt={activeProject.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#161622] via-[#101017] to-[#0c0c12] relative">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-light-blue/25 via-transparent to-transparent pointer-events-none" />
                          <div className="relative z-10 flex flex-col items-center gap-2">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-light-blue text-3xl shadow-inner">
                              <TbCode />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                              {activeProject.tags[0]?.name || "Code"}
                            </span>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-black/40" />
                    </div>

                    <div className="p-6 sm:p-8 space-y-5">
                      <div className="space-y-2">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                          {activeProject.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                          {activeProject.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs uppercase tracking-wider font-semibold text-white/60">
                          {projectText.techAndToolsLabel || "Tecnologias & Ferramentas"}
                        </span>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {activeProject.tags.map((tag) => (
                            <span
                              key={tag.name}
                              style={{
                                color: tag.color,
                                borderColor: `${tag.color}40`,
                                backgroundColor: `${tag.color}15`,
                              }}
                              className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full border"
                            >
                              #{tag.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      {activeProject.github && (
                        <div className="pt-2">
                          <Link
                            href={activeProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-xl bg-light-blue/20 hover:bg-light-blue/30 text-white border border-light-blue/40 hover:border-light-blue transition-all shadow-[0_0_20px_rgba(110,0,255,0.25)]"
                          >
                            <TbBrandGithubFilled className="text-lg" />
                            <span>{projectText.viewRepo || "Ver Repositório"}</span>
                            <TbExternalLink className="text-sm text-white/70" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};

export default Projects;
