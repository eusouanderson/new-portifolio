import { ToastSetup } from "@/lib/toast";
import { TooltipSetup } from "@/lib/tooltip";
import type { Metadata } from "next";
import { sansMono } from "./fonts";
import "./globals.css";

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
    <html lang="pt-br" suppressHydrationWarning>
      <body className={sansMono.className} suppressHydrationWarning>
        {children}
        <TooltipSetup />
        <ToastSetup />
      </body>
    </html>
  );
}
