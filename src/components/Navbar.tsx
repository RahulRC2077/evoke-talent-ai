import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Music, User, MessageSquare, Calendar } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <Music className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ARTIQ
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/browse" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Browse Artists
            </Link>
            <Link to="/bookings" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              My Bookings
            </Link>
            <Link to="/messages" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Messages
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/auth">Sign In</Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/auth">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
