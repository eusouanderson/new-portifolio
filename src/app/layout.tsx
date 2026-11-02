import { publicAssetPath } from "@/lib/utils";
import { ToastSetup } from "@/lib/toast";
import { TooltipSetup } from "@/lib/tooltip";
import type { Metadata } from "next";
import { sansMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfólio | Anderson",
  description: "Portfólio do Anderson",
  icons: {
    icon: publicAssetPath("/favicon.ico"),
    shortcut: publicAssetPath("/favicon.ico"),
    apple: publicAssetPath("/favicon.ico"),
  },
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
