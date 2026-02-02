import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { FloatingNav } from '@/components/ui/FloatingNav';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <FloatingNav />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
