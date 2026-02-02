import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PhoneMockupProps {
  children?: ReactNode;
  className?: string;
}

export const PhoneMockup = ({ children, className }: PhoneMockupProps) => {
  return (
    <div
      className={cn(
        'relative w-[280px] md:w-[320px] aspect-[9/19] bg-card rounded-[2.5rem] border-[8px] border-secondary/80 shadow-2xl overflow-hidden',
        className
      )}
    >
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-secondary rounded-full z-10" />
      
      {/* Screen content */}
      <div className="w-full h-full bg-background rounded-[2rem] overflow-hidden">
        {children || (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center space-y-4 px-6">
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">C</span>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-secondary rounded-full w-3/4 mx-auto" />
                <div className="h-3 bg-secondary rounded-full w-1/2 mx-auto" />
              </div>
              <div className="pt-4 space-y-3">
                <div className="h-12 bg-secondary/50 rounded-xl" />
                <div className="h-12 bg-secondary/50 rounded-xl" />
                <div className="h-12 bg-primary/30 rounded-xl" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
