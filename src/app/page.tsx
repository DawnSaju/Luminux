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
