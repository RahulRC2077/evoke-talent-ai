import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, User, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Bookings = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart();
  const { toast } = useToast();

  const handleRemoveFromCart = (artistId: string, artistName: string) => {
    removeFromCart(artistId);
    toast({
      title: "Removed from Cart",
      description: `${artistName} has been removed from your bookings.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="font-neopop text-foreground mb-4">
              My Cart
            </h1>
            <p className="text-muted-foreground text-lg">
              Artists you've added to your cart for booking
            </p>
          </div>

          {cart.length === 0 ? (
            <Card className="p-12 text-center">
              <User className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Cart is empty
              </h3>
              <p className="text-muted-foreground mb-6">
                Start browsing artists to add to your cart
              </p>
              <Button onClick={() => navigate('/browse')} className="rounded-full">
                Browse Artists
              </Button>
            </Card>
          ) : (
            <div className="space-y-6">
              {cart.map((artist) => (
                <Card key={artist.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-6">
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-24 h-24 rounded-lg object-cover cursor-pointer"
                      onClick={() => navigate(`/artist/${artist.id}`)}
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 
                            className="text-xl font-bold text-foreground mb-1 cursor-pointer hover:text-primary"
                            onClick={() => navigate(`/artist/${artist.id}`)}
                          >
                            {artist.name}
                          </h3>
                          <Badge variant="outline">
                            {artist.category}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-foreground">
                            {artist.price}
                          </div>
                          <div className="text-sm text-muted-foreground">per event</div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{artist.location}</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="rounded-full"
                          onClick={() => navigate(`/artist/${artist.id}`)}
                        >
                          View Profile
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="rounded-full text-destructive hover:text-destructive"
                          onClick={() => handleRemoveFromCart(artist.id, artist.name)}
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Ready to book?</h3>
                    <p className="text-sm text-muted-foreground">
                      {cart.length} artist{cart.length > 1 ? 's' : ''} in your cart
                    </p>
                  </div>
                  <Button size="lg" className="rounded-full">
                    Proceed to Checkout
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Bookings;
