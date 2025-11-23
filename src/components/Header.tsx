import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="group">
            <div className="flex flex-col hover-underline py-0.5">
              <h1 className="text-3xl font-serif font-semibold tracking-tight text-primary">
                Coffee Native
              </h1>
              <h1 className="text-sm  text-charcoal font-serif font-semibold tracking-tight pl-1">
                the cultivated mind
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/archive"
              className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors hover-underline"
            >
              The Collection
            </Link>
            <Link
              to="/fields"
              className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors hover-underline"
            >
              The Four Fields
            </Link>
            <Link
              to="/about"
              className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors hover-underline"
            >
              About
            </Link>
            {/* <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Subscribe
            </Button> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <Link
              to="/archive"
              className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Collection
            </Link>
            <Link
              to="/fields"
              className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Four Fields
            </Link>
            <Link
              to="/about"
              className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Subscribe
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
