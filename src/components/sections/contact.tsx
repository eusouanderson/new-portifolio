import { ContactTexts } from "@/types/texts";
import { ContactForm } from "../contact-form/contact-form";
import WhatsAppButton from "../whats/whatsapp";

interface Props {
  texts: ContactTexts;
}

export const Contact = ({ texts }: Props) => {
  return (
    <section
      id="contact-me"
      className="grid grid-cols-1 max-lg:grid-cols-2  md:py-32 px-4 md:px-20 text-white h-dvh justify-center [&>*]:z-10"
    >
      <div>
        <div className="flex ">
          <div className="flex flex-col items-center max-md:hidden">
            <div className="w-5 h-5 rounded-full bg-black-blue" />
            <div className="w-1 sm:h-64 h-20 violet-gradient" />
          </div>
          <div className="ml-4 w-full">
            <h2 className="text-3xl md:text-5xl font-bold text-center">{texts.title}</h2>
            <ContactForm texts={texts} />
          </div>
        </div>
      </div>
        <div className="max-md:hidden max-lg:w-80 max-lg:h-80">
        <WhatsAppButton
          phoneNumber="5511983523869" 
          message="Olá! Gostaria de saber mais sobre seus projetos."
        />
      </div>
    </section>
  );
};
