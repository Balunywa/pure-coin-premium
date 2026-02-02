import { Link } from 'react-router-dom';
import { ArrowRight, Send, Wallet, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { PhoneMockup } from '@/components/ui/PhoneMockup';

const features = [
  {
    icon: Send,
    title: 'P2P transfers',
    description: 'Send money to anyone, instantly.',
  },
  {
    icon: Wallet,
    title: 'Virtual balances',
    description: 'Hold and manage your funds digitally.',
  },
  {
    icon: Smartphone,
    title: 'Mobile money rails',
    description: "Built on Uganda's mobile money infrastructure.",
  },
];

const steps = [
  { number: '01', title: 'Fund via mobile money', description: 'Connect your mobile money account and add funds.' },
  { number: '02', title: 'Hold a virtual balance', description: 'Your money is ready whenever you need it.' },
  { number: '03', title: 'Send instantly', description: 'Transfer to anyone in seconds.' },
];

const trustPoints = [
  'Built with secure-by-default systems.',
  'Clear support and dispute handling.',
  'Privacy-first design.',
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="section-container">
          <div className="max-w-4xl">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Pure Coin builds premium money products for Uganda.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
                CrewvoPay is our first product — a mobile-money powered wallet for fast P2P transfers and virtual balances.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/crewvopay">
                    Explore CrewvoPay
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 md:py-32 border-t border-border/30">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 md:mb-16">
              What we build
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <GlassCard hover className="h-full">
                  <feature.icon className="w-8 h-8 text-primary mb-6" />
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 border-t border-border/30">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 md:mb-16">
              How it works
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 100}>
                <div className="relative">
                  <span className="text-6xl md:text-7xl font-bold text-secondary/60 mb-4 block">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-0 w-12 h-px bg-border/50" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Operations */}
      <section className="py-20 md:py-32 border-t border-border/30">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
                  Trust & operations
                </h2>
              </ScrollReveal>
              <div className="space-y-4">
                {trustPoints.map((point, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-lg text-muted-foreground">{point}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal delay={300}>
                <Link
                  to="/company"
                  className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity mt-8 text-sm font-medium"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={200}>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-150" />
                  <PhoneMockup />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product Proof */}
      <section className="py-20 md:py-32 border-t border-border/30">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                CrewvoPay
              </h2>
              <p className="text-lg text-muted-foreground">
                Designed for speed and clarity.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={100}>
            <div className="flex justify-center gap-8 md:gap-16">
              <PhoneMockup className="transform -rotate-6" />
              <PhoneMockup className="hidden md:block transform rotate-6" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 md:py-32 border-t border-border/30">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
              Build with a team that sweats the details.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Button asChild size="lg" className="group">
              <Link to="/contact">
                Contact Pure Coin
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
