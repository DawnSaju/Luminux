"use client"

import { Inter } from "next/font/google";
import { BrowserRouter } from 'react-router-dom'
import { SessionProvider } from "next-auth/react"

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <BrowserRouter>
      <SessionProvider>
      <html lang="en" className="dark">
        <body className={inter.className}>
          {children}</body>
      </html>
      </SessionProvider>
    </BrowserRouter>
  );
}
