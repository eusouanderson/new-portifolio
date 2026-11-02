"use client";

import { cn } from "@/lib/utils";
import { NavbarTexts } from "@/types/texts";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Button } from "./ui/button";

interface Props {
  text: NavbarTexts;
}

export const Navbar = ({ text }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionIds = [
      "hero",
      "about-me",
      "work-exp",
      "tech",
      "ai-ecosystem",
      "ai-chat",
      "projects",
      "contact-me",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr
          );
          setActiveSection(topEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    closeMenu();

    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    targetElement.scrollIntoView({ behavior: "smooth", block: "center" });

    if (typeof window !== "undefined" && window.history.pushState) {
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  const navLinks = [
    { id: "hero", label: text.home },
    { id: "about-me", label: text.aboutMe },
    { id: "work-exp", label: text.workExp },
    { id: "tech", label: text.tech },
    ...(text.ai ? [{ id: "ai-ecosystem", label: text.ai }] : []),
    ...(text.chat ? [{ id: "ai-chat", label: text.chat }] : []),
    { id: "projects", label: text.projects },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-30 transition-all duration-300 px-6 sm:px-8",
        isScrolled
          ? "bg-[#0b0c10]/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-4",
        isOpen && "bg-[#0b0c10] border-b border-white/10"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex gap-4 max-md:hidden items-center">
          <ul className="text-white text-sm flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <Link
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={cn(
                      "stroke-button py-1 px-2 rounded-md transition-colors duration-200 text-xs lg:text-sm font-medium",
                      isActive
                        ? "text-light-blue font-semibold drop-shadow-[0_0_8px_rgba(110,0,255,0.6)]"
                        : "text-white/80 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="#contact-me"
            onClick={(e) => handleNavClick(e, "contact-me")}
          >
            <Button
              className={cn(
                "transition-all duration-300",
                activeSection === "contact-me" &&
                  "ring-2 ring-light-blue shadow-[0_0_15px_rgba(110,0,255,0.4)]"
              )}
            >
              {text.contact}
            </Button>
          </Link>
        </div>
        <div
          className="md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            color="#fff"
            label={isOpen ? "Fechar menu" : "Abrir menu"}
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-t border-white/10 bg-[#0b0c10]/95 backdrop-blur-xl mt-3 -mx-6 sm:-mx-8 px-6 py-6 shadow-2xl"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{ duration: 0.25 }}
          >
            <ul className="text-white text-sm flex flex-col items-center gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <Link
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={cn(
                        "py-1.5 px-3 rounded-lg text-base transition-colors",
                        isActive
                          ? "text-light-blue font-semibold bg-white/5"
                          : "text-white/80 hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="#contact-me"
                  onClick={(e) => handleNavClick(e, "contact-me")}
                >
                  <Button className="w-48">{text.contact}</Button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
