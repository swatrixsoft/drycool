import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InnerPageHeader from '@/components/InnerPageHeader';
import worksContent from '@/data/works-content.json';

interface WorkPageData {
  title: string;
  description: string;
}

const works = worksContent as Record<string, WorkPageData>;

function prettySlug(slug: string): string {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default function WorksIndexPage() {
  const entries = Object.entries(works).sort((a, b) =>
    (a[1].title || prettySlug(a[0])).localeCompare(b[1].title || prettySlug(b[0])),
  );

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        <InnerPageHeader
          title="Works Portfolio"
          breadcrumb="Works"
          description="Complete list of legacy product and component pages mirrored from the old stack."
          heroImage="/images/hero/hero-1.jpg"
        />

        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {entries.map(([slug, page]) => (
                <Link
                  key={slug}
                  href={`/works/${slug}`}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-slate-900">{page.title || prettySlug(slug)}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-slate-600">
                    {page.description || `Explore details for ${prettySlug(slug)}.`}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-blue-700">More Info</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
