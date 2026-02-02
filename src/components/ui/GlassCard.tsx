import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        'bg-card/40 backdrop-blur-xl border border-border/40 rounded-2xl p-6 md:p-8',
        hover && 'transition-all duration-300 hover:bg-card/60 hover:border-border/60 hover:scale-[1.02]',
        className
      )}
    >
      {children}
    </div>
  );
};
