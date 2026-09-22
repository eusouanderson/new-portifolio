"use client";

import { Navbar } from "@/components/navbar";
import {
  AboutMe,
  AiEcosystem,
  Hero,
  Tecnologies,
} from "@/components/sections";
import { LanguageProvider, useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
import { Texts } from "@/types/texts";
import { Suspense } from "react";
import { LanguageSwitch } from "./language-switch";
import { ParticlesBG } from "./particles";
import ProjectList from "./project-list/ProjectList";
import { Contact } from "./sections/contact";
import { Experiences } from "./sections/experiences";
import WhatsAppButton from "./whats/whatsapp";

interface Props {
  texts?: Texts;
  initialLanguage?: string;
}

const MainPageInner = () => {
  const { texts } = useLanguage();

  return (
    <main
      className={cn(
        "bg-dark-gray min-h-dvh bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]"
      )}
    >
      <Navbar text={texts.navbar} />
      <Suspense fallback={<div>Loading...</div>}>
        <ParticlesBG />
      </Suspense>
      <AboutMe texts={texts.aboutMe} />
      <Hero texts={texts.hero} />
      <Experiences texts={texts.workExperience} />
      <Tecnologies techTexts={texts.technologies} />
      <AiEcosystem texts={texts.aiEcosystem} />
      <ProjectList />
      <Contact texts={texts.contact} />

      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
        <WhatsAppButton
          phoneNumber="5511983523869"
          message="Olá! Gostaria de saber mais sobre seus projetos."
        />
        <LanguageSwitch />
      </div>
    </main>
  );
};

export const MainPage = ({ initialLanguage = "pt-br" }: Props) => {
  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <MainPageInner />
    </LanguageProvider>
  );
};