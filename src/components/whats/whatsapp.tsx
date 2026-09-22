"use client";

import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsAppButton = ({ phoneNumber, message }: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-2 p-2 rounded-full bg-[#121217]/90 border border-white/15 hover:border-emerald-400/70 shadow-xl hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] backdrop-blur-xl transition-all duration-300"
      aria-label="Contato via WhatsApp"
    >
      <span className="relative flex h-2.5 w-2.5 ml-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </span>

      <span className="text-xs font-semibold text-gray-300 group-hover:text-white max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap pl-0 group-hover:pl-1">
        WhatsApp
      </span>

      <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
        <FaWhatsapp className="text-lg" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
