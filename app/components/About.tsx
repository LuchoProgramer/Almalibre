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
      title: "Técnica Especializada",
      desc: "Expertas en liberación miofascial para tratar el dolor desde la raíz, no solo el síntoma."
    },
    {
      icon: <Heart className="w-8 h-8 text-brand-green" />,
      title: "Atención Personalizada",
      desc: "Cada cuerpo es único. Adaptamos la presión y la técnica a tus necesidades."
    }
  ];

  return (
    <section id={SectionId.ABOUT} className="py-20 bg-brand-green text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h2 className="font-serif text-4xl font-bold text-brand-lightGold mb-6">
              Más que un masaje, <br/>un ritual de sanación.
            </h2>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              En <span className="font-bold text-brand-gold">Alma Libre</span>, entendemos que el estrés de la vida moderna en Quito se acumula en el cuerpo. 
              Ubicados en la tranquilidad de La Josefina, hemos creado un refugio donde el tiempo se detiene.
            </p>
            <p className="text-gray-200 text-lg mb-8 leading-relaxed">
              Nuestra fundadora combina técnicas orientales con la ciencia moderna de la liberación de fascias para ofrecer resultados reales a oficinistas, deportistas y cualquiera que busque paz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center md:text-left">
                <span className="block text-4xl font-serif font-bold text-brand-gold">500+</span>
                <span className="text-sm text-gray-300">Clientes Felices</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-4xl font-serif font-bold text-brand-gold">100%</span>
                <span className="text-sm text-gray-300">Orgánico</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex items-start gap-4 hover:bg-white/20 transition-colors">
                <div className="bg-brand-lightGold p-3 rounded-full shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-lightGold mb-2">{f.title}</h3>
                  <p className="text-gray-200 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;