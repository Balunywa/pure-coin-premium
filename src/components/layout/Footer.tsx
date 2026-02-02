import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="text-sm font-medium text-foreground">
            Pure Coin
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              to="/products" 
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <Link 
              to="/contact" 
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link 
              to="/legal" 
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              Legal
            </Link>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};
