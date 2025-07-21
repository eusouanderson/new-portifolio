import type { Metadata } from "next";
import "./globals.css";
import { sansMono } from "./fonts";
import { TooltipSetup } from "@/lib/tooltip";
import { ToastSetup } from "@/lib/toast";

export const metadata: Metadata = {
  title: "Portfólio | Anderson",
  description: "Portfólio d0 Anderson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={sansMono.className}>
        {children}
        <TooltipSetup />
        <ToastSetup />
      </body>
    </html>
  );
}
