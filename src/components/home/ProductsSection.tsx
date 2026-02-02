import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const products = [
  {
    name: 'CrewvoPay',
    category: 'FinTech',
    description: 'Mobile payments and instant money transfers. Available on iOS and Android.',
    href: 'https://crewvopay.com',
    status: 'Live',
  },
  {
    name: 'CrewvoApp',
    category: 'Fitness',
    description: 'Social fitness app that turns daily activity into competition. Track, battle, and win together.',
    href: 'https://crewvoapp.com',
    status: 'Live',
  },
];

export const ProductsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Products
              </p>
              <h2 className="text-background">Our software products</h2>
            </div>
            <p className="text-background/60 max-w-md">
              Products built in-house, designed for scale, and trusted by users worldwide.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 50}>
              <a
                href={product.href}
                target={product.href.startsWith('http') ? '_blank' : undefined}
                rel={product.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block p-8 rounded-2xl border border-background/10 hover:border-primary/50 hover:bg-background/5 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl font-semibold text-background group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-background/10 text-background/70">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-background/60 max-w-xl">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className={`text-sm font-medium ${product.status === 'Live' ? 'text-green-400' : 'text-background/40'}`}>
                      {product.status}
                    </span>
                    {product.href.startsWith('http') && (
                      <ArrowUpRight className="w-6 h-6 text-background/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    )}
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
