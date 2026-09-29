"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const TechCircuit = ({ children, className }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  const feederScaleY = useTransform(smoothProgress, [0, 0.2], [0, 1]);
  const topArmsScaleX = useTransform(smoothProgress, [0.15, 0.4], [0, 1]);
  const flanksScaleY = useTransform(smoothProgress, [0.35, 0.75], [0, 1]);
  const bottomArmsScaleX = useTransform(smoothProgress, [0.7, 1], [0, 1]);
  const bottomNodeScale = useTransform(smoothProgress, [0.85, 1], [0, 1]);

  return (
    <div ref={containerRef} className={cn("relative w-full py-16", className)}>
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-4 pointer-events-none h-16 overflow-hidden">
        <div className="absolute inset-x-0 mx-auto w-[2px] h-full bg-gradient-to-b from-transparent via-white/10 to-white/20" />
        <motion.div
          style={{ scaleY: feederScaleY, transformOrigin: "top" }}
          className="absolute inset-x-0 mx-auto w-[2px] h-full bg-gradient-to-b from-accent to-light-blue shadow-[0_0_12px_#00d8ff]"
        />
        <motion.div
          animate={{ top: ["-30%", "130%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 -translate-x-1/2 w-1.5 h-8 bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_10px_#00d8ff]"
        />
      </div>

      <div className="relative max-w-5xl mx-auto rounded-3xl p-6 sm:p-10 md:p-14">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-[#121217] border-2 border-accent shadow-[0_0_15px_#00d8ff]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
          </div>
        </div>

        <div className="absolute top-0 left-0 right-1/2 h-[2px] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-white/10" />
          <motion.div
            style={{ scaleX: topArmsScaleX, transformOrigin: "right" }}
            className="absolute inset-0 bg-gradient-to-l from-light-blue to-accent shadow-[0_0_10px_#00d8ff]"
          />
          <motion.div
            animate={{ left: ["100%", "-20%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_10px_#00d8ff]"
          />
        </div>

        <div className="absolute top-0 left-1/2 right-0 h-[2px] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-white/10" />
          <motion.div
            style={{ scaleX: topArmsScaleX, transformOrigin: "left" }}
            className="absolute inset-0 bg-gradient-to-r from-light-blue to-accent shadow-[0_0_10px_#00d8ff]"
          />
          <motion.div
            animate={{ left: ["-20%", "100%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_10px_#00d8ff]"
          />
        </div>

        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="w-3 h-3 rounded-full bg-[#121217] border border-accent shadow-[0_0_10px_#00d8ff] flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-accent" />
          </div>
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-accent/80" />
        </div>

        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="w-3 h-3 rounded-full bg-[#121217] border border-accent shadow-[0_0_10px_#00d8ff] flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-accent" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-accent/80" />
        </div>

        <div className="absolute top-0 bottom-0 left-0 w-[2px] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <motion.div
            style={{ scaleY: flanksScaleY, transformOrigin: "top" }}
            className="absolute inset-0 bg-gradient-to-b from-accent via-light-blue to-purple-500 shadow-[0_0_12px_#00d8ff,0_0_24px_#6e00ff]"
          />
          <motion.div
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 w-1.5 h-20 bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_15px_#00d8ff]"
          />
        </div>

        <div className="absolute top-0 bottom-0 right-0 w-[2px] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <motion.div
            style={{ scaleY: flanksScaleY, transformOrigin: "top" }}
            className="absolute inset-0 bg-gradient-to-b from-accent via-light-blue to-purple-500 shadow-[0_0_12px_#00d8ff,0_0_24px_#6e00ff]"
          />
          <motion.div
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 w-1.5 h-20 bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_15px_#00d8ff]"
          />
        </div>

        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-20 pointer-events-none">
          <div className="w-3 h-3 rounded-full bg-[#121217] border border-purple-500 shadow-[0_0_10px_#7f00ff] flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-purple-400" />
          </div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-purple-500/80" />
        </div>

        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-20 pointer-events-none">
          <div className="w-3 h-3 rounded-full bg-[#121217] border border-purple-500 shadow-[0_0_10px_#7f00ff] flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-purple-400" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-purple-500/80" />
        </div>

        <div className="absolute bottom-0 left-0 right-1/2 h-[2px] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-white/10" />
          <motion.div
            style={{ scaleX: bottomArmsScaleX, transformOrigin: "left" }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-light-blue shadow-[0_0_10px_#7f00ff]"
          />
          <motion.div
            animate={{ left: ["-20%", "100%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_10px_#7f00ff]"
          />
        </div>

        <div className="absolute bottom-0 left-1/2 right-0 h-[2px] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-white/10" />
          <motion.div
            style={{ scaleX: bottomArmsScaleX, transformOrigin: "right" }}
            className="absolute inset-0 bg-gradient-to-l from-purple-500 to-light-blue shadow-[0_0_10px_#7f00ff]"
          />
          <motion.div
            animate={{ left: ["100%", "-20%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_10px_#7f00ff]"
          />
        </div>

        <motion.div
          style={{ scale: bottomNodeScale }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 pointer-events-none"
        >
          <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-[#121217] border-2 border-purple-500 shadow-[0_0_15px_#7f00ff]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-50" />
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
          </div>
        </motion.div>

        <div className="relative z-10">{children}</div>
      </div>

      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-4 pointer-events-none h-16 overflow-hidden">
        <div className="absolute inset-x-0 mx-auto w-[2px] h-full bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
        <motion.div
          style={{ scaleY: bottomNodeScale, transformOrigin: "top" }}
          className="absolute inset-x-0 mx-auto w-[2px] h-full bg-gradient-to-b from-purple-500 to-transparent shadow-[0_0_12px_#7f00ff]"
        />
      </div>
    </div>
  );
};
