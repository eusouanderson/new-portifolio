import { Navbar } from "@/components/navbar";
import { AboutMe, Hero, Projects, Tecnologies } from "@/components/sections";
import { cn } from "@/lib/utils";
import { Texts } from "@/types/texts";
import { texts as textBases } from "@/config/constants";
import { ParticlesBG } from "./particles";
import { Experiences } from "./sections/experiences";
import { LanguageSwitch } from "./language-switch";
import { Contact } from "./sections/contact";
import React, { Suspense, lazy } from 'react';

interface Props {
  texts?: Texts;
}

export const MainPage = ({ texts = textBases["pt-br"] }: Props) => {
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
      <Contact texts={texts.contact} />
      <LanguageSwitch />
    </main>
  );
};