import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { cn } from '@/lib/utils';

const tabs = ['Privacy Policy', 'Terms of Service'];

const Legal = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="section-container">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
              Legal
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Transparency and trust are core to how we operate.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-20 md:pb-32">
        <div className="section-container">
          <ScrollReveal>
            <div className="flex gap-2 mb-8">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                    activeTab === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary'
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <GlassCard className="prose prose-invert max-w-none">
              {activeTab === 0 ? (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
                  <p className="text-muted-foreground">Last updated: February 2026</p>

                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2">1. Information We Collect</h3>
                      <p>We collect information you provide directly to us, including your name, email address, phone number, and mobile money account details when you create an account or use our services.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2">2. How We Use Your Information</h3>
                      <p>We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2">3. Information Sharing</h3>
                      <p>We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy. We may share information with service providers who assist us in operating our platform.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2">4. Data Security</h3>
                      <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2">5. Your Rights</h3>
                      <p>You have the right to access, update, or delete your personal information. You may also opt out of receiving promotional communications from us.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2">6. Contact Us</h3>
                      <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@purecoin.ug" className="text-primary hover:opacity-80">privacy@purecoin.ug</a></p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
                  <p className="text-muted-foreground">Last updated: February 2026</p>

                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2">1. Acceptance of Terms</h3>
                      <p>By accessing or using CrewvoPay services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2">2. Eligibility</h3>
                      <p>You must be at least 18 years old and have a valid mobile money account in Uganda to use our services. By using CrewvoPay, you represent that you meet these requirements.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2">3. Account Responsibilities</h3>
                      <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2">4. Prohibited Activities</h3>
                      <p>You may not use our services for any illegal purposes, to transmit harmful content, or to engage in fraudulent activities. We reserve the right to suspend accounts that violate these terms.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2">5. Limitation of Liability</h3>
                      <p>Pure Coin shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount of fees paid by you in the preceding 12 months.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2">6. Changes to Terms</h3>
                      <p>We may update these terms from time to time. We will notify you of any material changes by posting the new terms on our platform and updating the "Last updated" date.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2">7. Contact</h3>
                      <p>For questions about these Terms, contact us at <a href="mailto:legal@purecoin.ug" className="text-primary hover:opacity-80">legal@purecoin.ug</a></p>
                    </div>
                  </div>
                </div>
              )}
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 md:py-32 border-t border-border/30">
        <div className="section-container">
          <div className="max-w-xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                Need help?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-muted-foreground mb-6">
                If you have questions about our policies or need assistance with your account, our support team is here to help.
              </p>
              <div className="space-y-2">
                <p className="text-foreground">
                  <span className="text-muted-foreground">Email: </span>
                  <a href="mailto:support@purecoin.ug" className="text-primary hover:opacity-80 transition-opacity">
                    support@purecoin.ug
                  </a>
                </p>
                <p className="text-foreground">
                  <span className="text-muted-foreground">Phone: </span>
                  <a href="tel:+256700000000" className="text-primary hover:opacity-80 transition-opacity">
                    +256 700 000 000
                  </a>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Legal;
