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
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Team />
      <Footer />
      
    </main>
  );
}
