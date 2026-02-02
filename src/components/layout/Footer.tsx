import { Link } from 'react-router-dom';

const footerLinks = [
  { name: 'Privacy', path: '/legal' },
  { name: 'Terms', path: '/legal' },
  { name: 'Contact', path: '/contact' },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/50">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link
              to="/"
              className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
            >
              Pure Coin
            </Link>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Pure Coin Innovations Ltd.</p>
              <p>Kampala, Uganda</p>
              <p>
                <a
                  href="mailto:support@purecoin.ug"
                  className="hover:text-foreground transition-colors"
                >
                  support@purecoin.ug
                </a>
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="md:text-right">
            <nav className="flex flex-wrap gap-6 md:justify-end">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pure Coin Innovations Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
