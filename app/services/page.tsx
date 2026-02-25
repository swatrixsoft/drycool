import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InnerPageHeader from '@/components/InnerPageHeader';
import { siteContent } from '@/data/site-content';
import Link from 'next/link';

export const metadata = {
  title: 'Services - Drycool Systems',
  description: 'Comprehensive chiller services including AMC, commissioning, technical support, and spare parts.',
};

export default function ServicesPage() {
  return (
    <>
      <Navigation />

      <InnerPageHeader
        title="Complete Chiller Services"
        breadcrumb="Services"
        description="From installation to maintenance, we provide comprehensive support to ensure your chiller systems run at peak performance."
        heroImage="/images/sections/quality.jpg"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Offerings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support and services to maximize your chiller&apos;s lifespan and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {siteContent.services.map((service) => (
              <div key={service.id} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-700 text-sm flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Detailed Service Info */}
          <div className="mt-16 space-y-12">
            {siteContent.services.map((service) => (
              <div key={service.id} className="border-t pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-600 font-bold mr-3">+</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-green-100 p-10 rounded-xl h-80 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-600">Service visualization</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="gradient-dark py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Need Maintenance or Support?</h2>
          <p className="text-lg mb-8 text-gray-300">
            Our expert team is ready to assist with any chiller maintenance or support needs.
          </p>
          <Link href="/contact" className="btn-primary text-lg py-3 px-10 bg-white text-blue-600 hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
