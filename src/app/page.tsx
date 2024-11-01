// src/app/page.tsx
"use client"; // Adicione esta linha para tornar o componente um Componente de Cliente

import { useState } from "react";
import { MainPage } from "@/components/main-page";
import Planos from "@/components/Planos"; // Corrija a importação aqui
import { texts } from "@/config/constants";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("main");

  const renderPage = () => {
    switch (currentPage) {
      case "planos":
        return <Planos />;
      case "main":
      default:
        return <MainPage texts={texts["pt-br"]} />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage("main")}>Home</button>
        <button onClick={() => setCurrentPage("planos")}>Planos</button>
      </nav>
      {renderPage()}
    </div>
  );
}
