import { ContactTexts } from "@/types/texts";
import { ContactForm } from "../contact-form/contact-form";

interface Props {
  texts: ContactTexts;
}

export const Contact = ({ texts }: Props) => {
  return (
    <section
      id="contact-me"
      className="grid gap-auto md:gap-auto py-auto px-auto md:px-auto text-white h-auto md:h-dvh justify-center items-center max-lg:grid-cols-1 [&>*]:z-10"
    >
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="hidden md:flex flex-col items-center mb-auto">
          <div className="w-5 h-auto rounded-full bg-black-blue mb-auto" />
          <div className="w-1 h-20 sm:h-64 violet-gradient" />
        </div>
        <div className="w-full max-w-lg">
          <h2 className="text-2xl md:text-4xl font-bold text-center">{texts.title}</h2>
          <ContactForm texts={texts} />
        </div>
      </div>
    </section>
  );
};
