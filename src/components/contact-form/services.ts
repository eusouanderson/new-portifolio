import { ContactFormData, FormSubmitResponse } from "./interfaces";

export const sendContactEmail = async (data: ContactFormData): Promise<boolean> => {
  const response = await fetch("https://formsubmit.co/ajax/eusouanderson459@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    return false;
  }

  const result: FormSubmitResponse = await response.json();
  return result.success === "true" || response.status === 200;
};

