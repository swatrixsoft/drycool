import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import ClientLogoMarquee from '@/components/ClientLogoMarquee';
import homeLegacy from '@/data/home-legacy-content.json';
import { clientLogos } from '@/data/ui-content';
import Image from 'next/image';
import Link from 'next/link';

interface HomeCard {
  title: string;
  description: string;
  href: string;
}

interface HomeLegacyContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  cards: HomeCard[];
}

const content = homeLegacy as HomeLegacyContent;

function normalizeLegacyText(input: string): string {
  return input
    .replace(/â€™/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"')
    .replace(/â€“/g, '-')
    .replace(/â€”/g, '-')
    .replace(/â€¦/g, '...')
    .replace(/Â°/g, '°');
}

const cardImages = [
  '/images/homecards/card-1.jpg',
  '/images/homecards/card-2.jpg',
  '/images/homecards/card-3.jpg',
  '/images/homecards/card-4.jpg',
  '/images/homecards/card-5.jpg',
  '/images/homecards/card-6.jpg',
  '/images/homecards/card-7.jpg',
  '/images/homecards/card-8.jpg',
];

const heroSlides = [
  {
    title: normalizeLegacyText(content.cards[0]?.title || content.heroTitle),
    subtitle: 'Drycool Systems',
    description: normalizeLegacyText(content.cards[0]?.description || content.heroDescription),
    image: '/images/hero/hero-1.jpg',
    ctaLink: content.cards[0]?.href || '/works',
    ctaText: 'More Info',
  },
  {
    title: normalizeLegacyText(content.cards[2]?.title || content.heroTitle),
    subtitle: 'Buy Industrial Chiller',
    description: normalizeLegacyText(content.cards[2]?.description || content.heroDescription),
    image: '/images/hero/hero-2.jpg',
    ctaLink: content.cards[2]?.href || '/works/water-cooled-screw-chillers',
    ctaText: 'More Info',
  },
  {
    title: normalizeLegacyText(content.cards[4]?.title || content.heroTitle),
    subtitle: 'Scroll Chiller Range',
    description: normalizeLegacyText(content.cards[4]?.description || content.heroDescription),
    image: '/images/hero/hero-3.jpg',
    ctaLink: content.cards[4]?.href || '/works/air-cooled-scroll-chillers',
    ctaText: 'More Info',
  },
];

const introductionText =
  'Our Industrial Chillers are now with latest Technologies, we are the top most chiller manufacturer, supplier and export all over the world. Buy Industrial chiller from us with very good quality & with the best price also in Industry. Get the unmatched quality range along with high demand nationwide which ensure the quality, durability, high performance along with the ability to protect products, people, and process from various coming from air contamination. Drycool Systems is one of the best chiller manufacturers in India. We will be offering the best solution which includes designing, manufacturing, installing, and also validating clean rooms to offer flawless products to valuable clients. Being the best chiller supplier in India, we will ensure that every system is completely superior in temperature and pressure range, it will be meeting the demands. They will offer all the reasonable efforts for having various advantages for being the renowned chiller plant manufacturer. We are experienced in manufacturing and designing sophisticated dehumidifiers, refrigeration systems as being the best-Customized Chiller Supplier in India. We will ensure to offer effective solutions to control temperature and humidity for your processes and products. We are proficient in quality, system design, and performance. Our company is completely expert in catering to various industrial and commercial sectors.';

const whyUsItems = [
  {
    title: 'Accurate Monitoring',
    description:
      'The accurate monitoring system is being integrated to have the proper tracking of suction pressure and other types of system variables.',
  },
  {
    title: 'Cost-Effective',
    description:
      'It will offer the most cost-effective functionality due to the 50% less usage of energy. High-end temperature control with energy-saving benefits without much requirement for maintenance.',
  },
  {
    title: 'Get Accurate Adjustment',
    description:
      'Get accurate adjustment of compressor motor speed according to the requirement of the industry. With the implementation of proper monitoring functionality according to the functionality.',
  },
  {
    title: 'Optimum Performance',
    description:
      'Various new additional imports are being included which will help in offering the optimum performance by adjustment of the compressor speed.',
  },
  {
    title: 'Compressor in the chiller',
    description:
      'We are engaged in offering a wide range of Industrial Chillers - Compressors, which are manufactured using quality screw compressors from Bitzer (Germany) and Frascold (Italy).',
  },
  {
    title: 'Expert Engineers',
    description:
      'Get high-quality products from our line of expert engineers to have the best high-end customer experience.',
  },
];

const detailedIntroSections = [
  {
    title: 'Screw Chillers',
    description:
      "Screw Chillers are available in two different versions air-cooled screw chillers and water-cooled screw chillers. It will work properly in tropical conditions which will be completely operational and maintain the energy efficiently. It is completely manufactured and designed to deliver superior designing and manufacturing standards. Industrial screw chillers are properly designed with the combination of metallurgy along with qualitative material which is a unique design and it's fitted with the most efficient compressors that come from Europe.",
  },
  {
    title: 'Scroll Chillers',
    description:
      'Scroll Chillers is a unique design to offer high energy-efficient working conditions even in extreme tropical weather. There are two different types of scroll chillers available in the market including Water-Cooled Scroll Chillers & Air-Cooled Scroll Chillers. They are completely friendly to be operational and easy to install which is being completely backed up by a team of skilled engineers. They are properly designed, manufactured, and tested with approval from International parameters to ensure the best quality of equipment.',
  },
  {
    title: 'Water Cooled Scroll Chillers',
    description:
      'Water-Cooled Scroll Chillers are completely eco-friendly and much easier to install with the proper functioning to work properly in extreme tropical weather conditions. The compressor is having utilization capacity along with individual refrigeration circuits and separate refrigeration circuits. It will also offer the best reliability due to the multiple compressor configuration in the machinery. The refrigeration circuits which are installed in the Water-Cooled Scroll Chillers are completely separate and it can be so it can be easy maintenance even if the other working modules are on duty.',
  },
  {
    title: 'Ammonia Chillers',
    description:
      'Drycool Systems is one of the best ammonia chiller manufacturers in India and we are responsible for the manufacturing and supplying of the best ammonia chiller which is skid mounted and compact and suitable for use in a wide temperature range. The temperature range can be maintained between medium to low according to the cooling application required for productivity. It is most suitable for food processing, pharmaceutical, cold storage, chemical, dairy, industrial gases, etc. We ensure the best choice of equipment and accessories which are being proposed to every client by our engineering team.',
  },
  {
    title: 'Air Cooled Screw Chillers',
    description:
      'Air Cooled Screw Chiller is the best for working in harsh tropical weather while maintaining operational efficiency and energy. Drycool Systems is one of the best chiller manufacturers in India who is completely equipped with the best engineers to design and manufacture while maintaining superior standards. It is completely eco-friendly and much easy to install and all the test is being completed by the international parameters before it is being supplied to the industries.',
  },
  {
    title: 'Air Cooled Scroll Chillers',
    description:
      'Air Cooled Scroll Chiller is completely energy efficient which is designed to work even in extreme tropical weather conditions. It is having European compressors and even all the chillers are designed and manufactured along with the test is being done by international standards. Drycool Systems is one of the best chiller plant manufacturers which uses an easy installation process and an operation-friendly engineering team to ensure you with the best equipment. It is having multiple compressive configurations which will offer the individual separate refrigeration circuit unit. It is equipped with a fluid pump and storage tank with the skid installation.',
  },
  {
    title: 'Water Cooled Screw Chillers',
    description:
      'Water Cooled Screw Chiller is having the best design to which time the extreme tropical weather conditions even maintain the highest energy efficiency. The design of the government is to with identical conditions with superior standards. Drycool Systems offers the best chillers in India responsible for maintaining the highest standards of manufacturing and testing with high-quality facilities. We try to maintain the international standards which make us the best chiller manufacturers in India. The equipment is completely operation friendly and can be easily installed and it is being completely backed up by the engineering team to maintain the advantages during the industrial operation.',
  },
  {
    title: 'Oil Chillers',
    description:
      'Oil Chillers is having specially designed equipment that will cool the oil directly using the refrigerant to oil heat exchanging circuits. It is designed in a unique way that can handle the oil while entering the evaporator even when the temperature is higher than normal. Now temperature of the oil will also be higher than normal and it uses the standard preparation to cool. Oil Chillers also have two different types of models including the water-cooled variant and air-cooled variant. Oil Chillers are compact which is have mounted oil pumps and speed and are properly tested according to the international factory standards.',
  },
];

const applicationsCovered = [
  'Chiller For Injection Molding Machine',
  'Pet Blow Molding Chiller',
  'Food & beverages industries',
  'Chiller For Lamination Plant',
  'Chiller for Sole Molding',
  'Chiller For Tape Plant',
  'Chiller For Blow Molding',
  'Rubber Molding Chiller',
  'Chiller For Pipe Industries',
  'Chiller For Pharma & chemicals industries',
  'Chillers For Hydrogen Refueling Station',
  'Batching Plant Chiller',
  'Inverter Screw Chiller',
  'Inverter Scroll Chiller',
  'Bio Gas Chillers',
  'Brine Chillers',
  'VFD Chiller',
  'Chiller for Extrusion Lines',
  'Chiller for Multi Layer/pp films industry',
  'Anodizing industries',
  'Hazardous Area Chiller',
  'Chiller For HVAC System',
];

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSlider slides={heroSlides} />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900">Introduction</h2>
            <p className="text-base leading-8 text-slate-700 md:text-lg">
              {normalizeLegacyText(introductionText)}
            </p>
          </div>

          <div className="mb-14 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-emerald-50 p-6 md:p-10">
            <h2 className="mb-8 text-3xl font-extrabold text-slate-900 md:text-4xl">Detailed Introduction</h2>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {detailedIntroSections.map((item) => (
                <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-7 text-slate-700">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-emerald-200 bg-white p-6">
              <p className="mb-4 text-sm leading-7 text-slate-700">
                All equipment and systems are properly engineered to ensure cost-effective installation, less power
                consumption along advanced technologies. We will be offering our advanced cooling solutions to various
                industries which include.
              </p>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {applicationsCovered.map((item) => (
                  <div key={item} className="rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Screw Chillers</h2>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {content.cards.slice(0, 4).map((card, idx) => (
              <Link
                key={`${card.title}-${idx}`}
                href={card.href}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-44">
                  <Image
                    src={cardImages[idx] || '/images/products/air.jpg'}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 text-sm font-bold text-white">
                    {normalizeLegacyText(card.title)}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
                    {normalizeLegacyText(card.description)}
                  </p>
                  <p className="mt-4 text-sm font-bold text-blue-700">More Info</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mb-6 mt-14">
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Scroll Chiller</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {content.cards.slice(4, 8).map((card, idx) => (
              <Link
                key={`${card.title}-${idx}`}
                href={card.href}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-44">
                  <Image
                    src={cardImages[idx + 4] || '/images/products/air.jpg'}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 text-sm font-bold text-white">
                    {normalizeLegacyText(card.title)}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
                    {normalizeLegacyText(card.description)}
                  </p>
                  <p className="mt-4 text-sm font-bold text-blue-700">More Info</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClientLogoMarquee logos={clientLogos} />

      <section className="section-padding bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-left">
            <h2 className="text-4xl font-extrabold text-slate-900">Why Us</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyUsItems.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-emerald-950 py-20 text-white">
        <div className="absolute -left-16 top-10 h-52 w-52 rounded-full bg-cyan-400/10 blur-2xl" />
        <div className="absolute -right-16 bottom-10 h-52 w-52 rounded-full bg-emerald-400/10 blur-2xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-4xl font-extrabold">{normalizeLegacyText(content.heroSubtitle)}</h2>
          <p className="mb-8 text-lg text-slate-200">{normalizeLegacyText(content.heroDescription)}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/works" className="btn-primary bg-white text-blue-700 hover:bg-slate-100">
              More Info
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-slate-900">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
