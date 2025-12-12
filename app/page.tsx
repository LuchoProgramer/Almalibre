import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from './constants';

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white selection:bg-brand-gold selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      {/* Sticky WhatsApp Button */}
      <a
        href={BUSINESS_INFO.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 z-50 flex items-center gap-2 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
          ¡Agenda tu cita!
        </span>
      </a>
    </div>
  );
}
