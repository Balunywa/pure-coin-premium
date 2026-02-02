import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Eye, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const features = [
  {
    icon: Zap,
    title: 'Send & request in seconds',
    description: 'Instant peer-to-peer transfers. No waiting, no complications. Just fast, reliable money movement.',
  },
  {
    icon: Eye,
    title: 'Virtual balance you can track',
    description: 'Keep a clear view of your funds. See every transaction, understand every movement.',
  },
  {
    icon: Building,
    title: 'Built on Uganda mobile money',
    description: 'Leverage the infrastructure you already trust. Fund your wallet directly from your mobile money account.',
  },
];

const faqs = [
  {
    question: 'How do I create a CrewvoPay account?',
    answer: 'Download the CrewvoPay app and follow the simple registration process. You will need a valid mobile money account to fund your wallet.',
  },
  {
    question: 'What are the transaction limits?',
    answer: 'Transaction limits are set based on your verification level. Contact our support team for specific details about your account.',
  },
  {
    question: 'How long do transfers take?',
    answer: 'CrewvoPay transfers are instant. Send money to anyone with a CrewvoPay account and they will receive it immediately.',
  },
  {
    question: 'Is my money safe?',
    answer: 'Yes. We use industry-standard security practices to protect your funds and personal information. Your data is encrypted and stored securely.',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach our support team at support@crewvopay.ug or through the in-app support feature. We typically respond within 24 hours.',
  },
];

const CrewvoPay = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="section-container">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
              CrewvoPay
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
              A mobile-money powered wallet for fast P2P transfers and virtual balances. Simple. Fast. Reliable.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Button asChild size="lg" className="group">
              <Link to="/contact">
                Get started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 border-t border-border/30">
        <div className="section-container space-y-20 md:space-y-32">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 100}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <feature.icon className="w-10 h-10 text-primary mb-6" />
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <GlassCard className="aspect-[4/3] flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-secondary/50 flex items-center justify-center">
                      <feature.icon className="w-12 h-12 text-muted-foreground" />
                    </div>
                  </GlassCard>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Support & FAQ */}
      <section className="py-20 md:py-32 border-t border-border/30">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Support */}
            <div>
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                  Support
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <GlassCard className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Need help?</h3>
                  <p className="text-muted-foreground mb-4">
                    Our support team is here to assist you with any questions or issues.
                  </p>
                  <a
                    href="mailto:support@crewvopay.ug"
                    className="text-primary hover:opacity-80 transition-opacity font-medium"
                  >
                    support@crewvopay.ug
                  </a>
                </GlassCard>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-sm text-muted-foreground">
                  Response time: Within 24 hours
                </p>
              </ScrollReveal>
            </div>

            {/* FAQ */}
            <div>
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                  Frequently asked questions
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                      <AccordionTrigger className="text-left hover:no-underline hover:text-foreground">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
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
    </PageLayout>
  );
};

export default CrewvoPay;
