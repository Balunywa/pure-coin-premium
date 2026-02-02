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
    <section className="py-32 md:py-40 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h2 className="gradient-text">Products we've built.</h2>
          </FadeIn>

          <div className="space-y-4">
            {products.map((product, index) => (
              <FadeIn key={product.name} delay={index * 0.1}>
                <motion.a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block p-8 md:p-10 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/30"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-subtle" />
                  
                  <div className="relative flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-medium mb-2 group-hover:text-foreground transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                        {product.description}
                      </p>
                    </div>
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-full border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </motion.div>
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
