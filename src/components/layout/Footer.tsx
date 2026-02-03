import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '@fontsource/space-grotesk/500.css';
import logo from '@/assets/logo-3d.png';

const footerLinks = {
  products: [
    { name: 'CrewvoPay', href: '/products' },
    { name: 'CrewvoApp', href: '/products' },
  ],
  company: [
    { name: 'Contact', href: '/contact' },
    { name: 'Legal', href: '/legal' },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="section-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 text-foreground hover:opacity-80 transition-opacity">
              <img src={logo} alt="Pure Coin" className="w-7 h-7" />
              <span 
                className="text-lg font-semibold tracking-[-0.02em]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Pure Coin
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mt-4 max-w-xs leading-[1.7]">
              Engineering excellence.<br />Software that sets the standard.
            </p>
          </div>

          {/* Products */}
          <div>
            <p className="font-medium text-sm mb-4 text-foreground">Products</p>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-medium text-sm mb-4 text-foreground">Company</p>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Pure Coin Innovations. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link 
              to="/legal" 
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/legal" 
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
