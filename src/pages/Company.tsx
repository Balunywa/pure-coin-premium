import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';

const principles = [
  {
    title: 'Simple is hard.',
    description: 'We spend more time removing complexity than adding features. Every element earns its place.',
  },
  {
    title: 'Trust is the product.',
    description: 'Before someone uses our software, they trust us. That trust is never taken for granted.',
  },
  {
    title: 'Ship quality.',
    description: 'We would rather ship one excellent thing than three mediocre ones. Quality is non-negotiable.',
  },
];

const Company = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="section-container">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
              We build with focus.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Pure Coin is a technology company based in Kampala, Uganda. We create premium money products that people actually want to use.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 md:py-32 border-t border-border/30">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 md:mb-16">
              Our principles
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <ScrollReveal key={principle.title} delay={index * 100}>
                <GlassCard className="h-full">
                  <h3 className="text-xl font-medium mb-4">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-32 border-t border-border/30">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                  Leadership
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <GlassCard>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-semibold text-muted-foreground">PC</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Founder & CEO</h3>
                      <p className="text-muted-foreground">Name to be added</p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                  Location
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <GlassCard>
                  <h3 className="text-lg font-medium mb-2">Kampala, Uganda</h3>
                  <p className="text-muted-foreground mb-4">
                    Pure Coin Innovations Ltd. is registered and operates from Kampala, serving customers across Uganda.
                  </p>
                  <a
                    href="mailto:hello@purecoin.ug"
                    className="text-primary hover:opacity-80 transition-opacity font-medium"
                  >
                    hello@purecoin.ug
                  </a>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 border-t border-border/30">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
              Want to work with us?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Button asChild size="lg" className="group">
              <Link to="/contact">
                Get in touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default Company;
