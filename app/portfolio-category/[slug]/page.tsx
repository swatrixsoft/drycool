import DynamicPage from '@/components/DynamicPage';
import portfolioContent from '@/data/portfolio-content.json';

interface PortfolioPageData {
  title: string;
  description: string;
  content: string;
}

const portfolio = portfolioContent as Record<string, PortfolioPageData>;

export function generateStaticParams() {
  return Object.keys(portfolio).map((slug) => ({ slug }));
}

function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
}

export default async function PortfolioCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = portfolio[slug];
  const title = page?.title || formatSlug(slug);

  return (
    <DynamicPage
      title={title}
      description={page?.description || 'Portfolio category page from legacy stack.'}
      content={page?.content || 'Content for this portfolio category is being prepared.'}
      breadcrumb={`Portfolio Category / ${title}`}
    />
  );
}
