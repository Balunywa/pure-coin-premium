import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/AnimatedText';

const products = [
  { name: 'CrewvoPay', description: 'Mobile payments, simplified.', href: 'https://crewvopay.com' },
  { name: 'CrewvoApp', description: 'Social fitness for competitors.', href: 'https://crewvoapp.com' },
];

export const ProductsSection = () => {
  return (
    <section className="py-32 md:py-40 relative">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-16">
            <p className="text-label text-muted-foreground mb-4">Portfolio</p>
            <h2 className="text-foreground mb-4">Proven at scale.</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Real products. Thousands of daily users. Built, launched, and scaled.
            </p>
          </FadeIn>

          <div className="space-y-4">
            {products.map((product, index) => (
              <FadeIn key={product.name} delay={index * 0.1}>
                <motion.a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-10 md:p-12 rounded-2xl border border-border bg-card hover:border-foreground/15 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <p className="text-label text-muted-foreground">Case study</p>
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-foreground/30 group-hover:bg-muted transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-medium mb-3 text-foreground">{product.name}</h3>
                  <p className="text-lg text-muted-foreground">{product.description}</p>
                  
                  <div className="mt-8 pt-6 border-t border-border flex items-center gap-8">
                    <div>
                      <p className="text-label text-muted-foreground mb-1 text-xs">Status</p>
                      <p className="text-sm font-medium text-foreground flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Live
                      </p>
                    </div>
                    <div>
                      <p className="text-label text-muted-foreground mb-1 text-xs">Platform</p>
                      <p className="text-sm font-medium text-foreground">iOS & Android</p>
                    </div>
                    <div>
                      <p className="text-label text-muted-foreground mb-1 text-xs">Launch</p>
                      <p className="text-sm font-medium text-foreground">2024</p>
                    </div>
                  </div>
                </motion.a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
