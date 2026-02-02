import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const products = [
  {
    name: 'CrewvoPay',
    tagline: 'Mobile payments, simplified.',
    description: 'A mobile payment platform for instant P2P transfers and mobile money integration. Built for speed, designed for everyone.',
    category: 'FinTech',
    status: 'Live',
    href: 'https://crewvopay.com',
    features: ['Instant P2P transfers', 'Mobile money integration', 'iOS & Android', 'Bank-level security'],
  },
  {
    name: 'CrewvoApp',
    tagline: 'Collaboration made simple.',
    description: 'An all-in-one platform for teams and communities to connect, collaborate, and get things done together.',
    category: 'Platform',
    status: 'Live',
    href: 'https://crewvoapp.com',
    features: ['Team collaboration', 'Community tools', 'Cross-platform', 'Real-time sync'],
  },
];

const Products = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="section-container">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Products
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="mb-6">
                Software products
                <br />
                <span className="text-muted-foreground">built to scale.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-muted-foreground">
                Our portfolio of software products, designed and built in-house 
                with a focus on user experience and technical excellence.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <div className="space-y-16">
            {products.map((product, index) => (
              <ScrollReveal key={product.name} delay={index * 100}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 md:p-12 rounded-3xl border border-border bg-card">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                        {product.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.status === 'Live' 
                          ? 'bg-green-500/10 text-green-600' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    <h2 className="mb-2">{product.name}</h2>
                    <p className="text-xl text-primary font-medium mb-4">{product.tagline}</p>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {product.description}
                    </p>
                    {product.href && (
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group"
                      >
                        Visit {product.name.toLowerCase()}.com
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-4">
                      {product.features.map((feature) => (
                        <div 
                          key={feature}
                          className="p-4 rounded-xl bg-muted/50 border border-border"
                        >
                          <p className="text-sm font-medium">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="mb-6">Building something new?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Partner with us to build your next software product. 
              From concept to launch, we've got you covered.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Button asChild size="lg" className="text-base px-8 h-14 rounded-lg">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default Products;
