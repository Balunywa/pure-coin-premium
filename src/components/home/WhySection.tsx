import { ScrollReveal } from '@/components/ui/ScrollReveal';

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Support' },
  { value: '50+', label: 'Integrations' },
  { value: 'SOC 2', label: 'Compliant' },
];

export const WhySection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <ScrollReveal>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Why Pure Coin
              </p>
              <h2 className="mb-6">
                Enterprise-ready
                <br />from day one.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We build software with enterprise requirements baked in—not bolted on. 
                Security, scalability, and reliability are foundational to everything we create.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Security-first architecture</p>
                    <p className="text-muted-foreground text-sm">Built to meet enterprise security and compliance standards.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Scalable infrastructure</p>
                    <p className="text-muted-foreground text-sm">Designed to grow with your business, from startup to enterprise.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Expert engineering team</p>
                    <p className="text-muted-foreground text-sm">Engineers with experience at leading technology companies.</p>
                  </div>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="p-8 rounded-2xl border border-border bg-muted/30 text-center"
                  >
                    <p className="text-4xl font-semibold text-primary mb-2">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
