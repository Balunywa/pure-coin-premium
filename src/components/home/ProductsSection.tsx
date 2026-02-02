import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/AnimatedText';

const products = [
  {
    name: 'CrewvoPay',
    description: 'Mobile payments, simplified.',
    href: 'https://crewvopay.com',
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    name: 'CrewvoApp',
    description: 'Social fitness for competitors.',
    href: 'https://crewvoapp.com',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
];

export const ProductsSection = () => {
  return (
    <section className="py-32 md:py-48 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 text-label">Portfolio</p>
            <h2 className="gradient-text">Proven at scale.</h2>
            <p className="text-muted-foreground mt-6 max-w-xl mx-auto leading-[1.7]">
              Real products. Thousands of daily users. Built, launched, and scaled.
            </p>
          </FadeIn>

          <div className="space-y-6">
            {products.map((product, index) => (
              <FadeIn key={product.name} delay={index * 0.1}>
                <motion.a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group lux-card block p-10 md:p-12 transition-all duration-500 elevation-2 hover:elevation-4"
                  whileHover={{ y: -4 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  {/* Hover gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center group-hover:border-foreground/30 transition-colors">
                          <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-foreground to-foreground/60" />
                        </div>
                        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                          Case study
                        </p>
                      </div>
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 rounded-full border border-border/50 flex items-center justify-center group-hover:border-foreground/40 group-hover:bg-foreground/5 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      >
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </motion.div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-medium mb-3 group-hover:text-foreground transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-lg text-muted-foreground group-hover:text-muted-foreground/80 transition-colors max-w-2xl">
                      {product.description}
                    </p>
                    
                    {/* Metrics row */}
                    <div className="mt-8 pt-6 border-t border-border/30 flex items-center gap-8">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Status</p>
                        <p className="text-sm font-medium text-foreground flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          Live
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Platform</p>
                        <p className="text-sm font-medium text-foreground">iOS & Android</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Launch</p>
                        <p className="text-sm font-medium text-foreground">2024</p>
                      </div>
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
