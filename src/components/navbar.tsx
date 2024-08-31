"use client";
import Link from "next/link";
import { Logo } from "./logo";
import { NavbarTexts } from "@/types/texts";
import { Button } from "./ui/button";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  text: NavbarTexts;
}

export const Navbar = ({ text }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  // Função para fechar o menu
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 z-20 px-8",
        isOpen && "bg-black" // Aplica a classe de fundo preto quando o menu está aberto
      )}
    >
      <div className="flex items-center justify-between py-4">
        <Logo />
        <div className="flex gap-4 max-md:hidden">
          <ul className="text-white text-sm flex items-center gap-4 pb-2">
            <li>
              <Link href="#hero" className="stroke-button py-1">{text.home}</Link>
            </li>
            <li>
              <Link href="#about-me" className="stroke-button py-1">{text.aboutMe}</Link>
            </li>
            <li>
              <Link href="#work-exp" className="stroke-button py-1">{text.workExp}</Link>
            </li>
            <li>
              <Link href="#tech" className="stroke-button py-1">{text.tech}</Link>
            </li>
            <li>
              <Link href="#projects" className="stroke-button py-1">{text.projects}</Link>
            </li>
          </ul>
          <Link href="#contact-me">
            <Button>{text.contact}</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-b-2 border-b-white bg-black"
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
          >
            <ul className="text-white text-sm flex flex-col items-center gap-4 pb-2">
              <li>
                <Link href="#hero" onClick={closeMenu}>
                  {text.home}
                </Link>
              </li>
              <li>
                <Link href="#about-me" onClick={closeMenu}>
                  {text.aboutMe}
                </Link>
              </li>
              <li>
                <Link href="#work-exp" onClick={closeMenu}>
                  {text.workExp}
                </Link>
              </li>
              <li>
                <Link href="#tech" onClick={closeMenu}>
                  {text.tech}
                </Link>
              </li>
              <li>
                <Link href="#projects" onClick={closeMenu}>
                  {text.projects}
                </Link>
              </li>
              <li>
                <Link href="#contact-me" onClick={closeMenu}>
                  {text.contact}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
