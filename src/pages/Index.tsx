import { Link } from 'react-router-dom';
import { ArrowRight, Code, Lightbulb, Layers, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-primary min-h-[90vh] flex items-center">
        <div className="section-container py-20 md:py-32">
          <div className="max-w-4xl">
            <ScrollReveal>
              <h1 className="text-primary-foreground mb-6">
                We build products
                <br />
                that people love.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mb-10">
                Pure Coin is a product studio crafting digital experiences 
                that solve real problems. From concept to launch, we ship.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-foreground text-background hover:bg-foreground/90 text-base px-8 group"
                >
                  <Link to="/company">
                    What we do
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-foreground text-foreground hover:bg-foreground/10 text-base px-8"
                >
                  <Link to="/contact">Work with us</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-primary font-semibold mb-4">Our philosophy</p>
              <h2 className="mb-6">Great products aren't built by accident.</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                They're crafted through obsessive attention to detail, relentless iteration, 
                and a deep understanding of the people who use them. We sweat the pixels 
                so users don't have to think twice.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">What we're good at.</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal>
              <div className="bg-background border border-border rounded-3xl p-8 h-full hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Code className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mb-3">Product Engineering</h3>
                <p className="text-muted-foreground">
                  Full-stack development from mobile apps to cloud infrastructure. 
                  We build things that scale.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-background border border-border rounded-3xl p-8 h-full hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mb-3">Product Strategy</h3>
                <p className="text-muted-foreground">
                  From market research to go-to-market. We help figure out 
                  what to build and why it matters.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-background border border-border rounded-3xl p-8 h-full hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Layers className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mb-3">Product Design</h3>
                <p className="text-muted-foreground">
                  Interfaces that feel intuitive. Experiences that stick. 
                  Design that serves the user first.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Product - CrewvoPay */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <ScrollReveal>
            <p className="text-primary font-semibold mb-4">Our Products</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-8">
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">C</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">CrewvoPay</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  A mobile-first payment platform built for Uganda's growing digital economy. 
                  Send, receive, and hold money—powered by the mobile money networks people already use.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-muted rounded-full text-sm font-medium">Mobile Payments</span>
                  <span className="px-4 py-2 bg-muted rounded-full text-sm font-medium">P2P Transfers</span>
                  <span className="px-4 py-2 bg-muted rounded-full text-sm font-medium">Virtual Wallets</span>
                </div>
                <a 
                  href="https://crewvopay.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-semibold hover:gap-3 gap-2 transition-all"
                >
                  Visit crewvopay.com
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="w-48 h-96 bg-foreground rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-background rounded-[2rem] flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary mb-4 flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-2xl">C</span>
                    </div>
                    <p className="text-sm font-medium text-foreground">CrewvoPay</p>
                    <p className="text-xs text-muted-foreground mt-1">Live on iOS & Android</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* More Products Coming */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="mb-6">More in the lab.</h2>
              <p className="text-lg text-muted-foreground mb-10">
                We're always working on what's next. New products. New ideas. 
                Same commitment to quality.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-4 bg-background border border-border rounded-2xl">
                  <p className="text-sm text-muted-foreground">Coming 2025</p>
                  <p className="font-semibold">Project Atlas</p>
                </div>
                <div className="px-6 py-4 bg-background border border-border rounded-2xl">
                  <p className="text-sm text-muted-foreground">In Development</p>
                  <p className="font-semibold">Project Horizon</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-background mb-6">Built in Kampala. Shipping globally.</h2>
              <p className="text-lg md:text-xl text-background/70 mb-12">
                Pure Coin is a Ugandan product company with global ambitions. 
                We're proving that world-class products can come from anywhere.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center">
                <p className="text-2xl font-bold text-background mb-2">Craft over speed</p>
                <p className="text-background/60">Quality is the priority</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-center">
                <p className="text-2xl font-bold text-background mb-2">Users first</p>
                <p className="text-background/60">Everything we build serves them</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center">
                <p className="text-2xl font-bold text-background mb-2">Ship it</p>
                <p className="text-background/60">Ideas mean nothing unbuilt</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="mb-6">Got an idea worth building?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              We're always interested in ambitious projects and talented people.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8 group">
                <Link to="/contact">
                  Let's talk
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link to="/company">About us</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
