export interface Service {
  id: string;
  name: string;
  description: string;
  price: number | string;
  duration: string;
  image: string;
  benefits: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export enum SectionId {
  HOME = 'home',
  SERVICES = 'services',
  ABOUT = 'about',
  CONTACT = 'contact',
  AI_CONSULTANT = 'ai-consultant'
}