import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Eye, Building, Check } from 'lucide-react';
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
    icon: Zap,
    title: 'Transfer in seconds',
    description: 'Money moves instantly between CrewvoPay accounts. No processing time. No waiting.',
    benefits: ['Instant P2P transfers', 'Real-time notifications', 'Transaction history'],
  },
  {
    icon: Eye,
    title: 'Track every shilling',
    description: 'See exactly where your money goes. Clear balance, clear history, clear insights.',
    benefits: ['Live balance updates', 'Spending categories', 'Export statements'],
  },
  {
    icon: Building,
    title: 'Mobile money integration',
    description: 'Connect MTN MoMo or Airtel Money. Fund your wallet in seconds.',
    benefits: ['MTN Mobile Money', 'Airtel Money', 'Instant top-up'],
  },
];

const faqs = [
  {
    question: 'How do I sign up for CrewvoPay?',
    answer: 'Download the app, enter your phone number, and verify with a one-time code. You can start receiving money immediately.',
  },
  {
    question: 'What are the fees?',
    answer: 'Sending money between CrewvoPay accounts is free. Mobile money withdrawals have a small fee shown before you confirm.',
  },
  {
    question: 'How fast are transfers?',
    answer: 'Transfers between CrewvoPay users are instant. Mobile money deposits and withdrawals typically complete in under 30 seconds.',
  },
  {
    question: 'Is my money secure?',
    answer: 'Yes. We use bank-level encryption for all transactions. Your funds are protected with multi-factor authentication.',
  },
  {
    question: 'What if I need help?',
    answer: 'Reach our support team via the app or email support@crewvopay.ug. We respond within 24 hours, usually much faster.',
  },
];

const CrewvoPay = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="section-container">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-primary font-semibold mb-4">CrewvoPay</p>
              <h1 className="mb-6">
                The wallet that keeps up.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10">
                Send money to anyone in Uganda. Track your balance. 
                Move funds in and out of mobile money. All in one app.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Button asChild size="lg" className="text-base px-8 group">
                <Link to="/contact">
                  Get early access
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <div className="space-y-24 md:space-y-32">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-primary" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-muted rounded-3xl aspect-[4/3] flex items-center justify-center">
                      <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center">
                        <feature.icon className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Support */}
            <div>
              <ScrollReveal>
                <h2 className="mb-6">Need help?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our support team is based in Kampala. Real people who understand the product.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="bg-background rounded-2xl border border-border p-8">
                  <h3 className="mb-4">Get in touch</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:support@crewvopay.ug" className="text-primary font-medium hover:underline">
                        support@crewvopay.ug
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Response time</p>
                      <p className="font-medium">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* FAQ */}
            <div>
              <ScrollReveal>
                <h2 className="mb-8">Common questions</h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border">
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="mb-6">Ready to try CrewvoPay?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Be among the first to experience faster money movement.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Button asChild size="lg" className="text-base px-8 group">
              <Link to="/contact">
                Request access
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default CrewvoPay;
