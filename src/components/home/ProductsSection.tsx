import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    name: 'CrewvoPay',
    description: 'Mobile payments, simplified.',
    href: 'https://crewvopay.com',
  },
  {
    name: 'CrewvoApp',
    description: 'Social fitness for competitors.',
    href: 'https://crewvoapp.com',
  },
];

export const ProductsSection = () => {
  return (
    <section className="py-32 md:py-40">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-20 fade-in">
            Products we've built.
          </h2>

          <div className="space-y-0 divide-y divide-border">
            {products.map((product, index) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-8 md:py-10 hover:px-6 transition-all duration-300 fade-in"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                </div>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
