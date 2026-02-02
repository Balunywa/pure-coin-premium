import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'CrewvoPay', path: '/crewvopay' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHeroPage = location.pathname === '/';
  const isDarkSection = location.pathname === '/crewvopay';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const getNavStyles = () => {
    if (isScrolled) {
      return 'bg-background/80 backdrop-blur-xl border-b border-border/50';
    }
    return 'bg-transparent';
  };

  const getLinkStyles = (isActive: boolean) => {
    const baseStyles = 'text-sm font-medium transition-colors';
    if (isActive) {
      return `${baseStyles} text-foreground`;
    }
    return `${baseStyles} text-muted-foreground hover:text-foreground`;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavStyles()}`}>
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-lg font-semibold tracking-tight text-foreground hover:opacity-70 transition-opacity"
          >
            Pure Coin
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={getLinkStyles(location.pathname === link.path)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 -mr-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="section-container py-6 space-y-1">
            <Link
              to="/"
              className={`block py-3 text-base font-medium transition-colors ${
                location.pathname === '/' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 text-base font-medium transition-colors ${
                  location.pathname === link.path ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
