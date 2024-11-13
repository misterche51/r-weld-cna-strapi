import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { Metrika } from "./layout/metrika/metrika";

const myFont = localFont({
  src: "../../public/font/NT_Somic-VF.ttf",
});

export const metadata: Metadata = {
  title: "R-WELD",
  description: "Российский производитель горелок для MIG и TIG сварки",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={myFont.className}>
      <body>
      <Suspense>
        <Metrika />
      </Suspense>
      {children}
      </body>
    </html>
  );
}
