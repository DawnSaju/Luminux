"use client"

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <html>
      <head>
        <title>Luminux</title>
        <meta name="description" content="A comprehensive health support chatbot providing reliable information and guidance for a healthy life." />
        <meta name="keywords" content="healthcare, AI, chatbot, luminux, Luminux, dawnsaju, headstarter, sivaibala, abhishekshresta" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Luminux" />
        <meta property="og:description" content="A comprehensive health support chatbot providing reliable information and guidance for a healthy life." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luminux.live" />
        <meta property="og:image" content="https://github.com/DawnSaju/Luminux/blob/master/public/favicon.png" />
        <meta property="og:site_name" content="Luminux" />

        <meta name="keywords" content="health, chatbot, AI, support, guidance, healthy life" />
        <meta name="author" content="Luminux Team" />
      </head>
      <body>
        <main>
          <Navbar />
          <Hero />
          <Features />
          <Process />
          <Team />
          <Footer />
        </main>
      </body>
    </html>
  );
}
