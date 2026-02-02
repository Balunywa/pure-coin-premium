import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Legal = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="section-container">
          <ScrollReveal>
            <h1 className="mb-6">Legal</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              The fine print. We keep it straightforward.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 md:pb-32">
        <div className="section-container">
          <ScrollReveal>
            <Tabs defaultValue="privacy" className="w-full">
              <TabsList className="w-full sm:w-auto mb-8 h-auto p-1 bg-muted rounded-xl">
                <TabsTrigger 
                  value="privacy" 
                  className="rounded-lg px-6 py-3 data-[state=active]:bg-background"
                >
                  Privacy Policy
                </TabsTrigger>
                <TabsTrigger 
                  value="terms"
                  className="rounded-lg px-6 py-3 data-[state=active]:bg-background"
                >
                  Terms of Service
                </TabsTrigger>
              </TabsList>

              <TabsContent value="privacy" className="mt-0">
                <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-sm text-muted-foreground mb-8">
                      Last updated: January 2025
                    </p>

                    <h2 className="text-2xl font-bold mt-0 mb-4">Privacy Policy</h2>
                    <p className="text-muted-foreground mb-6">
                      Pure Coin Innovations Ltd ("we", "our", "us") respects your privacy. This policy explains how we collect, use, and protect your information when you use CrewvoPay.
                    </p>

                    <h3 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h3>
                    <p className="text-muted-foreground mb-4">We collect information you provide directly:</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                      <li>Phone number and name for account creation</li>
                      <li>Transaction data when you send or receive money</li>
                      <li>Device information for security purposes</li>
                      <li>Support correspondence when you contact us</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                      <li>To provide and improve our services</li>
                      <li>To process transactions you initiate</li>
                      <li>To communicate with you about your account</li>
                      <li>To detect and prevent fraud</li>
                      <li>To comply with legal requirements</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-8 mb-4">Data Security</h3>
                    <p className="text-muted-foreground mb-6">
                      We use industry-standard encryption to protect your data. All transactions are secured with TLS encryption. We never store your mobile money PIN.
                    </p>

                    <h3 className="text-xl font-semibold mt-8 mb-4">Your Rights</h3>
                    <p className="text-muted-foreground mb-6">
                      You can request access to your data, correction of inaccuracies, or deletion of your account at any time. Contact us at privacy@purecoin.ug.
                    </p>

                    <h3 className="text-xl font-semibold mt-8 mb-4">Contact</h3>
                    <p className="text-muted-foreground">
                      Questions about privacy? Email us at{' '}
                      <a href="mailto:privacy@purecoin.ug" className="text-primary hover:underline">
                        privacy@purecoin.ug
                      </a>
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="terms" className="mt-0">
                <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-sm text-muted-foreground mb-8">
                      Last updated: January 2025
                    </p>

                    <h2 className="text-2xl font-bold mt-0 mb-4">Terms of Service</h2>
                    <p className="text-muted-foreground mb-6">
                      These terms govern your use of CrewvoPay, operated by Pure Coin Innovations Ltd. By using our service, you agree to these terms.
                    </p>

                    <h3 className="text-xl font-semibold mt-8 mb-4">Eligibility</h3>
                    <p className="text-muted-foreground mb-6">
                      You must be at least 18 years old and a resident of Uganda to use CrewvoPay. You must have a valid mobile money account.
                    </p>

                    <h3 className="text-xl font-semibold mt-8 mb-4">Account Responsibility</h3>
                    <p className="text-muted-foreground mb-6">
                      You are responsible for maintaining the security of your account. Keep your credentials private. Report unauthorized access immediately.
                    </p>

                    <h3 className="text-xl font-semibold mt-8 mb-4">Acceptable Use</h3>
                    <p className="text-muted-foreground mb-4">You agree not to:</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                      <li>Use the service for illegal purposes</li>
                      <li>Attempt to circumvent security measures</li>
                      <li>Interfere with other users' accounts</li>
                      <li>Submit false or misleading information</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-8 mb-4">Fees</h3>
                    <p className="text-muted-foreground mb-6">
                      Fees are displayed before you confirm each transaction. We may update fees with reasonable notice. Current fees are always visible in the app.
                    </p>

                    <h3 className="text-xl font-semibold mt-8 mb-4">Disputes</h3>
                    <p className="text-muted-foreground mb-6">
                      If you believe a transaction was processed incorrectly, contact us within 30 days. We'll investigate and respond within 10 business days.
                    </p>

                    <h3 className="text-xl font-semibold mt-8 mb-4">Limitation of Liability</h3>
                    <p className="text-muted-foreground mb-6">
                      We're not liable for losses caused by factors outside our control, including mobile network outages or unauthorized account access due to your negligence.
                    </p>

                    <h3 className="text-xl font-semibold mt-8 mb-4">Contact</h3>
                    <p className="text-muted-foreground">
                      Legal questions? Email{' '}
                      <a href="mailto:legal@purecoin.ug" className="text-primary hover:underline">
                        legal@purecoin.ug
                      </a>
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </ScrollReveal>
        </div>
      </section>

      {/* Support CTA */}
      <section className="pb-24 md:pb-32">
        <div className="section-container">
          <ScrollReveal>
            <div className="bg-muted rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Our support team is happy to clarify anything about our policies.
              </p>
              <a 
                href="mailto:support@purecoin.ug"
                className="text-primary font-semibold hover:underline"
              >
                support@purecoin.ug
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default Legal;
