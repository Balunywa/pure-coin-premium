import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Products', path: '/crewvopay' },
  { name: 'Company', path: '/company' },
  { name: 'Legal', path: '/legal' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHeroPage = location.pathname === '/';

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

  // Dynamic styling based on page and scroll state
  const getNavStyles = () => {
    if (isScrolled) {
      return 'bg-background/95 backdrop-blur-xl border-b border-border';
    }
    if (isHeroPage) {
      return 'bg-transparent';
    }
    return 'bg-background border-b border-border';
  };

  const getLinkStyles = (isActive: boolean) => {
    if (isHeroPage && !isScrolled) {
      return isActive ? 'text-foreground' : 'text-foreground/70 hover:text-foreground';
    }
    return isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground';
  };

  const getLogoStyles = () => {
    if (isHeroPage && !isScrolled) {
      return 'text-foreground';
    }
    return 'text-foreground';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavStyles()}`}>
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`text-xl font-bold tracking-tight hover:opacity-80 transition-opacity ${getLogoStyles()}`}
          >
            Pure Coin
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${getLinkStyles(location.pathname === link.path)}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button asChild size="sm" className="px-6">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 -mr-2 rounded-lg transition-colors ${
              isHeroPage && !isScrolled 
                ? 'text-foreground hover:bg-foreground/10' 
                : 'text-foreground hover:bg-secondary'
            }`}
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
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
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
            <div className="pt-4">
              <Button asChild className="w-full">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
