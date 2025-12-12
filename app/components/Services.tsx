'use client';

import React from 'react';
import { SectionId } from '../types';
import { SERVICES } from '../constants';
import { Check, Clock } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-brand-green mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Combinamos técnicas ancestrales con conocimiento moderno para brindarte una experiencia de sanación profunda.
            Atención en local y a domicilio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-brand-water/30">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-brand-green font-bold shadow-sm">
                  {typeof service.price === 'number' ? `$${service.price}` : service.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-serif text-xl font-bold text-brand-green">{service.name}</h3>
                  <div className="flex items-center text-brand-gold text-sm font-medium">
                    <Clock size={16} className="mr-1" />
                    {service.duration}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <Check size={14} className="text-brand-gold mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-brand-green text-brand-lightGold py-3 rounded-lg font-bold hover:bg-brand-gold hover:text-white transition-colors uppercase tracking-wide text-sm"
                >
                  Agendar Cita
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;