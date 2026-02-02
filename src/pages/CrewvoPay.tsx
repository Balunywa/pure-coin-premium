import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
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
    title: 'Instant transfers',
    description: 'Money moves in seconds between accounts. No waiting. No friction.',
    details: ['P2P transfers', 'Real-time notifications', 'Full transaction history'],
  },
  {
    title: 'Mobile money built-in',
    description: 'Connect MTN MoMo or Airtel Money. Fund your wallet instantly.',
    details: ['MTN Mobile Money', 'Airtel Money', 'One-tap top-up'],
  },
  {
    title: 'Track everything',
    description: 'See exactly where your money goes. Clear insights. Full control.',
    details: ['Live balance', 'Spending categories', 'Export statements'],
  },
];

const faqs = [
  {
    question: 'How do I sign up?',
    answer: 'Download the app, enter your phone number, and verify with a one-time code. Start receiving money immediately.',
  },
  {
    question: 'What are the fees?',
    answer: 'Sending between CrewvoPay accounts is free. Mobile money withdrawals have a small fee shown before you confirm.',
  },
  {
    question: 'How fast are transfers?',
    answer: 'Transfers between CrewvoPay users are instant. Mobile money deposits complete in under 30 seconds.',
  },
  {
    question: 'Is my money secure?',
    answer: 'Yes. Bank-level encryption for all transactions. Multi-factor authentication protects your funds.',
  },
];

const CrewvoPay = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="section-container text-center py-32">
          <ScrollReveal>
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-6">
              CrewvoPay
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="mb-8 max-w-3xl mx-auto">
              The wallet that
              <br />
              <span className="text-muted-foreground">keeps up.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-normal">
              Send money instantly. Track every transaction. 
              A payment experience designed for real life.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="text-base px-8 h-14 rounded-full group"
              >
                <a href="https://crewvopay.com" target="_blank" rel="noopener noreferrer">
                  Get the app
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-base px-8 h-14 rounded-full"
              >
                <Link to="/contact">Talk to us</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Subtle gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/5 to-transparent blur-3xl pointer-events-none" />
      </section>

      {/* Features */}
      <section className="py-32 md:py-40">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="mb-6">How it works</h2>
              <p className="text-lg text-muted-foreground">
                Simple, fast, reliable. Money movement as it should be.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <div className="p-8 rounded-3xl border border-border bg-card hover-lift h-full">
                  <div className="text-5xl font-semibold text-primary/20 mb-6">
                    0{index + 1}
                  </div>
                  <h3 className="mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-32 md:py-40 bg-foreground text-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <p className="text-primary font-medium text-sm tracking-wide uppercase mb-6">
                  Available now
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-background mb-6">
                  Download on iOS & Android
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <p className="text-xl text-background/60 mb-8 leading-relaxed">
                  Join thousands of users already moving money 
                  faster with CrewvoPay.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
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
              <div className="relative mx-auto w-[260px]">
                <div className="bg-background/10 backdrop-blur-xl rounded-[3rem] p-3 border border-background/20">
                  <div className="bg-background rounded-[2.5rem] aspect-[9/19] flex flex-col items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-b from-primary/10 to-background flex flex-col items-center justify-center p-8">
                      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-4 shadow-lg">
                        <span className="text-primary-foreground font-bold text-2xl">C</span>
                      </div>
                      <p className="font-semibold text-foreground">CrewvoPay</p>
                      <p className="text-muted-foreground text-sm mt-1">Move money fast</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 md:py-40">
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
                <div className="p-6 rounded-2xl bg-muted">
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
      <section className="py-32 md:py-40 bg-muted">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="mb-6">Ready to try CrewvoPay?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
              Experience the future of mobile payments.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Button 
              asChild 
              size="lg" 
              className="text-base px-8 h-14 rounded-full group"
            >
              <a href="https://crewvopay.com" target="_blank" rel="noopener noreferrer">
                Get started
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default CrewvoPay;
