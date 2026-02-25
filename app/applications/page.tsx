import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InnerPageHeader from '@/components/InnerPageHeader';
import { siteContent } from '@/data/site-content';
import Link from 'next/link';

export const metadata = {
  title: 'Applications - Drycool Systems',
  description: 'Discover how Drycool chillers are used across industries including plastic, pharma, food & beverage, chemical, and HVAC.',
};

export default function ApplicationsPage() {
  return (
    <>
      <Navigation />

      <InnerPageHeader
        title="Chiller Applications"
        breadcrumb="Applications"
        description="From plastic manufacturing to pharmaceutical processing, our chillers deliver precise temperature control across diverse industries."
        heroImage="/images/products/scroll.jpg"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {siteContent.applications.map((app) => (
              <Link key={app.id} href={app.link}>
                <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-10 rounded-xl shadow-lg hover:shadow-2xl card-hover cursor-pointer border border-gray-200">
                  <div className="text-6xl mb-4">{app.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {app.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {app.description}
                  </p>
                  <div className="mt-4 text-blue-600 font-semibold">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Technology Benefits */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 p-12 rounded-xl border border-blue-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Industries Choose Drycool</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-blue-600 mb-3">✓ Precision Control</h3>
                <p className="text-gray-700">Maintain exact temperature specifications critical for process success.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-green-600 mb-3">✓ Energy Efficient</h3>
                <p className="text-gray-700">Reduce operational costs with advanced energy-saving technology.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-blue-600 mb-3">✓ 24/7 Support</h3>
                <p className="text-gray-700">Dedicated technical assistance ensuring zero downtime.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-green-600 mb-3">✓ Customizable Solutions</h3>
                <p className="text-gray-700">Tailored systems designed for specific industry needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
