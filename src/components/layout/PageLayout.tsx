import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { CustomCursor } from '@/components/ui/CustomCursor';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <FloatingNav />
      <Navbar />
      <main className="flex-1 overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
};
