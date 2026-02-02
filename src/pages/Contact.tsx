import { useState } from 'react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
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
      description: "We'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
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
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="section-container text-center py-32">
          <ScrollReveal>
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-6">
              Contact
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="mb-8 max-w-3xl mx-auto">
              Let's talk.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto font-normal">
              Questions, partnerships, or just saying hi.
              We're here.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-32 md:pb-40">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-3">
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
                    className="h-14 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-3">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-14 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-3">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="resize-none rounded-xl"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto text-base px-8 h-14 rounded-full group"
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                  {!isSubmitting && (
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  )}
                </Button>
              </form>
            </ScrollReveal>

            {/* Contact Info */}
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <div className="p-8 rounded-3xl bg-muted">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a 
                        href="mailto:hello@purecoin.ug" 
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        hello@purecoin.ug
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-muted-foreground">
                        Kampala, Uganda
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="p-8 rounded-3xl bg-foreground text-background">
                  <h3 className="text-background mb-3">CrewvoPay support</h3>
                  <p className="text-background/60 mb-4">
                    Need help with your account or a transaction?
                  </p>
                  <a 
                    href="mailto:support@crewvopay.com"
                    className="text-primary font-medium hover:underline"
                  >
                    support@crewvopay.com
                  </a>
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
