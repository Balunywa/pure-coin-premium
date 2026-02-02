import { Link } from 'react-router-dom';
import { ArrowRight, Target, Sparkles, Rocket, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const principles = [
  {
    icon: Target,
    title: 'Obsess over problems.',
    description: "We don't build features. We solve problems. Every line of code exists for a reason.",
  },
  {
    icon: Sparkles,
    title: 'Sweat the details.',
    description: "The difference between good and great is in the pixels. We care about things most people don't notice.",
  },
  {
    icon: Rocket,
    title: 'Ship relentlessly.',
    description: 'Ideas are cheap. Execution is everything. We ship fast, learn faster, and iterate constantly.',
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
                A product company
                <br />
                building the future.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Pure Coin is a technology company based in Kampala, Uganda. 
                We design, build, and scale digital products that make a difference.
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
                Build products that people genuinely love to use.
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="mb-16">How we think.</h2>
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

      {/* What We Build */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="mb-6">What we build.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12">
              We focus on products that solve real problems in markets we understand deeply.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-background border border-border rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">C</span>
                  </div>
                  <h3 className="text-xl font-bold">CrewvoPay</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Live</span>
                </div>
                <p className="text-muted-foreground">
                  Mobile payment platform for Uganda. P2P transfers, virtual wallets, 
                  and seamless mobile money integration.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-background border border-border rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-muted-foreground/20 flex items-center justify-center">
                    <span className="text-muted-foreground font-bold">A</span>
                  </div>
                  <h3 className="text-xl font-bold">Project Atlas</h3>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">Coming Soon</span>
                </div>
                <p className="text-muted-foreground">
                  Something new we're cooking up. Stay tuned.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <ScrollReveal>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h2 className="mb-6">Small team. Big output.</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're a tight-knit group of engineers, designers, and product thinkers. 
                  Everyone ships. Everyone owns what they build.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Headquarters</p>
                    <p className="text-lg font-medium">Kampala, Uganda</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Founded</p>
                    <p className="text-lg font-medium">2024</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Focus</p>
                    <p className="text-lg font-medium">Consumer & Fintech Products</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="bg-muted rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-background rounded-2xl aspect-square"></div>
                  <div className="bg-background rounded-2xl aspect-square"></div>
                  <div className="bg-background rounded-2xl aspect-square"></div>
                  <div className="bg-background rounded-2xl aspect-square"></div>
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
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="text-background mb-6">Join us.</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-background/70 mb-10 max-w-xl mx-auto">
              We're looking for talented people who want to build products that matter. 
              Engineers, designers, and product minds—let's talk.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-base px-8 group">
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
