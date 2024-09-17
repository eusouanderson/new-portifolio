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
      className="fixed bottom-36 right-4 bg-green-500 p-3 rounded-full shadow-lg text-white hover:bg-green-600 transition-colors"
      aria-label="Contact us on WhatsApp"
    >
        
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
