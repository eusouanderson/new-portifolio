import { useState } from "react";
import { toast } from "react-toastify";
import { ContactFormData } from "./interfaces";
import { sendContactEmail } from "./services";

export const useContactForm = () => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      return;
    }

    setIsPending(true);

    try {
      const payload: ContactFormData = { name, email, message };
      const success = await sendContactEmail(payload);

      if (success) {
        setIsSuccess(true);
        form.reset();
      } else {
        toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.");
      }
    } catch {
      toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.");
    } finally {
      setIsPending(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
  };

  return {
    isPending,
    isSuccess,
    handleSubmit,
    resetForm,
  };
};
