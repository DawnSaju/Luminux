"use client";

import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en" className="dark">
        <head>
          <title>Luminux</title>
          <meta name="description" content="A comprehensive health support chatbot providing reliable information and guidance for a healthy life." />
          <meta property="og:title" content="Luminux" />
          <meta property="og:description" content="A comprehensive health support chatbot providing reliable information and guidance for a healthy life." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://luminux.live" />
          <meta property="og:image" content="https://github.com/DawnSaju/Luminux/blob/master/public/favicon.png" />
          <meta property="og:site_name" content="Luminux" />

          <meta name="keywords" content="health, chatbot, AI, support, guidance, healthy life" />
          <meta name="author" content="Luminux Team" />
        </head>
        <body className={inter.className}>
          {children}</body>
      </html>
    </SessionProvider>
  );
}
