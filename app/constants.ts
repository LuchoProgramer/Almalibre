import { Service, Testimonial } from './types';

export const BUSINESS_INFO = {
  name: "Alma Libre",
  slogan: "Tu cuerpo se relaja, tu alma se libera",
  address: "La Josefina, calle Principal Ambar y Pasaje Jade, Carcelén, Quito",
  phone: "+593 96 272 1748",
  hours: "Lun - Sab: 9:00 - 19:00 | Dom: Bajo Cita",
  whatsappLink: "https://wa.me/593962721748?text=Hola,%20me%20interesa%20agendar%20una%20cita%20en%20Alma%20Libre%20Spa",
  mapLink: "https://maps.app.goo.gl/9vrzBsmpJ6HDUQoe9", // Keep existing or update if user provides new one.
  googleMapsId: "" // Placeholder if needed later
};

export const SERVICES: Service[] = [
  {
    id: '1',
    name: "Masaje Terapéutico",
    description: "Alivio profundo para dolores crónicos y tensión acumulada. Personalizado según tus necesidades físicas.",
    price: 30,
    duration: "60 min",
    image: "/images/masaje-terapeutico-relajante.jpg",
    benefits: ["Alivio de dolor crónico", "Mejora la movilidad", " Atención personalizada"]
  },
  {
    id: '2',
    name: "Liberación Muscular Profunda",
    description: "Técnica avanzada (Miofascial) para soltar restricciones en el tejido profundo. Ideal para contracturas severas.",
    price: 35,
    duration: "60 min",
    image: "/images/liberacion-muscular-profunda.jpg",
    benefits: ["Elimina nudos difíciles", "Restura la elasticidad", "Mejora postura"]
  },
  {
    id: '3',
    name: "Reflexología Podal",
    description: "Terapia de puntos de presión en los pies que restaura el equilibrio natural de tu cuerpo y órganos.",
    price: 25,
    duration: "45 min",
    image: "/images/reflexologia-podal.png",
    benefits: ["Estimula circulación", "Equilibrio energético", "Relajación total"]
  },

  {
    id: '5',
    name: "Drenaje Linfático",
    description: "Masaje suave que favorece la eliminación de líquidos y toxinas. Excelente para post-operatorio.",
    price: 35,
    duration: "60 min",
    image: "/images/drenaje-linfatico.jpg",
    benefits: ["Elimina toxinas", "Reduce inflamación", "Mejora sistema inmune"]
  },
  {
    id: '6',
    name: "Masaje Deportivo",
    description: "Preparación y recuperación muscular para deportistas. Previene lesiones y mejora el rendimiento.",
    price: 30,
    duration: "60 min",
    image: "/images/masaje-deportivo-descontracturante.jpg",
    benefits: ["Recuperación muscular", "Previene lesiones", "Mayor rendimiento"]
  },
  {
    id: '7',
    name: "Masaje Corporativo",
    description: "Llevamos bienestar a tu oficina. Pausas activas y masajes express para reducir el estrés de tu equipo.",
    price: "Cotizar",
    duration: "A medida",
    image: "/images/masaje-corporativo.jpg",
    benefits: ["Reduce estrés laboral", "Aumenta productividad", "Mejora clima laboral"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "María Fernanda T.",
    role: "Ejecutiva",
    text: "El masaje de liberación miofascial me cambió la vida. El dolor de espalda por la oficina desapareció.",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos A.",
    role: "Corredor Amateur",
    text: "Excelente servicio deportivo. Entienden perfectamente la anatomía y la recuperación.",
    rating: 5
  },
  {
    id: 3,
    name: "Sofía L.",
    role: "Mamá",
    text: "El ambiente es súper relajante y usan productos orgánicos que huelen delicioso.",
    rating: 5
  }
];