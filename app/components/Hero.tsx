'use client';

import React from 'react';
import { SectionId } from '../types';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    document.getElementById(SectionId.SERVICES)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HOME} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/liberacion-muscular-profunda.jpg"
          alt="Liberación Muscular Profunda y Masajes en Carcelén - Alma Libre Spa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/80 to-brand-green/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-start text-left">
        <div className="max-w-2xl animate-fadeUp">
          <span className="inline-block py-1 px-3 border border-brand-lightGold text-brand-lightGold rounded-full mb-4 text-sm tracking-widest uppercase">
            Quito Norte · Centro · Sur
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Libera el dolor, recupera tu movilidad
          </h1>
          <p className="font-sans text-xl md:text-2xl text-brand-lightGold mb-8 max-w-2xl font-semibold">
            Terapia de masajes especializados, reflexología y liberación miofascial profunda en Quito
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToServices}
              className="bg-brand-gold text-brand-green font-bold px-8 py-4 rounded-full text-lg hover:bg-white transition-colors shadow-lg"
            >
              Ver Tratamientos
            </button>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-brand-green transition-colors flex items-center justify-center gap-2"
            >
              Cita por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;