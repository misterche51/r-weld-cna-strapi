import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";

const myFont = localFont({
  src: "../../public/font/NT_Somic-VF.ttf",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={myFont.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
