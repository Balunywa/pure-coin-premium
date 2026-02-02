import { Link } from 'react-router-dom';

const footerLinks = {
  product: [
    { name: 'CrewvoPay', path: '/crewvopay' },
    { name: 'Features', path: '/crewvopay' },
    { name: 'Pricing', path: '/crewvopay' },
  ],
  company: [
    { name: 'About', path: '/company' },
    { name: 'Careers', path: '/company' },
    { name: 'Contact', path: '/contact' },
  ],
  legal: [
    { name: 'Privacy', path: '/legal' },
    { name: 'Terms', path: '/legal' },
    { name: 'Support', path: '/contact' },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-xl font-bold tracking-tight">
              Pure Coin
            </Link>
            <p className="text-sm text-muted-foreground mt-4 max-w-xs">
              Building the future of money movement in Uganda.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pure Coin Innovations Ltd. Kampala, Uganda.
          </p>
          <p className="text-sm text-muted-foreground">
            support@purecoin.ug
          </p>
        </div>
      </div>
    </footer>
  );
};
