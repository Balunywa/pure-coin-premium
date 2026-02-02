import { ScrollReveal } from '@/components/ui/ScrollReveal';

const trustedBy = [
  'Enterprise',
  'Startups', 
  'Government',
  'Healthcare',
  'Finance',
  'Education',
];

export const TrustBar = () => {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
              Trusted across industries
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {trustedBy.map((industry) => (
                <span 
                  key={industry}
                  className="text-muted-foreground/60 font-medium text-sm"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
