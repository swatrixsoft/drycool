export interface SlideItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaLink: string;
  ctaText: string;
}

export const heroSlides: SlideItem[] = [
  {
    title: 'Industrial Cooling Built for Harsh Conditions',
    subtitle: 'Drycool Systems India Pvt. Ltd.',
    description:
      'High-efficiency screw and scroll chillers engineered for 24x7 industrial operation.',
    image: '/images/hero/hero-1.jpg',
    ctaLink: '/products',
    ctaText: 'Explore Products',
  },
  {
    title: 'Custom Chillers for Process-Critical Industries',
    subtitle: 'Since 1989',
    description:
      'Tailored cooling solutions for pharma, food, plastics, and heavy industrial applications.',
    image: '/images/hero/hero-2.jpg',
    ctaLink: '/applications',
    ctaText: 'View Applications',
  },
  {
    title: 'End-to-End Support: Design, Installation, AMC',
    subtitle: 'Turnkey + Service',
    description:
      'From plant layout to commissioning and maintenance, we deliver complete reliability.',
    image: '/images/hero/hero-3.jpg',
    ctaLink: '/contact',
    ctaText: 'Request A Quote',
  },
];

export const productImages: Record<string, string> = {
  'screw-chillers': '/images/products/screw.jpg',
  'scroll-chillers': '/images/products/scroll.jpg',
  'air-chiller': '/images/products/air.jpg',
  'reciprocating-chillers': '/images/products/oil.jpg',
  'cooling-tower': '/images/products/tower.jpg',
  'custom-chillers': '/images/products/ammonia.jpg',
};

export const clientLogos = [
  { name: 'Anand', image: '/images/clients/anand.jpg' },
  { name: 'Anmol', image: '/images/clients/anmol.jpg' },
  { name: 'Frooti', image: '/images/clients/frooti.jpg' },
  { name: 'HAL', image: '/images/clients/hal.jpg' },
  { name: 'Haldiram', image: '/images/clients/haldiram.jpg' },
  { name: 'Jaypee', image: '/images/clients/jaypee.jpg' },
  { name: 'NPL India', image: '/images/clients/npl.jpg' },
  { name: 'TERI', image: '/images/clients/teri.jpg' },
];

export const featuredClientRows = [
  { industry: 'Injection Moulding', client: 'M/s Surya Roshni Ltd.', location: 'Malanpur' },
  { industry: 'Injection Moulding', client: 'M/s Material Movel (P) Ltd.', location: 'Roorkee' },
  { industry: 'Pharma & Chemicals', client: 'M/s Cris Pharma Pvt. Ltd.', location: 'Dehradun' },
  { industry: 'Pharma & Chemicals', client: 'M/s SGS Pharma Pvt. Ltd.', location: 'Nalagarh' },
  { industry: 'Pipe Industry', client: 'M/s Manmohan Pipe Pvt. Ltd.', location: 'Haridwar' },
  { industry: 'Pipe Industry', client: 'M/s Tehri Plastic Industries Pvt. Ltd.', location: 'Haridwar' },
  { industry: 'Food & Beverage', client: 'M/s Raja Biscuits Pvt. Ltd.', location: 'Haridwar' },
  { industry: 'Food & Beverage', client: 'M/s Parle Biscuits Ltd.', location: 'Aurangabad' },
  { industry: 'Soap Industry', client: 'M/s J.K. Soap', location: 'Nepal' },
  { industry: 'Soap Industry', client: 'M/s Hindustan Soap Industries', location: 'Jalandhar' },
  { industry: 'Anodizing', client: 'M/s Honeywell', location: 'Delhi' },
  { industry: 'Anodizing', client: 'M/s India International Ltd.', location: 'Noida' },
];

