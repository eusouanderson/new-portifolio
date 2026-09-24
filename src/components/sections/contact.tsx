"use client";

import { ContactTexts } from "@/types/texts";
import Link from "next/link";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import {
  TbBrandGithubFilled,
  TbExternalLink,
  TbMail,
  TbMapPin,
} from "react-icons/tb";
import { ContactForm } from "../contact-form/contact-form";

interface Props {
  texts: ContactTexts;
}

export const Contact = ({ texts }: Props) => {
  const directEmail = texts.directEmail || "eusouanderson@outlook.com";
  const location = texts.location || "São Paulo, Brasil · Remoto ou Híbrido";

  return (
    <section
      id="contact-me"
      className="text-white py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto flex flex-col justify-center gap-12 [&>*]:z-10"
    >
      <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
        <span className="text-xs md:text-sm uppercase tracking-widest text-accent font-bold">
          {texts.subtitle || "Conexão & Oportunidades"}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold">{texts.title}</h2>
        {texts.description && (
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            {texts.description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-4">
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#121217]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>
                {texts.statusBadge || "Disponível para novos projetos e oportunidades"}
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Vamos construir algo incrível juntos?
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Entre em contato para discutirmos novos projetos, posições em engenharia de software full-stack, integrações de IA ou consultoria técnica.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${directEmail}`}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-light-blue/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-light-blue/15 border border-light-blue/30 text-light-blue flex items-center justify-center group-hover:scale-105 transition-transform">
                    <TbMail className="text-xl" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wider block">
                      E-mail direto
                    </span>
                    <span className="text-sm font-medium text-white group-hover:text-accent transition-colors">
                      {directEmail}
                    </span>
                  </div>
                </div>
                <TbExternalLink className="text-white/40 group-hover:text-white transition-colors text-sm mr-1" />
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center">
                  <TbMapPin className="text-xl" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wider block">
                    Localização
                  </span>
                  <span className="text-sm font-medium text-white">
                    {location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/60 block">
              Redes & Canais
            </span>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/in/anderson-rodrigues-24003823b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-[#0A66C2] hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/15 hover:shadow-[0_0_20px_rgba(10,102,194,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <FaLinkedinIn className="text-xl" />
              </Link>

              <Link
                href="https://github.com/eusouanderson"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-white/90 hover:text-white hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <TbBrandGithubFilled className="text-xl" />
              </Link>

              <Link
                href="https://wa.me/5511983523869"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-emerald-400 hover:border-emerald-400/60 hover:bg-emerald-500/15 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#121217]/85 backdrop-blur-xl border border-white/10 hover:border-light-blue/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-colors duration-500 flex flex-col justify-center">
          <div className="mb-6 space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Envie uma mensagem direta
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Preencha os campos abaixo e entrarei em contato brevemente.
            </p>
          </div>
          <ContactForm texts={texts} />
        </div>
      </div>
    </section>
  );
};
