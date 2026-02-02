import { motion } from 'framer-motion';
import { ArrowUpRight, Smartphone, CreditCard, Trophy, Users, TrendingUp, Shield } from 'lucide-react';
import { FadeIn } from '@/components/ui/AnimatedText';

const products = [
  {
    name: 'CrewvoPay',
    tagline: 'Mobile payments, simplified.',
    description: 'A next-gen mobile payment platform powering instant P2P transfers and seamless mobile money integration across Africa and beyond.',
    href: 'https://crewvopay.com',
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    accentColor: 'text-blue-400',
    features: [
      { icon: CreditCard, label: 'Instant transfers' },
      { icon: Smartphone, label: 'Mobile-first' },
      { icon: Shield, label: 'Bank-grade security' },
    ],
    stats: { users: '100K+', transactions: '$2M+' },
  },
  {
    name: 'CrewvoApp',
    tagline: "Don't just train. Compete.",
    description: 'The social fitness revolution. AI-powered rep counting, crew battles, and global leaderboards that turn every workout into a competition.',
    href: 'https://crewvoapp.com',
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
    accentColor: 'text-purple-400',
    features: [
      { icon: Trophy, label: 'Crew battles' },
      { icon: TrendingUp, label: 'AI tracking' },
      { icon: Users, label: 'Social fitness' },
    ],
    stats: { users: '50K+', workouts: '1M+' },
  },
];

export const ProductsSection = () => {
  return (
    <section className="py-32 md:py-40 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Live products
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="gradient-text">Products we've built.</h2>
          </FadeIn>
        </div>

        <div className="space-y-8">
          {products.map((product, index) => (
            <FadeIn key={product.name} delay={index * 0.15}>
              <motion.a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/30"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-subtle" />
                
                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-sm font-medium ${product.accentColor}`}>
                          {product.tagline}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-medium mb-4 group-hover:text-foreground transition-colors">
                        {product.name}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed max-w-xl mb-6">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {product.features.map((feature) => (
                          <div 
                            key={feature.label}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/50 border border-border/50 text-sm text-muted-foreground"
                          >
                            <feature.icon className="w-4 h-4" />
                            {feature.label}
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-8">
                        <div>
                          <div className="text-2xl font-medium text-foreground">{product.stats.users}</div>
                          <div className="text-sm text-muted-foreground">Active users</div>
                        </div>
                        <div className="w-px h-10 bg-border/50" />
                        <div>
                          <div className="text-2xl font-medium text-foreground">
                            {Object.values(product.stats)[1]}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {product.name === 'CrewvoPay' ? 'Processed' : 'Workouts logged'}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      className="flex-shrink-0 w-16 h-16 rounded-full border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </motion.div>
                  </div>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
