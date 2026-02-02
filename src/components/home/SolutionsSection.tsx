import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Code, Shield, Zap } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const solutions = [
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable, secure cloud solutions designed for enterprise workloads and high availability.',
    link: '/solutions',
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Full-stack engineering for web, mobile, and enterprise applications.',
    link: '/solutions',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise security architecture with regulatory compliance built in.',
    link: '/solutions',
  },
  {
    icon: Zap,
    title: 'API & Integrations',
    description: 'Seamless integrations that connect your systems and automate workflows.',
    link: '/solutions',
  },
];

export const SolutionsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Header */}
          <div className="lg:col-span-1">
            <ScrollReveal>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Solutions
              </p>
              <h2 className="mb-6">
                Technology that
                <br />drives results.
              </h2>
              <p className="text-muted-foreground mb-8">
                From infrastructure to applications, we build software 
                that transforms how organizations operate.
              </p>
              <Link 
                to="/solutions"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group"
              >
                View all solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <ScrollReveal key={solution.title} delay={index * 50}>
                <Link 
                  to={solution.link}
                  className="group block p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:bg-muted/50 transition-all h-full"
                >
                  <solution.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
