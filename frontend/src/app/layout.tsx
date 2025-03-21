import type { Metadata } from "next";
import {Montserrat } from "next/font/google";
import "./globals.css";



export const metadata: Metadata = {
  title: "Portifolio",
  description: "Portifolio Ismael Strey pereira",
};
const font = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${font.className} antialiased bg-zinc-900`}
      >
        {children}
      </body>
    </html>
  );
}
