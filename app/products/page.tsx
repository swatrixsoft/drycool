import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InnerPageHeader from '@/components/InnerPageHeader';
import ProductCard from '@/components/ProductCard';
import { siteContent } from '@/data/site-content';

export const metadata = {
  title: 'Products - Drycool Systems',
  description: 'Browse our complete range of industrial chillers including screw chillers, scroll chillers, air-cooled and water-cooled systems.',
};

export default function ProductsPage() {
  return (
    <>
      <Navigation />

      <InnerPageHeader
        title="Industrial Chiller Solutions"
        breadcrumb="Products"
        description="Explore our comprehensive catalog of industrial chillers designed for maximum efficiency and reliability."
        heroImage="/images/products/screw.jpg"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {siteContent.products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                icon={product.icon}
                link={product.link}
                features={product.features}
              />
            ))}
          </div>

          {/* Detailed Product Info */}
          <div className="mt-16 space-y-12">
            {siteContent.products.map((product) => (
              <div key={product.id} className="border-t pt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{product.title} - Variants</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {product.variants.map((variant, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl"
                    >
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {variant.name}
                      </h3>
                      <p className="text-gray-600">{variant.description}</p>
                    </div>
                  ))}
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
