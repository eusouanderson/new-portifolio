import Image from 'next/image';

export const Logo = () => {
  return (
    <span className="text-white text-4xl font-bold flex items-center space-x-2">
      <Image
        src="/favicon.ico" // Caminho da imagem
        alt="Logo"
        className="w-12 h-12 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
        width={48} // Largura da imagem
        height={48} // Altura da imagem
      />
    </span>
  );
};
