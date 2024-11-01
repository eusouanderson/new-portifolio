// src/components/Planos.tsx

import { useEffect } from "react";
import { useRouter } from "next/router";

export const Planos = () => {
  const router = useRouter();

  useEffect(() => {
    // Redireciona usando o Router do Next.js
    router.push("https://plano-de-ensino-six.vercel.app/");
  }, [router]);

  return null; // Não renderiza nada, pois redireciona imediatamente
};
