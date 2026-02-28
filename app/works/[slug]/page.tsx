import DynamicPage from '@/components/DynamicPage';
import worksContent from '@/data/works-content.json';
import { getPageImageForSlug } from '@/data/page-media';

interface WorkPageData {
  title: string;
  description: string;
  content: string;
}

const works = worksContent as Record<string, WorkPageData>;

export function generateStaticParams() {
  return Object.keys(works).map((slug) => ({ slug }));
}

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
      heroImage={getPageImageForSlug(slug)}
    />
  );
}
