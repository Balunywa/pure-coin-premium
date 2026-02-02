import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Smartphone, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section - Bold lime green like Wise */}
      <section className="bg-primary min-h-[90vh] flex items-center">
        <div className="section-container py-20 md:py-32">
          <div className="max-w-4xl">
            <ScrollReveal>
              <h1 className="text-primary-foreground mb-6">
                Move money fast.
                <br />
                Zero friction.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mb-10">
                CrewvoPay lets you send, receive, and hold money instantly. 
                Powered by Uganda's mobile money network.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-foreground text-background hover:bg-foreground/90 text-base px-8 group"
                >
                  <Link to="/crewvopay">
                    Start sending
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-foreground text-foreground hover:bg-foreground/10 text-base px-8"
                >
                  <Link to="/company">About us</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 border-b border-border">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollReveal>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">20 sec</p>
                <p className="text-muted-foreground mt-1">Average transfer time</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">1M+</p>
                <p className="text-muted-foreground mt-1">Transactions processed</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">99.9%</p>
                <p className="text-muted-foreground mt-1">Uptime reliability</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">24/7</p>
                <p className="text-muted-foreground mt-1">Support available</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">One wallet. Every transaction.</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Send money to friends. Pay for services. Hold your balance digitally. 
                All from one simple app.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal>
              <div className="bg-card border border-border rounded-3xl p-8 h-full hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mb-3">Instant transfers</h3>
                <p className="text-muted-foreground">
                  Money arrives in seconds. No waiting for banks. No hidden delays.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-card border border-border rounded-3xl p-8 h-full hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mb-3">Protected by design</h3>
                <p className="text-muted-foreground">
                  Your money and data stay secure. Built with privacy at the core.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-card border border-border rounded-3xl p-8 h-full hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Smartphone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mb-3">Mobile money ready</h3>
                <p className="text-muted-foreground">
                  Connect your MTN or Airtel account. Fund your wallet directly.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-center mb-16">Three steps. That's it.</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <ScrollReveal>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  1
                </div>
                <h3 className="mb-3">Add money</h3>
                <p className="text-muted-foreground">
                  Top up from your mobile money account in one tap.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  2
                </div>
                <h3 className="mb-3">Hold your balance</h3>
                <p className="text-muted-foreground">
                  Your money sits ready. Spend it when you want.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  3
                </div>
                <h3 className="mb-3">Send instantly</h3>
                <p className="text-muted-foreground">
                  Transfer to anyone with a phone number. Done.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div>
                <p className="text-primary font-semibold mb-4">CrewvoPay</p>
                <h2 className="mb-6">Designed for speed.</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  A clean interface that gets out of your way. 
                  See your balance, track transfers, and send money—all in under 10 seconds.
                </p>
                <Link 
                  to="/crewvopay" 
                  className="inline-flex items-center text-primary font-semibold hover:gap-3 gap-2 transition-all"
                >
                  Explore the product
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="w-48 h-96 bg-foreground rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-background rounded-[2rem] flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary mb-4"></div>
                    <p className="text-sm font-medium text-foreground">CrewvoPay</p>
                    <p className="text-xs text-muted-foreground">App Preview</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-background mb-6">Built in Uganda. Built to last.</h2>
              <p className="text-lg md:text-xl text-background/70 mb-12">
                Pure Coin is headquartered in Kampala. We understand the market because we're part of it.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center">
                <p className="text-2xl font-bold text-background mb-2">Security first</p>
                <p className="text-background/60">Encryption at every layer</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-center">
                <p className="text-2xl font-bold text-background mb-2">Clear pricing</p>
                <p className="text-background/60">No hidden fees ever</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center">
                <p className="text-2xl font-bold text-background mb-2">Real support</p>
                <p className="text-background/60">Humans, not bots</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="mb-6">Ready to move money faster?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Join thousands of Ugandans who send money the modern way.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8 group">
                <Link to="/crewvopay">
                  Get CrewvoPay
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link to="/contact">Talk to us</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
