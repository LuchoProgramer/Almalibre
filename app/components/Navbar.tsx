'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { SectionId } from '../types';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const linkClass = `cursor-pointer font-sans text-brand-green hover:text-brand-gold transition-colors font-medium ${
    scrolled ? 'text-brand-green' : 'text-brand-green md:text-white md:drop-shadow-md'
  }`;

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollTo(SectionId.HOME)} 
          className="flex items-center gap-2 cursor-pointer"
        >
          <Image 
            src="https://res.cloudinary.com/dltfsttr7/image/upload/v1764277189/Almallibre_aoneqf.jpg"
            alt="Alma Libre Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className={`font-serif text-2xl font-bold ${scrolled ? 'text-brand-green' : 'text-brand-green md:text-white'}`}>
            {BUSINESS_INFO.name}
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <button onClick={() => scrollTo(SectionId.HOME)} className={linkClass}>Inicio</button>
          <button onClick={() => scrollTo(SectionId.ABOUT)} className={linkClass}>Nosotros</button>
          <button onClick={() => scrollTo(SectionId.SERVICES)} className={linkClass}>Servicios</button>
          <button onClick={() => scrollTo(SectionId.CONTACT)} className={linkClass}>Contacto</button>
          <button 
            onClick={() => scrollTo(SectionId.CONTACT)}
            className="bg-brand-gold hover:bg-brand-darkGold text-white px-6 py-2 rounded-full font-bold transition-transform transform hover:scale-105 shadow-lg"
          >
            Reservar
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-green">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 animate-fadeIn">
          <button onClick={() => scrollTo(SectionId.HOME)} className="text-brand-green font-medium text-lg">Inicio</button>
          <button onClick={() => scrollTo(SectionId.ABOUT)} className="text-brand-green font-medium text-lg">Nosotros</button>
          <button onClick={() => scrollTo(SectionId.SERVICES)} className="text-brand-green font-medium text-lg">Servicios</button>
          <button onClick={() => scrollTo(SectionId.CONTACT)} className="text-brand-green font-medium text-lg">Contacto</button>
          <button 
            onClick={() => scrollTo(SectionId.CONTACT)}
            className="bg-brand-gold text-white px-8 py-3 rounded-full font-bold"
          >
            Reservar Ahora
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;