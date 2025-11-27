'use client';

import React from 'react';
import { SectionId } from '../types';
import { BUSINESS_INFO } from '../constants';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="bg-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-brand-green mb-4">Visítanos o Agenda</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Contact Info */}
          <div className="bg-brand-water/20 p-8 rounded-3xl">
            <h3 className="font-serif text-2xl font-bold text-brand-green mb-8">Información de Contacto</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-green p-3 rounded-full text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Dirección</h4>
                  <p className="text-gray-600">{BUSINESS_INFO.address}</p>
                  <a href={BUSINESS_INFO.mapLink} target="_blank" rel="noreferrer" className="text-brand-gold font-bold text-sm hover:underline mt-1 block">
                    Ver en Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-green p-3 rounded-full text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Teléfono / WhatsApp</h4>
                  <p className="text-gray-600">{BUSINESS_INFO.phone}</p>
                  <a href={BUSINESS_INFO.whatsappLink} className="text-brand-gold font-bold text-sm hover:underline mt-1 block">
                    Enviar mensaje
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-green p-3 rounded-full text-white">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Horario de Atención</h4>
                  <p className="text-gray-600">{BUSINESS_INFO.hours}</p>
                  <p className="text-xs text-gray-500 mt-1">*Atención solo bajo cita previa</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-brand-green/10 flex gap-4">
               <a href="#" className="bg-white p-3 rounded-full shadow hover:text-brand-gold transition-colors text-brand-green">
                 <Instagram size={24} />
               </a>
               <a href="#" className="bg-white p-3 rounded-full shadow hover:text-brand-gold transition-colors text-brand-green">
                 <Facebook size={24} />
               </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] bg-gray-200 rounded-3xl overflow-hidden relative shadow-inner">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.814210722443!2d-78.4751374!3d-0.08223599999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5859c853ec08b%3A0xedd1ce6f9d7cc3f7!2sBienestar%20Alma%20Libre%20%7C%20Carcelen!5e0!3m2!1sen!2sec!4v1764276505833!5m2!1sen!2sec" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Ubicación Alma Libre"
               className="grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>
             <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg text-xs text-gray-500">
               Bienestar Alma Libre | Carcelén
             </div>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span className="hover:text-brand-green cursor-pointer">Política de Privacidad</span>
             <span className="hover:text-brand-green cursor-pointer">Términos y Condiciones</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;