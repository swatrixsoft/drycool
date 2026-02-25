import DynamicPage from '@/components/DynamicPage';
import legacyContent from '@/data/legacy-content.json';
import { getPageImageForSlug } from '@/data/page-media';

interface PageData {
  title: string;
  description: string;
  content: string;
}

const pages = legacyContent as Record<string, PageData>;

const downloadFallback: Record<string, PageData> = {
  'company-profile': {
    title: 'Company Profile',
    description: 'Download Drycool company profile brochure.',
    content: 'Download file: /downloads/profile.pdf',
  },
  'company-flyer': {
    title: 'Company Flyer',
    description: 'Download Drycool company flyer.',
    content: 'Download file: /downloads/Drycool-chiller-flyer.pdf',
  },
  'download-cooling-towers': {
    title: 'Cooling Towers Brochure',
    description: 'Download cooling towers brochure.',
    content: 'Download file: /downloads/Cooling-Tower-Flyer.pdf',
  },
  'energy-saving-chiller': {
    title: 'Energy Saving Process Chiller',
    description: 'Download energy saving process chiller brochure.',
    content: 'Download file: /downloads/Energy-Saving-Process-Chiller.pdf',
  },
  'download-plastic-chiller': {
    title: 'Chiller For Plastic Industry',
    description: 'Download plastic industry chiller brochure.',
    content: 'Download file: /downloads/chiller-for-plastic-industry.pdf',
  },
  'download-hydrogen-chiller': {
    title: 'Hydrogen Chiller',
    description: 'Download hydrogen chiller brochure.',
    content: 'Download file: /downloads/hydrogen-chiller.pdf',
  },
  'download-batching-chiller': {
    title: 'Batching Plant Chiller',
    description: 'Download batching plant chiller brochure.',
    content: 'Download file: /downloads/batching-plant-chiller.pdf',
  },
  'download-food-beverage-chiller': {
    title: 'Food & Beverages Chiller',
    description: 'Download food and beverage chiller brochure.',
    content: 'Download file: /downloads/food-and-beverages-chiller.pdf',
  },
  'download-printing-chiller': {
    title: 'Chiller For Printing and Packaging',
    description: 'Download printing and packaging chiller brochure.',
    content: 'Download file: /downloads/Chiller-For-Printing-and-Packaging.pdf',
  },
  'download-pharmaceutical-chiller': {
    title: 'Chemical and Pharmaceutical Chiller',
    description: 'Download chemical and pharmaceutical chiller brochure.',
    content: 'Download file: /downloads/Chemical-and-Pharmaceutical-Chiller.pdf',
  },
  'download-r410a-chiller': {
    title: 'R410a Air Cooled Chiller Series',
    description: 'Download R410a series brochure.',
    content: 'Download file: /downloads/R410a-air-cooled-chiller-series.pdf',
  },
  'mep-design': {
    title: 'MEP Design',
    description: 'Download Drycool MEP design presentation.',
    content: 'Download file: /downloads/drycool-design.pptx',
  },
  download: {
    title: 'Downloads',
    description: 'Download company profile and product brochures.',
    content: 'Use the download items in the navigation to access each brochure.',
  },
};

function formatTitleFromSlug(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function DynamicPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const pageData =
    pages[slug] ||
    downloadFallback[slug] || {
      title: formatTitleFromSlug(slug),
      description: 'Industrial cooling solutions by Drycool Systems.',
      content: 'Content for this page is being prepared.',
    };

  return (
    <DynamicPage
      title={pageData.title || formatTitleFromSlug(slug)}
      description={pageData.description}
      content={pageData.content}
      breadcrumb={pageData.title || formatTitleFromSlug(slug)}
      heroImage={getPageImageForSlug(slug)}
    />
  );
}

