"use client";
import { motionVar } from "@/lib/motion";
import { cn, publicAssetPath } from "@/lib/utils";
import { HeroTexts } from "@/types/texts";
import { downloadFile } from "@/utils/downloadFile";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { Button } from "../ui/button";

interface Props {
  texts: HeroTexts;
}

export const Hero = ({ texts }: Props) => {
  return (
    <section
      id="about-me"
      className="flex flex-col justify-center [&>*]:z-10"
    >
      <div className="flex gap-4 items-start mx-4 md:ml-[10%] md:mr-0 mt-6">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-black-blue" />
          <div className="w-1 sm:h-64 h-20 violet-gradient" />
        </div>

        <div className="text-white flex flex-col gap-2">
          <motion.span
            className="text-4xl max-md:text-3xl max-sm:text-xl"
            variants={motionVar}
            initial={"initial"}
            viewport={{ once: true }}
            whileInView={"fade-in"}
            transition={{ duration: 0.5 }}
          >
            {texts.greetings}
            <span className="font-bold">Anderson Rodrigues</span>
          </motion.span>
          <motion.h1
            className="flex flex-wrap text-6xl font-bold z-10 max-md:text-5xl max-sm:text-3xl"
            variants={motionVar}
            initial={"initial"}
            viewport={{ once: true }}
            whileInView={"fade-in"}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {texts.title.map((text, index) => (
              <span
                key={index}
                className={cn("mr-4", text.emphasis && "text-light-blue")}
              >
                {text.content}
              </span>
            ))}
          </motion.h1>
          <motion.span
            className="z-10 max-md:text-sm max-sm:text-xs whitespace-pre-line"
            variants={motionVar}
            initial={"initial"}
            viewport={{ once: true }}
            whileInView={"fade-in"}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {texts.subtitle}
          </motion.span>
          <div className="flex items-center gap-4 mt-4">
            <Button
              onClick={() => {
                downloadFile(publicAssetPath("/assets/cv.pdf"), "AndersonRodriguesCV.pdf");
              }}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="CV"
              data-tooltip-place="bottom"
              className="text-sm h-10 px-2 md:px-6 md:h-12 md:text-base w-fit border-light-blue"
            >
              {texts.cvButton}
            </Button>
            <Link
              href="https://www.linkedin.com/in/anderson-rodrigues-24003823b/"
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Linkedin"
              data-tooltip-place="bottom"
              className="group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#121217]/80 backdrop-blur-xl border border-white/10 text-[#0A66C2] hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/15 hover:shadow-[0_0_20px_rgba(10,102,194,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 md:ml-2"
              aria-label="Linkedin"
            >
              <FaLinkedinIn className="text-xl md:text-2xl transition-transform duration-300 group-hover:scale-110" />
            </Link>
            <Link
              href="https://github.com/eusouanderson"
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Github"
              data-tooltip-place="bottom"
              className="group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#121217]/80 backdrop-blur-xl border border-white/10 text-white/90 hover:text-white hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 md:ml-2"
              aria-label="Github"
            >
              <TbBrandGithubFilled className="text-xl md:text-2xl transition-transform duration-300 group-hover:scale-110" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
