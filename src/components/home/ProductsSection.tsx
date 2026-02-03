import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/AnimatedText';
import { useState } from 'react';

const products = [
  {
    name: 'CrewvoPay',
    description: 'Mobile payments, simplified.',
    href: 'https://crewvopay.com',
    gridColor: 'rgba(59, 130, 246, 0.15)', // Blue
    borderGlow: 'rgba(59, 130, 246, 0.3)',
  },
  {
    name: 'CrewvoApp',
    description: 'Social fitness for competitors.',
    href: 'https://crewvoapp.com',
    gridColor: 'rgba(16, 185, 129, 0.15)', // Emerald
    borderGlow: 'rgba(16, 185, 129, 0.3)',
  },
];

export const ProductsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 md:py-48 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 text-label opacity-70">Portfolio</p>
            <h2 className="gradient-text">Proven at scale.</h2>
            <p className="text-muted-foreground mt-6 max-w-xl mx-auto leading-[1.7]">
              Real products. Thousands of daily users. Built, launched, and scaled.
            </p>
          </FadeIn>

          <div className="space-y-6">
            {products.map((product, index) => {
              const isHovered = hoveredIndex === index;
              
              return (
              <FadeIn key={product.name} delay={index * 0.1}>
                <motion.a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group lux-card block p-10 md:p-12 transition-all duration-500 elevation-2 hover:elevation-4 overflow-hidden"
                  style={{
                    transition: 'border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    setHoveredIndex(index);
                    e.currentTarget.style.borderColor = product.borderGlow;
                  }}
                  onMouseLeave={(e) => {
                    setHoveredIndex(null);
                    e.currentTarget.style.borderColor = 'hsl(var(--border) / 0.5)';
                  }}
                  whileHover={{ y: -4 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  {/* Static visible grid - always on */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-100"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, ${product.gridColor} 1px, transparent 1px),
                        linear-gradient(to bottom, ${product.gridColor} 1px, transparent 1px)
                      `,
                      backgroundSize: '48px 48px',
                    }}
                  />
                  
                  {/* Subtle radial glow on hover */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${product.gridColor}, transparent 70%)`,
                    }}
                  />
                  
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
            );})}
          </div>
        </div>
      </div>
    </section>
  );
};
