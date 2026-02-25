import DynamicPage from '@/components/DynamicPage';
import worksContent from '@/data/works-content.json';

interface WorkPageData {
  title: string;
  description: string;
  content: string;
}

const works = worksContent as Record<string, WorkPageData>;

const workHeroImages: Record<string, string> = {
  'air-cooled-screw-chillers': '/images/products/screw.jpg',
  'air-cooled-screw-chiller': '/images/products/screw.jpg',
  'water-cooled-screw-chillers': '/images/products/screw.jpg',
  'water-cooled-screw-chiller': '/images/products/screw.jpg',
  'air-cooled-scroll-chillers': '/images/products/scroll.jpg',
  'air-cooled-scroll-chiller': '/images/products/scroll.jpg',
  'water-cooled-scroll-chillers': '/images/products/scroll.jpg',
  'water-cooled-scroll-chiller': '/images/products/scroll.jpg',
  'ammonia-milk-chillers': '/images/products/ammonia.jpg',
  'brine-chillers': '/images/products/ammonia.jpg',
  'oil-chillers': '/images/products/oil.jpg',
};

function formatTitleFromSlug(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function WorksPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = works[slug];
  const title = page?.title || formatTitleFromSlug(slug);

  return (
    <DynamicPage
      title={title}
      description={page?.description || 'Industrial cooling solution by Drycool Systems.'}
      content={page?.content || 'Content for this page is being prepared.'}
      breadcrumb={`Works / ${title}`}
      heroImage={workHeroImages[slug]}
    />
  );
}

