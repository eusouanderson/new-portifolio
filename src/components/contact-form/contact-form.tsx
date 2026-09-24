"use client";

import { ContactTexts } from "@/types/texts";
import { AnimatePresence, motion } from "framer-motion";
import {
    TbCheck,
    TbLoader2,
    TbMail,
    TbMessage,
    TbSend,
    TbUser,
} from "react-icons/tb";
import { useContactForm } from "./hooks";

interface Props {
  texts: ContactTexts;
}

export const ContactForm = ({ texts }: Props) => {
  const { isPending, isSuccess, handleSubmit, resetForm } = useContactForm();

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center text-center p-8 space-y-5 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.35)]">
              <TbCheck className="text-3xl" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {texts.successTitle}
              </h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                {texts.successMessage}
              </p>
            </div>

            <button
              type="button"
              onClick={resetForm}
              className="mt-4 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 transition-all text-xs font-semibold"
            >
              {texts.sendAnotherButton || "Enviar outra mensagem"}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full"
          >
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80"
              >
                <TbUser className="text-light-blue text-sm" />
                <span>{texts.nameLabel}</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={isPending}
                placeholder={texts.namePlaceholder}
                className="w-full bg-white/5 border border-white/15 focus:border-light-blue focus:ring-1 focus:ring-light-blue/50 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 shadow-inner backdrop-blur-md disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80"
              >
                <TbMail className="text-light-blue text-sm" />
                <span>{texts.emailLabel}</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={isPending}
                placeholder={texts.emailPlaceholder}
                className="w-full bg-white/5 border border-white/15 focus:border-light-blue focus:ring-1 focus:ring-light-blue/50 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 shadow-inner backdrop-blur-md disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80"
              >
                <TbMessage className="text-light-blue text-sm" />
                <span>{texts.messageLabel}</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                disabled={isPending}
                placeholder={texts.messagePlaceholder}
                rows={4}
                className="w-full bg-white/5 border border-white/15 focus:border-light-blue focus:ring-1 focus:ring-light-blue/50 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 resize-none shadow-inner backdrop-blur-md disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-primary to-light-blue hover:from-primary/90 hover:to-light-blue/90 shadow-[0_0_25px_rgba(110,0,255,0.4)] hover:shadow-[0_0_35px_rgba(127,0,255,0.6)] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {isPending ? (
                <>
                  <TbLoader2 className="animate-spin text-lg" />
                  <span>{texts.sendingButton || "Enviando..."}</span>
                </>
              ) : (
                <>
                  <TbSend className="text-lg" />
                  <span>{texts.sendButton}</span>
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};