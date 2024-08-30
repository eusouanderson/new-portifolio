import { MainPage } from "@/components/main-page";
import { texts } from "@/config/constants";

// Função para gerar os parâmetros estáticos
export async function generateStaticParams() {
  // Defina os idiomas suportados
  const supportedLanguages = ["en", "es", "pt-br"]; 

  // Retorna uma lista de objetos com os parâmetros
  return supportedLanguages.map(language => ({
    language,
  }));
}

export default function Home({
  params: { language },
}: {
  params: {
    language: string;
  };
}) {
  const text = texts[language] || texts["pt-br"];

  return <MainPage texts={text} />;
}
