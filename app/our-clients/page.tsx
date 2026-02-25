import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InnerPageHeader from '@/components/InnerPageHeader';
import ClientLogoMarquee from '@/components/ClientLogoMarquee';
import { clientLogos, featuredClientRows } from '@/data/ui-content';

const groupedIndustries = featuredClientRows.reduce<Record<string, typeof featuredClientRows>>((acc, row) => {
  if (!acc[row.industry]) acc[row.industry] = [];
  acc[row.industry].push(row);
  return acc;
}, {});

export const metadata = {
  title: 'Our Clients - Drycool Systems',
  description: 'Industry-wise client portfolio of Drycool Systems.',
};

export default function OurClientsPage() {
  return (
    <>
      <Navigation />

      <InnerPageHeader
        title="Our Clients"
        breadcrumb="Our Clients"
        description="Drycool serves clients across injection moulding, pharma, food, pipe, soap, and anodizing industries with dependable process cooling systems."
        heroImage="/images/clients/haldiram.jpg"
      />

      <ClientLogoMarquee logos={clientLogos} showLink={false} />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">Industry-wise Client List</h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              A representative list from our legacy portfolio records.
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(groupedIndustries).map(([industry, rows]) => (
              <div key={industry} className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                <div className="bg-slate-900 px-6 py-4 text-lg font-bold text-white">{industry}</div>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-600">S.No.</th>
                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-600">Client Name</th>
                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-600">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, idx) => (
                        <tr key={`${row.client}-${row.location}`} className="border-t border-slate-200">
                          <td className="px-6 py-3 text-sm text-slate-700">{idx + 1}</td>
                          <td className="px-6 py-3 text-sm font-semibold text-slate-900">{row.client}</td>
                          <td className="px-6 py-3 text-sm text-slate-700">{row.location}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
