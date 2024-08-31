"use client";

import { useState } from "react";
import { ErrorMessage, Input, InputLabel } from "../ui/input";
import { Button } from "../ui/button";
import { ContactTexts } from "@/types/texts";
import { useContactForm } from "./hooks";
import { CheckIcon } from "../icons/check";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  texts: ContactTexts;
}

export const ContactForm = ({ texts }: Props) => {
  const { handleSend, isPending, result } = useContactForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Aqui você pode adicionar lógica para enviar o formulário, como chamar handleSend ou enviar por outra API.
  };

  if (result?.isSuccess || isSubmitted) {
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
    <div className="flex justify-center items-center w-full">
      <form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/eusouanderson459@gmail.com"
        method="POST"
        className="flex flex-col gap-4 mt-8 p-6 rounded-lg shadow-lg max-w-md w-full"
      >
        <div className="space-y-2">
          <InputLabel htmlFor="name">{texts.nameLabel}</InputLabel>
          <Input
            placeholder={texts.namePlaceholder}
            name="name"
            id="name"
            className="w-full"
            required
            error={(result?.errors?.fieldErrors.name?.length || 0) > 0}
          />
          <ErrorMessage>{result?.errors?.fieldErrors.name?.[0]}</ErrorMessage>
        </div>
        <div className="space-y-2">
          <InputLabel htmlFor="email">{texts.emailLabel}</InputLabel>
          <Input
            placeholder={texts.emailPlaceholder}
            type="email"
            name="email"
            id="email"
            className="w-full text-black"
            required
            error={(result?.errors?.fieldErrors.email?.length || 0) > 0}
          />
          <ErrorMessage>{result?.errors?.fieldErrors.email?.[0]}</ErrorMessage>
        </div>
        <div className="space-y-2">
          <InputLabel htmlFor="message">{texts.messageLabel}</InputLabel>
          <textarea
            className={cn(
              "color text-black shadow-lg border border-black-blue h-40 py-2 text-sm px-4 rounded-lg w-full",
              (result?.errors?.fieldErrors.message?.length || 0) > 0 &&
                "border-error"
            )}
            placeholder={texts.messagePlaceholder}
            name="message"
            id="message"
            required
          />
          <ErrorMessage>{result?.errors?.fieldErrors.message?.[0]}</ErrorMessage>
        </div>
        <Button
          className="w-full md:w-fit self-center border-light-blue"
          type="submit"
          disabled={isPending}
        >
          <span>{texts.sendButton}</span>
        </Button>
        <input type="hidden" name="_next" value="https://www.eusouanderson.me" />
        <input type="hidden" name="_captcha" value="false" />
      </form>
    </div>
  );
};
