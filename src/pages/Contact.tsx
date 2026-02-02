import { useState } from 'react';
import { Mail, Building2, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message sent',
      description: "Our team will get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="section-container">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Contact
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="mb-6">
                Get in touch
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-muted-foreground">
                Have a project in mind? Let's discuss how we can help 
                you build, scale, and secure your technology.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 rounded-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-12 rounded-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      How can we help?
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="resize-none rounded-lg"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="text-base px-8 h-12 rounded-lg group"
                  >
                    {isSubmitting ? 'Sending...' : 'Send message'}
                    {!isSubmitting && (
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Button>
                </form>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={100}>
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">General inquiries</p>
                      <a 
                        href="mailto:hello@purecoin.com" 
                        className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                      >
                        hello@purecoin.com
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Enterprise sales</p>
                      <a 
                        href="mailto:sales@purecoin.com" 
                        className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                      >
                        sales@purecoin.com
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Product support</p>
                      <a 
                        href="mailto:support@purecoin.com" 
                        className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                      >
                        support@purecoin.com
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <div className="p-6 rounded-2xl bg-muted">
                  <p className="font-medium mb-2">Response time</p>
                  <p className="text-muted-foreground text-sm">
                    Our team typically responds within 24 hours on business days.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
