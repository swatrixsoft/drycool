import DynamicPage from '@/components/DynamicPage';
import legacyContent from '@/data/legacy-content.json';
import { getPageImageForSlug } from '@/data/page-media';

interface PageData {
  title: string;
  description: string;
  content: string;
}

const pages = legacyContent as Record<string, PageData>;

function LegacyRoute({ slug, fallbackTitle }: { slug: string; fallbackTitle: string }) {
  const pageData = pages[slug] || {
    title: fallbackTitle,
    description: '',
    content: 'Content for this page is being prepared.',
  };

  return (
    <DynamicPage
      title={pageData.title || fallbackTitle}
      description={pageData.description}
      content={pageData.content}
      breadcrumb={pageData.title || fallbackTitle}
      heroImage={getPageImageForSlug(slug)}
    />
  );
}

export default LegacyRoute;

