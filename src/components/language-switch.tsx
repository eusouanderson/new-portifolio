"use client";

import { img_langbr, img_langen } from "@/assets";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#121217]/90 border border-white/15 shadow-xl backdrop-blur-xl">
      <button
        type="button"
        onClick={() => setLanguage("pt-br")}
        className={cn(
          "flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer",
          language === "pt-br"
            ? "bg-light-blue/25 border border-light-blue/60 shadow-[0_0_15px_rgba(110,0,255,0.4)] text-white"
            : "border border-transparent text-gray-400 hover:text-white hover:bg-white/5 opacity-70 hover:opacity-100"
        )}
        aria-label="Mudar para Português"
      >
        <div className="w-5 h-5 rounded-full overflow-hidden border border-white/20 flex-shrink-0 relative">
          <Image
            src={img_langbr}
            alt="Português"
            fill
            sizes="20px"
            className="object-cover"
          />
        </div>
        <span className="text-xs font-bold tracking-wider">PT</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={cn(
          "flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer",
          language === "en"
            ? "bg-light-blue/25 border border-light-blue/60 shadow-[0_0_15px_rgba(110,0,255,0.4)] text-white"
            : "border border-transparent text-gray-400 hover:text-white hover:bg-white/5 opacity-70 hover:opacity-100"
        )}
        aria-label="Switch to English"
      >
        <div className="w-5 h-5 rounded-full overflow-hidden border border-white/20 flex-shrink-0 relative">
          <Image
            src={img_langen}
            alt="English"
            fill
            sizes="20px"
            className="object-cover"
          />
        </div>
        <span className="text-xs font-bold tracking-wider">EN</span>
      </button>
    </div>
  );
};
