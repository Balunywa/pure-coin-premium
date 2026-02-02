import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Legal = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="min-h-[40vh] flex items-center justify-center">
        <div className="section-container text-center py-32">
          <ScrollReveal>
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-6">
              Legal
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="mb-6 max-w-3xl mx-auto">
              The fine print.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-muted-foreground">
              We keep it straightforward.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 md:pb-40">
        <div className="section-container">
          <ScrollReveal>
            <Tabs defaultValue="privacy" className="w-full">
              <TabsList className="w-full sm:w-auto mb-12 h-auto p-1.5 bg-muted rounded-full">
                <TabsTrigger 
                  value="privacy" 
                  className="rounded-full px-8 py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  Privacy Policy
                </TabsTrigger>
                <TabsTrigger 
                  value="terms"
                  className="rounded-full px-8 py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  Terms of Service
                </TabsTrigger>
              </TabsList>

              <TabsContent value="privacy" className="mt-0">
                <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
                  <p className="text-sm text-muted-foreground mb-10">
                    Last updated: January 2025
                  </p>

                  <h2 className="text-2xl font-semibold mb-6">Privacy Policy</h2>
                  <p className="text-muted-foreground mb-10 leading-relaxed">
                    Pure Coin Innovations Ltd ("we", "our", "us") respects your privacy. 
                    This policy explains how we collect, use, and protect your information 
                    when you use CrewvoPay.
                  </p>

                  <div className="space-y-10">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Information We Collect</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Phone number and name for account creation</li>
                        <li>• Transaction data when you send or receive money</li>
                        <li>• Device information for security purposes</li>
                        <li>• Support correspondence when you contact us</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">How We Use Your Information</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• To provide and improve our services</li>
                        <li>• To process transactions you initiate</li>
                        <li>• To communicate with you about your account</li>
                        <li>• To detect and prevent fraud</li>
                        <li>• To comply with legal requirements</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Data Security</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We use industry-standard encryption to protect your data. 
                        All transactions are secured with TLS encryption. 
                        We never store your mobile money PIN.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Your Rights</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You can request access to your data, correction of inaccuracies, 
                        or deletion of your account at any time. 
                        Contact us at{' '}
                        <a href="mailto:privacy@purecoin.ug" className="text-primary hover:underline">
                          privacy@purecoin.ug
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="terms" className="mt-0">
                <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
                  <p className="text-sm text-muted-foreground mb-10">
                    Last updated: January 2025
                  </p>

                  <h2 className="text-2xl font-semibold mb-6">Terms of Service</h2>
                  <p className="text-muted-foreground mb-10 leading-relaxed">
                    These terms govern your use of CrewvoPay, operated by Pure Coin Innovations Ltd. 
                    By using our service, you agree to these terms.
                  </p>

                  <div className="space-y-10">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Eligibility</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You must be at least 18 years old and a resident of Uganda to use CrewvoPay. 
                        You must have a valid mobile money account.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Account Responsibility</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You are responsible for maintaining the security of your account. 
                        Keep your credentials private. Report unauthorized access immediately.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Acceptable Use</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Do not use the service for illegal purposes</li>
                        <li>• Do not attempt to circumvent security measures</li>
                        <li>• Do not interfere with other users' accounts</li>
                        <li>• Do not submit false or misleading information</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Fees</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Fees are displayed before you confirm each transaction. 
                        We may update fees with reasonable notice. 
                        Current fees are always visible in the app.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Disputes</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        If you believe a transaction was processed incorrectly, contact us within 30 days. 
                        We'll investigate and respond within 10 business days.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Contact</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Legal questions? Email{' '}
                        <a href="mailto:legal@purecoin.ug" className="text-primary hover:underline">
                          legal@purecoin.ug
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default Legal;
