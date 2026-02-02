import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, QrCode, Send, Users, Wallet, Split, PiggyBank, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const features = [
  {
    icon: QrCode,
    title: 'Pay with QR',
    description: 'Share your personal QR code. Anyone can scan and send you money instantly via MTN or Airtel.',
  },
  {
    icon: Send,
    title: 'Send Money',
    description: 'Transfer to any CrewvoPay user by @tag or phone. Instant, no fees between users.',
  },
  {
    icon: Wallet,
    title: 'Request Money',
    description: 'Create a payment link for what you\'re owed. Share on WhatsApp. Get paid without asking twice.',
  },
  {
    icon: Users,
    title: 'Group Pools',
    description: 'Collect for weddings, trips, or any group expense. See who paid in real-time.',
  },
  {
    icon: Split,
    title: 'Split Bills',
    description: 'Dinner? Uber? Just split it. Everyone pays their share through one link.',
  },
  {
    icon: PiggyBank,
    title: 'Save & Grow',
    description: 'Auto round-up every transaction. Set goals. Watch your savings grow effortlessly.',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Scan or search',
    description: 'Scan their QR code or find them by @tag or phone number.',
  },
  {
    step: '02',
    title: 'Enter amount',
    description: 'Type how much. Add a note if you want.',
  },
  {
    step: '03',
    title: 'Confirm & done',
    description: 'Money moves instantly from your wallet to theirs.',
  },
];

const stats = [
  { value: '50,000+', label: 'Active users' },
  { value: '2B+', label: 'UGX moved' },
  { value: '100K+', label: 'Transactions' },
];

const faqs = [
  {
    question: 'How do I get my @tag?',
    answer: 'Download the app, enter your phone number, and verify with a one-time code. Choose your unique @tag and start receiving money immediately.',
  },
  {
    question: 'What are the fees?',
    answer: 'Sending between CrewvoPay accounts is free. Mobile money withdrawals have a small fee shown before you confirm.',
  },
  {
    question: 'Do payers need the app installed?',
    answer: 'No! Anyone can scan your QR code and pay via MTN MoMo or Airtel Money without installing CrewvoPay.',
  },
  {
    question: 'Is my money secure?',
    answer: 'Yes. Bank-level encryption for all transactions. OTP verification for withdrawals. We never store your PIN or sensitive data on device.',
  },
];

const CrewvoPay = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        <div className="section-container text-center py-32">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="text-primary font-medium text-sm">Works with MTN MoMo & Airtel Money</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="mb-8 max-w-4xl mx-auto">
              The way money
              <br />
              <span className="text-muted-foreground">should move.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-normal">
              Send to friends. Request what you're owed. Split bills. 
              Collect from groups. All with your personal QR code.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="text-base px-8 h-14 rounded-full group hover-glow"
              >
                <a href="https://crewvopay.com/auth" target="_blank" rel="noopener noreferrer">
                  Get your @tag
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-base px-8 h-14 rounded-full border-border"
              >
                <Link to="/contact">Talk to us</Link>
              </Button>
            </div>
          </ScrollReveal>
          
          {/* Trust indicators */}
          <ScrollReveal delay={400}>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                50,000+ users
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Bank-level security
              </span>
              <span className="flex items-center gap-2">
                <QrCode className="w-4 h-4" />
                Scan to Pay
              </span>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/10 to-transparent blur-3xl pointer-events-none pulse-glow" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-primary/5 to-transparent blur-3xl pointer-events-none" />
      </section>

      {/* Features Grid */}
      <section className="py-32 md:py-40 bg-card">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="mb-6">Everything you need to manage money</h2>
              <p className="text-lg text-muted-foreground">
                Not just collecting — sending, requesting, splitting, and saving. All in one place.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 50}>
                <div className="group p-8 rounded-[2rem] border border-border bg-background hover-lift h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="mb-3 text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 md:py-40">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <ScrollReveal>
                <p className="text-primary font-medium text-sm tracking-wide uppercase mb-6">
                  Pay anyone
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="mb-10">Send money in seconds</h2>
              </ScrollReveal>
              
              <div className="space-y-8">
                {howItWorks.map((step, index) => (
                  <ScrollReveal key={step.step} delay={150 + index * 100}>
                    <div className="flex gap-6">
                      <div className="text-4xl font-bold text-primary/20">{step.step}</div>
                      <div>
                        <h3 className="text-lg mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal delay={100}>
              <div className="relative mx-auto w-[280px] float">
                {/* Outer glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 rounded-[3rem] blur-2xl scale-110 pulse-glow" />
                
                <div className="relative bg-card backdrop-blur-xl rounded-[3rem] p-3 border border-border shadow-2xl hover-glow transition-all duration-500">
                  <div className="bg-background rounded-[2.5rem] aspect-[9/19] flex flex-col overflow-hidden">
                    {/* Screen content - Payment UI */}
                    <div className="w-full h-full bg-gradient-to-b from-primary/5 to-background p-6 flex flex-col">
                      <div className="text-center mb-6 pt-4">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                          <span className="text-primary font-bold text-xl">S</span>
                        </div>
                        <p className="font-medium text-sm">@Sarah</p>
                      </div>
                      
                      <div className="flex-1 flex flex-col items-center justify-center">
                        <p className="text-muted-foreground text-xs mb-2">Send amount</p>
                        <p className="text-3xl font-bold mb-1">50,000</p>
                        <p className="text-muted-foreground text-xs">UGX</p>
                      </div>
                      
                      <div className="bg-primary rounded-xl py-3 text-center">
                        <span className="text-primary-foreground font-medium text-sm">Send Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* QR Code Feature */}
      <section className="py-32 md:py-40 bg-card">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <div className="relative mx-auto w-[280px] float">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 rounded-[3rem] blur-2xl scale-110 pulse-glow" />
                
                <div className="relative bg-background backdrop-blur-xl rounded-[3rem] p-3 border border-border shadow-2xl hover-glow transition-all duration-500">
                  <div className="bg-card rounded-[2.5rem] aspect-[9/19] flex flex-col overflow-hidden p-6">
                    <div className="text-center mb-4 pt-4">
                      <p className="text-xs text-muted-foreground">Your QR Code</p>
                    </div>
                    
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-32 h-32 bg-foreground rounded-2xl flex items-center justify-center">
                        <QrCode className="w-20 h-20 text-background" />
                      </div>
                    </div>
                    
                    <div className="text-center pb-4">
                      <p className="font-medium">@YourName</p>
                      <p className="text-xs text-muted-foreground mt-1">Scan to pay</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <p className="text-primary font-medium text-sm tracking-wide uppercase mb-6">
                  Personal QR Code
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="mb-6">Your face is your payment address</h2>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Get your unique QR code and @tag. Share it anywhere — friends scan and pay you directly. No phone number swapping. No awkward money asks.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Works for in-person and online payments</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Payers don't need the app installed</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Receive to MTN MoMo or Airtel Money</span>
                  </li>
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={250}>
                <a 
                  href="https://crewvopay.com/auth" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                >
                  Get your QR code
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-border">
        <div className="section-container">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-32 md:py-40">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-6">
                Security First
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <h2 className="mb-6">Security built into every transaction</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Your money is protected with bank-level encryption, real-time monitoring, 
                and secure Mobile Money integration. We never store your PIN.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={250}>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-card rounded-full text-sm border border-border">
                  End-to-end encryption
                </span>
                <span className="px-4 py-2 bg-card rounded-full text-sm border border-border">
                  OTP verification
                </span>
                <span className="px-4 py-2 bg-card rounded-full text-sm border border-border">
                  No data on device
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 md:py-40 bg-card">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <ScrollReveal>
                <h2 className="mb-6">Common questions</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Everything you need to know about CrewvoPay.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="p-6 rounded-2xl bg-background border border-border">
                  <p className="font-medium mb-2">Need more help?</p>
                  <a 
                    href="mailto:support@crewvopay.com"
                    className="text-primary hover:underline"
                  >
                    support@crewvopay.com
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border">
                    <AccordionTrigger className="text-left hover:no-underline py-5 text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="mb-6">Get paid your way</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
              Your @tag. Your QR. Your money — moving the way it should.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="text-base px-8 h-14 rounded-full group hover-glow"
              >
                <a href="https://crewvopay.com/auth" target="_blank" rel="noopener noreferrer">
                  Claim your @tag
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-sm text-muted-foreground mt-8">
              Available on iOS & Android
            </p>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default CrewvoPay;
