export const Logo = () => {
  return (
    <span className="text-white text-4xl font-bold flex items-center space-x-2">
      <span className="relative group animate-spin-slow">
        <span className="text-light-blue text-5xl">{"<"}</span>
        <span className="absolute inset-0 border-t-2 border-light-blue transform -translate-y-1 group-hover:scale-x-110 transition-transform duration-300 ease-in-out"></span>
      </span>
      <span className="text-primary font-extrabold text-shadow-md animate-pulse">Adn</span>
      <span className="relative group animate-spin-slow">
        <span className="text-light-blue text-5xl">{" />"}</span>
        <span className="absolute inset-0 border-t-2 border-light-blue transform -translate-y-1 group-hover:scale-x-110 transition-transform duration-300 ease-in-out"></span>
      </span>
    </span>
  );
};
