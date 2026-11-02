import { img_avatar } from "@/assets/images";
import { AboutMeTexts } from "@/types/texts";
import Image from "next/image";

interface Props {
  texts: AboutMeTexts;
}

export const AboutMe = ({ texts }: Props) => {
  return (
    <section
      id="hero"
      className="flex flex-col px-4 sm:px-8 md:px-12 justify-center items-center text-white min-h-dvh py-20 [&>*]:z-10"
    >
      <Image
        src={img_avatar}
        height={200}
        width={200}
        priority
        className="rounded-full w-32 md:w-48 h-32 md:h-48 mb-4"
        alt="Avatar"
      />
      <span className="text-xl sm:text-3xl md:text-5xl font-semibold text-center leading-4">
        {texts.title} <span className="text-black-blue">Anderson Rodrigues</span>
      </span>
      <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold sm:leading-3 mt-2 text-center">
        {texts.subtitle}
      </h2>
      <span className="text-white/80 mt-4 md:mt-8 text-center text-sm md:text-base font-medium">
        {texts.role}
      </span>
      <span className="w-5/6 text-center self-center text-white mt-4 md:mt-8 text-xs sm:text-base md:text-lg">
        {texts.description}
      </span>
    </section>
  );
};
