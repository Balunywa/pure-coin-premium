import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { FadeIn } from '@/components/ui/AnimatedText';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';

const Contact = () => {
  return (
    <PageLayout>
      <section className="min-h-[calc(100svh-80px)] flex items-center relative overflow-hidden">
        <AnimatedBackground />
        
        <div className="section-container py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 mb-8"
              >
                <Mail className="w-10 h-10 text-primary" />
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mb-6">
                <span className="gradient-text">Let's talk.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
                Have a project in mind? We'd love to hear about it.
                <br className="hidden sm:block" />
                Drop us a line and let's create something together.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <motion.a
                href="mailto:hello@purecoin.dev"
                className="group inline-flex items-center gap-4 p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-left">
                  <p className="text-sm text-muted-foreground mb-1">Email us at</p>
                  <p className="text-xl font-medium text-foreground">hello@purecoin.dev</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </div>
              </motion.a>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-muted-foreground text-sm mt-12">
                We typically respond within 24 hours.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
