export const pageHeroImages: Record<string, string> = {
  'about-us': '/images/hero/hero-2.jpg',
  'our-profile': '/images/hero/hero-1.jpg',
  'quality-assurance': '/images/sections/quality.jpg',
  accreditations: '/images/hero/hero-3.jpg',
  'our-clients': '/images/clients/haldiram.jpg',
  'our-team': '/images/hero/hero-2.jpg',
  expertise: '/images/hero/hero-1.jpg',
  'turnkey-projects': '/images/homecards/card-7.jpg',

  'air-cooled-screw-chiller': '/images/products/screw.jpg',
  'air-cooled-screw-chillers': '/images/products/screw.jpg',
  'air-cooled-screw-chillers-single-compressor': '/images/products/screw.jpg',
  'water-cooled-screw-chiller': '/images/homecards/card-2.jpg',
  'water-cooled-screw-chillers': '/images/homecards/card-2.jpg',
  'water-cooled-screw-chillers-single-compressor': '/images/homecards/card-2.jpg',

  'air-cooled-scroll-chiller': '/images/products/scroll.jpg',
  'air-cooled-scroll-chillers': '/images/products/scroll.jpg',
  'air-cooled-scroll-chiller-single-compressor': '/images/products/scroll.jpg',
  'water-cooled-scroll-chiller': '/images/homecards/card-4.jpg',
  'water-cooled-scroll-chillers': '/images/homecards/card-4.jpg',
  'water-cooled-scroll-chiller-single-compressor': '/images/homecards/card-4.jpg',
  'scroll-compressor': '/images/products/scroll.jpg',

  'air-chiller': '/images/products/air.jpg',
  'ammonia-milk-chillers': '/images/products/ammonia.jpg',
  'brine-chillers': '/images/products/ammonia.jpg',
  'buy-cooling-tower': '/images/products/tower.jpg',
  'buy-oil-chiller': '/images/products/oil.jpg',

  'rectangular-type-cooling-tower': '/images/products/tower.jpg',
  'square-type-cooling-tower': '/images/products/tower.jpg',
  'bottle-type-cooling-tower': '/images/products/tower.jpg',
  'forced-draft-cooling-tower': '/images/products/tower.jpg',
  'cold-rooms': '/images/homecards/card-6.jpg',
  'cold-room-doors': '/images/homecards/card-6.jpg',
  'cold-room-panels': '/images/homecards/card-6.jpg',
  'cold-room-refrigeration-equipments': '/images/homecards/card-6.jpg',
  'plate-heat-exchanger': '/images/homecards/card-8.jpg',
  'shell-tube-condenser': '/images/homecards/card-8.jpg',
  'shell-tube-evaporator': '/images/homecards/card-8.jpg',
  aftercoolers: '/images/homecards/card-5.jpg',
  'air-washer': '/images/products/air.jpg',
  'air-handling-unit': '/images/homecards/card-5.jpg',
  'refrigerated-air-dryers': '/images/homecards/card-5.jpg',
  'adsorption-dryers-heatless': '/images/homecards/card-5.jpg',
  'air-receivers': '/images/homecards/card-5.jpg',
  filters: '/images/homecards/card-8.jpg',
  'flange-motor': '/images/homecards/card-8.jpg',
  'rotary-sprinkler': '/images/homecards/card-3.jpg',
  'sprinkler-fan': '/images/homecards/card-3.jpg',
  'industrial-chillers': '/images/homecards/card-1.jpg',

  'download-r410a-chiller': '/images/products/screw.jpg',
  'download-cooling-towers': '/images/products/tower.jpg',
  'download-food-beverage-chiller': '/images/homecards/card-1.jpg',
  'download-hydrogen-chiller': '/images/homecards/card-1.jpg',
  'download-batching-chiller': '/images/homecards/card-1.jpg',
  'download-pharmaceutical-chiller': '/images/homecards/card-1.jpg',
};

const keywordImageMap: Array<{ keywords: string[]; image: string }> = [
  { keywords: ['screw', 'chiller'], image: '/images/products/screw.jpg' },
  { keywords: ['scroll', 'chiller'], image: '/images/products/scroll.jpg' },
  { keywords: ['ammonia', 'milk'], image: '/images/products/ammonia.jpg' },
  { keywords: ['brine'], image: '/images/products/ammonia.jpg' },
  { keywords: ['oil'], image: '/images/products/oil.jpg' },
  { keywords: ['cooling-tower', 'tower'], image: '/images/products/tower.jpg' },
  { keywords: ['cold-room', 'cold'], image: '/images/homecards/card-6.jpg' },
  { keywords: ['plate-heat-exchanger', 'heat-exchanger'], image: '/images/homecards/card-8.jpg' },
  { keywords: ['condenser', 'evaporator'], image: '/images/homecards/card-8.jpg' },
  { keywords: ['dryer', 'adsorption', 'refrigerated'], image: '/images/homecards/card-5.jpg' },
  { keywords: ['washer'], image: '/images/products/air.jpg' },
  { keywords: ['air-handling', 'ahu'], image: '/images/homecards/card-5.jpg' },
  { keywords: ['receiver'], image: '/images/homecards/card-5.jpg' },
  { keywords: ['filter'], image: '/images/homecards/card-8.jpg' },
  { keywords: ['sprinkler'], image: '/images/homecards/card-3.jpg' },
  { keywords: ['flange', 'motor'], image: '/images/homecards/card-8.jpg' },
];

export function getPageImageForSlug(slug: string): string {
  const normalized = slug.toLowerCase();
  if (pageHeroImages[normalized]) return pageHeroImages[normalized];

  for (const item of keywordImageMap) {
    if (item.keywords.some((keyword) => normalized.includes(keyword))) {
      return item.image;
    }
  }

  return '/images/hero/hero-2.jpg';
}
