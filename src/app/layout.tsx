import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Dale Blanco - Portfolio",
  description: "How can I serve you?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <body className="lg:block sm:hidden lg:bg-[url('/background.jpg')] bg-no-repeat bg-fixed bg-center [background-size:100%_auto] bg-black lg:px-[6%] px-[1%]">
        {children}
      </body>
    </html>
  );
}
