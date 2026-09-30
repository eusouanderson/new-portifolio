"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const ContactCircuit = ({ children, className }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.15,
  });

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full rounded-3xl p-4 sm:p-6 md:p-8", className)}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isInView ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
      >
        <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-[#121217] border-2 border-accent shadow-[0_0_15px_#00d8ff,0_0_25px_#6e00ff]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
          <span className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 right-1/2 h-[2px] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-white/10" />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          style={{ transformOrigin: "right" }}
          className="absolute inset-0 bg-gradient-to-r from-light-blue via-accent to-light-blue shadow-[0_0_10px_#00d8ff,0_0_20px_#6e00ff]"
        />
        <motion.div
          animate={{ left: ["100%", "-20%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: isInView ? 1 : 0 }}
          className="absolute top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_#00d8ff]"
        />
      </div>

      <div className="absolute top-0 left-1/2 right-0 h-[2px] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-white/10" />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          style={{ transformOrigin: "left" }}
          className="absolute inset-0 bg-gradient-to-r from-light-blue via-accent to-light-blue shadow-[0_0_10px_#00d8ff,0_0_20px_#6e00ff]"
        />
        <motion.div
          animate={{ left: ["-20%", "100%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: isInView ? 1 : 0 }}
          className="absolute top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_#00d8ff]"
        />
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
      >
        <div className="w-3 h-3 rounded-full bg-[#121217] border border-accent shadow-[0_0_10px_#00d8ff,0_0_15px_#6e00ff] flex items-center justify-center">
          <span className="w-1 h-1 rounded-full bg-accent" />
        </div>
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-accent/80" />
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
      >
        <div className="w-3 h-3 rounded-full bg-[#121217] border border-accent shadow-[0_0_10px_#00d8ff,0_0_15px_#6e00ff] flex items-center justify-center">
          <span className="w-1 h-1 rounded-full bg-accent" />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-accent/80" />
      </motion.div>

      <div className="absolute top-0 bottom-0 left-0 w-[2px] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          style={{ transformOrigin: "top" }}
          className="absolute inset-0 bg-gradient-to-b from-accent via-light-blue to-purple-500 shadow-[0_0_12px_#00d8ff,0_0_24px_#6e00ff]"
        />
        <motion.div
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: isInView ? 1 : 0 }}
          className="absolute left-1/2 -translate-x-1/2 w-1.5 h-24 bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_15px_#00d8ff]"
        />
      </div>

      <div className="absolute top-0 bottom-0 right-0 w-[2px] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          style={{ transformOrigin: "top" }}
          className="absolute inset-0 bg-gradient-to-b from-accent via-light-blue to-purple-500 shadow-[0_0_12px_#00d8ff,0_0_24px_#6e00ff]"
        />
        <motion.div
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: isInView ? 1 : 0 }}
          className="absolute left-1/2 -translate-x-1/2 w-1.5 h-24 bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_15px_#00d8ff]"
        />
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 1.2 }}
        className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-20 pointer-events-none"
      >
        <div className="w-3 h-3 rounded-full bg-[#121217] border border-light-blue shadow-[0_0_10px_#00d8ff,0_0_15px_#6e00ff] flex items-center justify-center">
          <span className="w-1 h-1 rounded-full bg-accent" />
        </div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-light-blue/80" />
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 1.2 }}
        className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-20 pointer-events-none"
      >
        <div className="w-3 h-3 rounded-full bg-[#121217] border border-light-blue shadow-[0_0_10px_#00d8ff,0_0_15px_#6e00ff] flex items-center justify-center">
          <span className="w-1 h-1 rounded-full bg-accent" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-light-blue/80" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-1/2 h-[2px] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-white/10" />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
          style={{ transformOrigin: "left" }}
          className="absolute inset-0 bg-gradient-to-r from-light-blue via-accent to-light-blue shadow-[0_0_10px_#00d8ff,0_0_20px_#6e00ff]"
        />
        <motion.div
          animate={{ left: ["-20%", "100%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: isInView ? 1 : 0 }}
          className="absolute top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_#00d8ff]"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 right-0 h-[2px] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-white/10" />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
          style={{ transformOrigin: "right" }}
          className="absolute inset-0 bg-gradient-to-r from-light-blue via-accent to-light-blue shadow-[0_0_10px_#00d8ff,0_0_20px_#6e00ff]"
        />
        <motion.div
          animate={{ left: ["100%", "-20%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: isInView ? 1 : 0 }}
          className="absolute top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_#00d8ff]"
        />
      </div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 18, delay: 1.7 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 pointer-events-none"
      >
        <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-[#121217] border-2 border-accent shadow-[0_0_15px_#00d8ff,0_0_25px_#6e00ff]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
          <span className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
        </div>
      </motion.div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};
