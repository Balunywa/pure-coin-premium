import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section - iOS 18 Premium */}
      <section className="min-h-[100svh] flex items-center justify-center relative overflow-hidden">
        <div className="section-container text-center py-24 md:py-32">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-medium text-sm">Now building the future</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="mb-8 max-w-5xl mx-auto">
              We build products
              <br />
              <span className="text-muted-foreground">that scale.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-14 font-normal leading-relaxed">
              A technology company focused on crafting digital products 
              with precision, purpose, and lasting impact.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="text-base px-10 h-14 rounded-full group shadow-lg shadow-primary/25"
              >
                <Link to="/crewvopay">
                  Explore our products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-base px-10 h-14 rounded-full border-2"
              >
                <Link to="/contact">Work with us</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Premium gradient orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/8 via-primary/4 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-primary/5 to-transparent blur-3xl pointer-events-none" />
      </section>

      {/* Featured Product - CrewvoPay */}
      <section className="py-32 md:py-40 bg-foreground text-background relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 mb-6">
                  <span className="text-primary font-medium text-xs uppercase tracking-wider">Flagship Product</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-background mb-6">
                  CrewvoPay
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <p className="text-xl text-background/70 mb-8 leading-relaxed">
                  Instant money transfers. Seamless mobile payments.
                  Built for speed, designed for everyone.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="flex flex-wrap gap-2 mb-10">
                  <span className="px-4 py-2 bg-background/10 backdrop-blur rounded-full text-sm text-background/90 border border-background/10">
                    iOS & Android
                  </span>
                  <span className="px-4 py-2 bg-background/10 backdrop-blur rounded-full text-sm text-background/90 border border-background/10">
                    Instant P2P
                  </span>
                  <span className="px-4 py-2 bg-background/10 backdrop-blur rounded-full text-sm text-background/90 border border-background/10">
                    Mobile Money
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={250}>
                <a 
                  href="https://crewvopay.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                >
                  crewvopay.com
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={100}>
              <div className="relative">
                {/* Premium iPhone mockup */}
                <div className="relative mx-auto w-[280px]">
                  {/* Outer glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 rounded-[3rem] blur-2xl scale-110" />
                  
                  <div className="relative bg-gradient-to-b from-background/15 to-background/5 backdrop-blur-xl rounded-[3rem] p-3 border border-background/20 shadow-2xl">
                    <div className="bg-background rounded-[2.5rem] aspect-[9/19] flex flex-col items-center justify-center overflow-hidden">
                      {/* Screen content */}
                      <div className="w-full h-full bg-gradient-to-b from-primary/10 via-background to-background flex flex-col items-center justify-center p-8">
                        <div className="w-20 h-20 rounded-[1.75rem] bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6 shadow-xl shadow-primary/30">
                          <span className="text-primary-foreground font-bold text-3xl">C</span>
                        </div>
                        <p className="font-semibold text-foreground text-lg">CrewvoPay</p>
                        <p className="text-muted-foreground text-sm mt-1">Move money fast</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Background gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      </section>

      {/* What We Do - Premium grid */}
      <section className="py-32 md:py-40">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="mb-6">Build. Launch. Scale.</h2>
              <p className="text-lg text-muted-foreground">
                End-to-end product development for the modern era.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal>
              <div className="group p-10 rounded-[2rem] border border-border bg-card hover-lift cursor-default h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="mb-4">Engineering</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Full-stack systems built for scale. Mobile. Web. Cloud. 
                    We ship products that perform.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="group p-10 rounded-[2rem] border border-border bg-card hover-lift cursor-default h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                    <span className="text-2xl">◎</span>
                  </div>
                  <h3 className="mb-4">Design</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Interfaces that feel inevitable. Every pixel serves a purpose.
                    Design that users love.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="group p-10 rounded-[2rem] border border-border bg-card hover-lift cursor-default h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                    <span className="text-2xl">◆</span>
                  </div>
                  <h3 className="mb-4">Strategy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From zero to one. We identify opportunities and 
                    build products that capture them.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy - Impactful statement */}
      <section className="py-32 md:py-40 bg-muted relative overflow-hidden">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-8">Our philosophy</p>
              <h2 className="mb-10 leading-tight">
                Simple is hard.
                <br />
                <span className="text-muted-foreground">That's why we do it.</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Great products feel effortless. Behind that simplicity is 
                thousands of decisions, refined until only the essential remains.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
      </section>

      {/* Coming Soon - Premium cards */}
      <section className="py-32 md:py-40">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-6">
                In the lab
              </p>
              <h2 className="mb-6">What's next.</h2>
              <p className="text-lg text-muted-foreground">
                New products. New markets. Same obsession with quality.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="group p-10 rounded-[2rem] border border-border bg-card hover-lift relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative text-center">
                  <p className="text-xs text-primary font-medium uppercase tracking-wider mb-3">2025</p>
                  <p className="text-2xl font-semibold">Project Atlas</p>
                  <p className="text-muted-foreground mt-2 text-sm">Enterprise solutions</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="group p-10 rounded-[2rem] border border-border bg-card hover-lift relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative text-center">
                  <p className="text-xs text-primary font-medium uppercase tracking-wider mb-3">In development</p>
                  <p className="text-2xl font-semibold">Project Horizon</p>
                  <p className="text-muted-foreground mt-2 text-sm">Consumer platform</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-40 bg-foreground text-background">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="text-background mb-6">
              Let's build something great.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-xl text-background/60 mb-12 max-w-xl mx-auto">
              We're always interested in ambitious projects and talented people.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Button 
              asChild 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90 text-base px-8 h-14 rounded-full group"
            >
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

export default Index;
