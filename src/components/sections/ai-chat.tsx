"use client";

import { AiChatTexts } from "@/types/texts";
import { AiChatbox } from "../chat/ai-chatbox";

interface Props {
  texts?: AiChatTexts;
}

export const AiChat = ({ texts }: Props) => {
  if (!texts) return null;

  return (
    <section
      id="ai-chat"
      className="text-white py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto flex flex-col justify-center gap-12 [&>*]:z-10 relative"
    >
      <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
        <span className="text-xs md:text-sm uppercase tracking-widest text-accent font-bold">
          {texts.subtitle}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold">{texts.title}</h2>
        {texts.description && (
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            {texts.description}
          </p>
        )}
      </div>

      <AiChatbox texts={texts} />
    </section>
  );
};
