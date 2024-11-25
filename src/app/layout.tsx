import type { Metadata } from "next";
import { Inter, Mulish, Frank_Ruhl_Libre } from 'next/font/google';

import "./globals.css";
import Header from "@/components/Header/Header";

// Usando a fonte Mulish
const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'], 
  variable: '--font-mulish'
});

// Usando a fonte Frank Ruhl Libre
const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-frank-ruhl-libre'
  
});

export const metadata: Metadata = {
  title: "Agência Ifes",
  description: "comunicação científica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} ${frankRuhlLibre.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
