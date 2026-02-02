import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Code, Shield, Zap, Database, Cpu, Globe, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const solutions = [
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Build and deploy on scalable, secure cloud infrastructure designed for enterprise workloads.',
    features: ['Auto-scaling', 'Load balancing', 'Multi-region deployment', 'Disaster recovery'],
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Full-stack software development for web, mobile, and enterprise applications.',
    features: ['Web applications', 'Mobile apps', 'API development', 'Legacy modernization'],
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise security architecture with regulatory compliance frameworks.',
    features: ['SOC 2 compliance', 'GDPR ready', 'Penetration testing', 'Security audits'],
  },
  {
    icon: Zap,
    title: 'API & Integrations',
    description: 'Connect systems, automate workflows, and build seamless integrations.',
    features: ['REST & GraphQL', 'Webhooks', 'Third-party integrations', 'ETL pipelines'],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Data infrastructure, analytics pipelines, and business intelligence solutions.',
    features: ['Data warehousing', 'Real-time analytics', 'ML pipelines', 'Visualization'],
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Intelligent automation and machine learning solutions for your business.',
    features: ['Custom ML models', 'NLP solutions', 'Computer vision', 'Predictive analytics'],
  },
  {
    icon: Globe,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation strategy and implementation.',
    features: ['Process automation', 'System modernization', 'Cloud migration', 'Change management'],
  },
  {
    icon: Lock,
    title: 'Identity & Access',
    description: 'Secure identity management and access control for your applications.',
    features: ['SSO implementation', 'Multi-factor auth', 'Role-based access', 'Audit logging'],
  },
];

const Solutions = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="section-container">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Solutions
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="mb-6">
                Technology solutions
                <br />
                <span className="text-muted-foreground">for modern business.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-muted-foreground mb-10">
                From infrastructure to applications, we provide end-to-end 
                software solutions that drive business outcomes.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Button 
                asChild 
                size="lg" 
                className="text-base px-8 h-14 rounded-lg group"
              >
                <Link to="/contact">
                  Talk to an expert
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <ScrollReveal key={solution.title} delay={index * 50}>
                <div className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors h-full">
                  <solution.icon className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="text-background mb-6">Let's discuss your project.</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-background/60 text-lg mb-10 max-w-xl mx-auto">
              Our team is ready to help you find the right solution for your business needs.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Button 
              asChild 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90 text-base px-8 h-14 rounded-lg group"
            >
              <Link to="/contact">
                Contact us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default Solutions;
