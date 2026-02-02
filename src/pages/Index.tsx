import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section - Apple-style minimal impact */}
      <section className="min-h-[100vh] flex items-center justify-center relative overflow-hidden">
        <div className="section-container text-center py-32">
          <ScrollReveal>
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-6">
              Pure Coin
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="mb-8 max-w-4xl mx-auto">
              We craft products
              <br />
              <span className="text-muted-foreground">people love.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-normal">
              A product studio building digital experiences that matter.
              Based in Kampala. Shipping globally.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="text-base px-8 h-14 rounded-full group"
              >
                <Link to="/crewvopay">
                  See our work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-base px-8 h-14 rounded-full"
              >
                <Link to="/contact">Get in touch</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Subtle gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/5 to-transparent blur-3xl pointer-events-none" />
      </section>

      {/* Featured Product - CrewvoPay */}
      <section className="py-32 md:py-40 bg-foreground text-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <ScrollReveal>
                <p className="text-primary font-medium text-sm tracking-wide uppercase mb-6">
                  Featured Product
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-background mb-6">
                  CrewvoPay
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <p className="text-xl text-background/70 mb-8 leading-relaxed">
                  A mobile payment platform built for Uganda.
                  Send money instantly. Track every shilling.
                  Powered by mobile money.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="px-4 py-2 bg-background/10 rounded-full text-sm text-background/80">
                    iOS & Android
                  </span>
                  <span className="px-4 py-2 bg-background/10 rounded-full text-sm text-background/80">
                    P2P Transfers
                  </span>
                  <span className="px-4 py-2 bg-background/10 rounded-full text-sm text-background/80">
                    Mobile Money
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={250}>
                <a 
                  href="https://crewvopay.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group"
                >
                  Visit crewvopay.com
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={100}>
              <div className="relative">
                {/* Phone mockup - iOS style */}
                <div className="relative mx-auto w-[280px]">
                  <div className="bg-background/10 backdrop-blur-xl rounded-[3rem] p-3 border border-background/20">
                    <div className="bg-background rounded-[2.5rem] aspect-[9/19] flex flex-col items-center justify-center overflow-hidden">
                      {/* Screen content */}
                      <div className="w-full h-full bg-gradient-to-b from-primary/10 to-background flex flex-col items-center justify-center p-8">
                        <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                          <span className="text-primary-foreground font-bold text-3xl">C</span>
                        </div>
                        <p className="font-semibold text-foreground text-lg">CrewvoPay</p>
                        <p className="text-muted-foreground text-sm mt-1">Move money fast</p>
                      </div>
                    </div>
                  </div>
                  {/* Reflection effect */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-gradient-to-t from-transparent via-background/5 to-transparent blur-2xl" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Do - Clean grid */}
      <section className="py-32 md:py-40">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-6">
                What we do
              </p>
              <h2>Build. Launch. Scale.</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal>
              <div className="group p-8 rounded-3xl border border-border bg-card hover-lift cursor-default h-full">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="mb-4">Engineering</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full-stack development. Mobile apps. Cloud infrastructure. 
                  We build things that work and scale.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="group p-8 rounded-3xl border border-border bg-card hover-lift cursor-default h-full">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">◎</span>
                </div>
                <h3 className="mb-4">Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Interfaces that feel right. Experiences that stick. 
                  Design that serves the user, always.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="group p-8 rounded-3xl border border-border bg-card hover-lift cursor-default h-full">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">◆</span>
                </div>
                <h3 className="mb-4">Strategy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From idea to market. We help figure out what to build 
                  and why it matters.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy - Minimal statement */}
      <section className="py-32 md:py-40 bg-muted">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-8 leading-tight">
                Great products don't happen by accident.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                They're crafted through obsessive attention to detail,
                relentless iteration, and a deep understanding of the 
                people who use them.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-32 md:py-40">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-6">
                Coming soon
              </p>
              <h2 className="mb-6">More in the lab.</h2>
              <p className="text-lg text-muted-foreground">
                We're always working on what's next.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="p-8 rounded-3xl border border-border bg-card text-center hover-lift">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">2025</p>
                <p className="text-xl font-semibold">Project Atlas</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="p-8 rounded-3xl border border-border bg-card text-center hover-lift">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">In development</p>
                <p className="text-xl font-semibold">Project Horizon</p>
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
