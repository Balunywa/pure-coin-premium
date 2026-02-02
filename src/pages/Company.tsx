import { Link } from 'react-router-dom';
import { ArrowRight, Target, Lock, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const principles = [
  {
    icon: Target,
    title: 'Focus wins.',
    description: 'We solve one problem at a time. CrewvoPay does transfers and balances. Nothing more until those are perfect.',
  },
  {
    icon: Lock,
    title: 'Trust is earned.',
    description: 'Your money is your money. We protect it with the same care we would our own. No shortcuts.',
  },
  {
    icon: Rocket,
    title: 'Ship fast, fix faster.',
    description: 'Speed matters. We release updates weekly. When something breaks, we fix it within hours.',
  },
];

const Company = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="section-container">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h1 className="mb-6">
                We build tools that move money.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Pure Coin is a product company based in Kampala. 
                We create software that makes financial transactions simpler, faster, and more accessible.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-4xl">
              <p className="text-primary-foreground/70 font-semibold mb-4">Our mission</p>
              <h2 className="text-primary-foreground text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Make sending money as easy as sending a message.
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="mb-16">How we work.</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <ScrollReveal key={principle.title} delay={index * 100}>
                <div className="h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <principle.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
                  <p className="text-muted-foreground text-lg">{principle.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <ScrollReveal>
                <h2 className="mb-6">Small team. Big ambition.</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're a focused group of engineers and designers who care about craft. 
                  Every team member can ship code to production.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-lg font-medium">Kampala, Uganda</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Founded</p>
                    <p className="text-lg font-medium">2024</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="bg-background rounded-3xl border border-border p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-muted rounded-2xl aspect-square"></div>
                  <div className="bg-muted rounded-2xl aspect-square"></div>
                  <div className="bg-muted rounded-2xl aspect-square"></div>
                  <div className="bg-muted rounded-2xl aspect-square"></div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-6">
                  Team photos coming soon
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="mb-6">Want to work with us?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              We're always looking for talented people who want to build great products.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Button asChild size="lg" className="text-base px-8 group">
              <Link to="/contact">
                Get in touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default Company;
