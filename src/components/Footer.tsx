import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-secondary text-paper border-t border-paper-dark/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-gold">
              The Cultivated Mind
            </h3>
            <p className="text-sm font-body text-paper-dark leading-relaxed">
              Earned wisdom from thirty years of coffee farming, 
              governance, and building things that last.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-semibold mb-4 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <Link to="/archive" className="text-paper-dark hover:text-gold transition-colors hover-underline">
                  The Collection
                </Link>
              </li>
              <li>
                <Link to="/fields" className="text-paper-dark hover:text-gold transition-colors hover-underline">
                  The Four Fields
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-paper-dark hover:text-gold transition-colors hover-underline">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <a href="#" className="text-paper-dark hover:text-gold transition-colors hover-underline">
                  Subscribe
                </a>
              </li>
              <li>
                <a href="#" className="text-paper-dark hover:text-gold transition-colors hover-underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-paper-dark hover:text-gold transition-colors hover-underline">
                  Guest Submissions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold mb-4 text-sm uppercase tracking-wider">
              Philosophy
            </h4>
            <p className="text-sm font-body text-paper-dark leading-relaxed italic">
              "In a world of performance, this is practice. 
              In a sea of noise, this is signal."
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-paper-dark/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-sans text-paper-dark">
          <p>© {currentYear} The Cultivated Mind. All wisdom earned.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors hover-underline">
              Privacy
            </a>
            <a href="#" className="hover:text-gold transition-colors hover-underline">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
