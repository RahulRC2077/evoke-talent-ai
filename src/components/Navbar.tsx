import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-display text-foreground">
              artiq
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/browse" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Talent
            </Link>
            <Link to="/how-it-works" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              How it Works
            </Link>
            <Link to="/pricing" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/bookings" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Bookings
            </Link>
            <Link to="/messages" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Messages
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild className="text-foreground">
              <Link to="/auth">Log In</Link>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link to="/auth">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
