import React from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Vision } from "./components/Vision";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Hero />
      <About />
      <Vision />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
