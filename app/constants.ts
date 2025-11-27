import { Service, Testimonial } from './types';

export const BUSINESS_INFO = {
  name: "Alma Libre",
  slogan: "Tu cuerpo se relaja, tu alma se libera",
  address: "Barrio La Josefina, Cerca a Carcelén Alto, Quito",
  phone: "+593 99 999 9999", // Placeholder
  hours: "Lun - Sab: 9:00 - 19:00 | Dom: Bajo Cita",
  whatsappLink: "https://wa.me/593999999999", // Placeholder
  mapLink: "https://goo.gl/maps/placeholder"
};

export const SERVICES: Service[] = [
  {
    id: '1',
    name: "Masaje Relajante",
    description: "Desconecta del estrés diario con movimientos suaves y rítmicos. Ideal para ansiedad y fatiga mental.",
    price: 25,
    duration: "60 min",
    image: "https://picsum.photos/id/65/800/600",
    benefits: ["Reduce estrés", "Mejora el sueño", "Calma la ansiedad"]
  },
  {
    id: '2',
    name: "Liberación Miofascial",
    description: "Técnica especializada para liberar restricciones en el tejido conectivo. Recupera tu movilidad y elimina dolor crónico.",
    price: 30,
    duration: "60 min",
    image: "https://picsum.photos/id/83/800/600",
    benefits: ["Mejora postura", "Elimina nudos profundos", "Aumenta flexibilidad"]
  },
  {
    id: '3',
    name: "Reflexología Podal",
    description: "Estimulación de puntos específicos en los pies que conectan con órganos vitales para un equilibrio total.",
    price: 25,
    duration: "45 min",
    image: "https://picsum.photos/id/102/800/600",
    benefits: ["Estimula circulación", "Equilibrio energético", "Relajación profunda"]
  },
  {
    id: '4',
    name: "Drenaje Linfático",
    description: "Masaje suave que favorece la eliminación de líquidos y toxinas. Excelente post-operatorio o para retención de líquidos.",
    price: 35,
    duration: "60 min",
    image: "https://picsum.photos/id/123/800/600",
    benefits: ["Elimina toxinas", "Reduce inflamación", "Mejora sistema inmune"]
  },
  {
    id: '5',
    name: "Maderoterapia",
    description: "Masaje vigoroso con instrumentos de madera para modelar la figura y combatir la celulitis.",
    price: 30,
    duration: "50 min",
    image: "https://picsum.photos/id/145/800/600",
    benefits: ["Tonifica piel", "Reduce medidas", "Combate celulitis"]
  },
  {
    id: '6',
    name: "Masaje Deportivo",
    description: "Diseñado para prevenir y tratar lesiones musculares. Ideal antes o después de actividad física intensa.",
    price: 30,
    duration: "60 min",
    image: "https://picsum.photos/id/167/800/600",
    benefits: ["Recuperación muscular", "Previene lesiones", "Mejora rendimiento"]
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