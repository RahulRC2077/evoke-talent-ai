import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { LogOut, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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
            {isAuthenticated && (
              <Link to="/browse" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                Talent
              </Link>
            )}
            <Link to="/how-it-works" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              How it Works
            </Link>
            <Link to="/pricing" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              About
            </Link>
            {isAuthenticated && (
              <>
                <Link to="/bookings" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                  Bookings
                </Link>
                <Link to="/messages" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                  Messages
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated && cart.length > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/bookings')}
                className="relative"
              >
                <ShoppingCart className="w-4 h-4" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cart.length}
                </Badge>
              </Button>
            )}
            {isAuthenticated ? (
              <>
                <span className="text-sm text-muted-foreground hidden md:inline">
                  {user?.name}
                </span>
                <Button variant="ghost" size="sm" onClick={handleLogout} className="text-foreground">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild className="text-foreground">
                  <Link to="/auth">Log In</Link>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <Link to="/auth">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
