"use client";

import { cn } from "@/lib/utils";
import { ContactTexts } from "@/types/texts";
import { motion } from "framer-motion";
import { CheckIcon } from "../icons/check";
import { Button } from "../ui/button";
import { Input, InputLabel } from "../ui/input";
import { useContactForm } from "./hooks";

interface Props {
  texts: ContactTexts;
}

export const ContactForm = ({ texts }: Props) => {
  const { isPending, isSuccess, handleSubmit } = useContactForm();

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col justify-center items-center gap-4 mt-8"
      >
        <div className="w-24 h-24">
          <CheckIcon />
        </div>
        <h2 className="text-2xl md:text-3xl">{texts.successTitle}</h2>
        <p className="text-gray text-center">
          {texts.successMessage || "Mensagem enviada com sucesso!"}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full px-4 sm:px-8 lg:px-16">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 mt-8 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg max-w-lg w-full sm:max-w-xl lg:max-w-2xl"
      >
        <div className="space-y-2">
          <InputLabel htmlFor="name" className="text-sm sm:text-base lg:text-lg">
            {texts.nameLabel}
          </InputLabel>
          <Input
            placeholder={texts.namePlaceholder}
            name="name"
            id="name"
            className="w-full text-sm sm:text-base lg:text-lg"
            required
            disabled={isPending}
          />
        </div>

        <div className="space-y-2">
          <InputLabel htmlFor="email" className="text-sm sm:text-base lg:text-lg">
            {texts.emailLabel}
          </InputLabel>
          <Input
            placeholder={texts.emailPlaceholder}
            type="email"
            name="email"
            id="email"
            className="w-full text-sm sm:text-base lg:text-lg text-black"
            required
            disabled={isPending}
          />
        </div>

        <div className="space-y-2">
          <InputLabel htmlFor="message" className="text-sm sm:text-base lg:text-lg">
            {texts.messageLabel}
          </InputLabel>
          <textarea
            className={cn(
              "color text-black shadow-lg border border-black-blue h-32 sm:h-40 py-2 text-sm sm:text-base lg:text-lg px-4 rounded-lg w-full"
            )}
            placeholder={texts.messagePlaceholder}
            name="message"
            id="message"
            required
            disabled={isPending}
          />
        </div>

        <Button
          className="w-full md:w-fit self-center border-light-blue text-sm sm:text-base lg:text-lg"
          type="submit"
          disabled={isPending}
        >
          <span>{texts.sendButton}</span>
        </Button>
      </form>
    </div>
  );
};