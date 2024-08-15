"use client";

import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <div className={inter.className}>
        {children}
      </div>
    </SessionProvider>
  );
}
