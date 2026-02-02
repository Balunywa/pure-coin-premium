import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="text-lg font-semibold tracking-tight text-foreground">
            Pure Coin
          </Link>

          {/* Links */}
          <div className="flex items-center gap-8">
            <Link 
              to="/crewvopay" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              CrewvoPay
            </Link>
            <Link 
              to="/contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link 
              to="/legal" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Legal
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Pure Coin
          </p>
        </div>
      </div>
    </footer>
  );
};
