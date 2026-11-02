import { MainPage } from "@/components/main-page";

export async function generateStaticParams() {
  const supportedLanguages = ["en", "pt-br"];

  return supportedLanguages.map((language) => ({
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
  return <MainPage initialLanguage={language} />;
}
