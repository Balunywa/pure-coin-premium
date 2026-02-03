import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layout/PageLayout';
import { FadeIn } from '@/components/ui/AnimatedText';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';

const products = [
  {
    name: 'CrewvoPay',
    tagline: 'Mobile payments, simplified.',
    description: 'A mobile payment platform for instant P2P transfers and mobile money integration. Built for speed, designed for everyone.',
    category: 'FinTech',
    status: 'Live',
    href: 'https://crewvopay.com',
    features: ['Instant P2P transfers', 'Mobile money integration', 'iOS & Android', 'Bank-level security'],
    gridColor: 'rgba(59, 130, 246, 0.15)', // Blue
    borderGlow: 'rgba(59, 130, 246, 0.3)',
  },
  {
    name: 'CrewvoApp',
    tagline: "Don't just train. Compete.",
    description: 'The #1 social fitness app that turns your daily activity into social currency. Track everything with AI-powered rep counting, battle in Crew vs Crew competitions, and climb global leaderboards.',
    category: 'Fitness',
    status: 'Live',
    href: 'https://crewvoapp.com',
    features: ['AI rep counting', 'Crew battles', 'Global leaderboards', 'Form analysis'],
    gridColor: 'rgba(16, 185, 129, 0.15)', // Emerald
    borderGlow: 'rgba(16, 185, 129, 0.3)',
  },
];

const Products = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-32 md:py-40 relative overflow-hidden">
        <AnimatedBackground />
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-sm text-muted-foreground mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Products
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mb-6">
                <span className="gradient-text">Software products</span>
                <br />
                <span className="text-muted-foreground">built to scale.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-xl">
                Our portfolio of software products, designed and built in-house 
                with a focus on user experience and technical excellence.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="space-y-8">
            {products.map((product, index) => (
              <FadeIn key={product.name} delay={index * 0.1}>
                <motion.div
                  className="relative group rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden"
                  style={{
                    transition: 'border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = product.borderGlow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(var(--border) / 0.5)';
                  }}
                  whileHover={{ scale: 1.005 }}
                  transition={{ duration: 0.3 }}
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
                  
                  <div className="relative p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-card border border-border/50 text-muted-foreground">
                            {product.category}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            product.status === 'Live' 
                              ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                              : 'bg-card border border-border/50 text-muted-foreground'
                          }`}>
                            <span className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              {product.status}
                            </span>
                          </span>
                        </div>
                        <h2 className="mb-3 text-foreground">{product.name}</h2>
                        <p className="text-xl text-primary font-medium mb-4">{product.tagline}</p>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                          {product.description}
                        </p>
                        {product.href && (
                          <motion.a
                            href={product.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-foreground font-medium group/link"
                            whileHover={{ x: 4 }}
                          >
                            Visit {product.name.toLowerCase()}.com
                            <ArrowUpRight className="w-5 h-5 text-primary group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </motion.a>
                        )}
                      </div>
                      <div>
                        <div className="grid grid-cols-2 gap-3">
                          {product.features.map((feature, i) => (
                            <motion.div 
                              key={feature}
                              className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                            >
                              <p className="text-sm font-medium text-foreground">{feature}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
        
        <div className="section-container relative z-10 text-center">
          <FadeIn>
            <h2 className="mb-6">
              <span className="gradient-text">Building something new?</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Partner with us to build your next software product. 
              From concept to launch, we've got you covered.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Button 
              asChild 
              size="lg" 
              className="text-base px-8 h-12 rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              <Link to="/contact">Get in touch</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
};

export default Products;
