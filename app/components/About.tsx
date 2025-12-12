'use client';

import React from 'react';
import { SectionId } from '../types';
import { Leaf, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-brand-green" />,
      title: "Productos Orgánicos",
      desc: "Aceites esenciales y cremas 100% naturales, sin químicos que dañen tu piel."
    },
    {
      icon: <Award className="w-8 h-8 text-brand-green" />,
      title: "Profesionales Certificados",
      desc: "Terapeutas certificados en Liberación Muscular y técnicas de relajación profunda."
    },
    {
      icon: <Heart className="w-8 h-8 text-brand-green" />,
      title: "Ambiente y Comodidad",
      desc: "Un espacio diseñado para tu paz mental, con la máxima privacidad y confort."
    }
  ];

  return (
    <section id={SectionId.ABOUT} className="py-20 bg-brand-green text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 blur-3xl rounded-full transform translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Storytelling Content */}
          <div className="lg:w-1/2">
            <span className="inline-block text-brand-gold font-bold tracking-widest uppercase mb-2 text-sm">
              Nuestra Esencia
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-lightGold mb-8 leading-tight">
              Manos expertas, <br />corazón compasivo.
            </h2>

            <div className="prose prose-lg text-gray-200 mb-8">
              <p className="mb-4">
                Detrás de <span className="text-brand-gold font-semibold">Alma Libre</span> no hay una franquicia impersonal, sino una vocación de vida. Entiendo que cada tensión en tu espalda cuenta una historia de estrés no liberado.
              </p>
              <p>
                Mi formación certificada en <strong>Liberación Muscular Profunda</strong> y terapias orientales no es solo técnica; es la promesa de que estás en manos seguras. En <span className="text-brand-lightGold">La Josefina</span>, he construido el espacio que yo misma deseaba encontrar: privado, profesional y profundamente reparador.
              </p>
            </div>

            {/* Certifications Badge */}
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 max-w-md backdrop-blur-sm">
              <Award className="w-10 h-10 text-brand-gold shrink-0" />
              <div>
                <p className="font-serif text-lg font-bold text-white leading-none mb-1">Certificación Profesional</p>
                <p className="text-sm text-gray-400">Avalada en técnicas terapéuticas avanzadas.</p>
              </div>
            </div>
          </div>

          {/* Visual Trust Signal */}
          <div className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-brand-gold/20 transform translate-x-4 translate-y-4 rounded-2xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white">
              <img
                src="/images/certificado-alma-libre-spa.png"
                alt="Certificado Profesional de Terapeuta - Alma Libre Spa Carcelén"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div>
                  <p className="text-brand-gold font-bold text-lg mb-1">Tu bienestar es serio</p>
                  <p className="text-white text-sm">Confía tu salud solo a profesionales capacitados.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;