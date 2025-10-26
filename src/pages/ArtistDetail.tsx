import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, ArrowLeft, Calendar, MessageSquare, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { AvailabilityModal } from "@/components/AvailabilityModal";
import { MessageModal } from "@/components/MessageModal";
import { useToast } from "@/hooks/use-toast";

// Same mock data as Browse page
const MOCK_ARTISTS = [
  {
    id: "1",
    name: "DJ Rhythm Wave",
    category: "DJ",
    rating: 4.9,
    reviews: 127,
    price: "₹25,000",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&auto=format&fit=crop",
    tags: ["EDM", "House", "Techno"],
    bio: "Professional DJ with 8+ years of experience spinning at clubs, weddings, and corporate events across India. Specializing in EDM, House, and Techno, I create unforgettable experiences that keep the dance floor packed all night long. Known for seamless mixing and reading the crowd perfectly.",
  },
  {
    id: "2",
    name: "Priya Sharma",
    category: "Photographer",
    rating: 5.0,
    reviews: 89,
    price: "₹18,000",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&auto=format&fit=crop",
    tags: ["Wedding", "Portrait", "Events"],
    bio: "Award-winning photographer passionate about capturing life's precious moments. With a keen eye for detail and emotion, I specialize in wedding photography, portraits, and event coverage. My style blends candid storytelling with artistic composition to create timeless memories.",
  },
  {
    id: "3",
    name: "The Acoustic Souls",
    category: "Band",
    rating: 4.8,
    reviews: 156,
    price: "₹45,000",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop",
    tags: ["Rock", "Pop", "Acoustic"],
    bio: "Five-piece band bringing soulful acoustic performances to your events. Our versatile repertoire spans Rock, Pop, and Acoustic genres, perfect for intimate gatherings or large celebrations. We've performed at 200+ events and pride ourselves on creating magical musical experiences.",
  },
  {
    id: "4",
    name: "Rahul Mehta",
    category: "Comedian",
    rating: 4.7,
    reviews: 203,
    price: "₹15,000",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=800&auto=format&fit=crop",
    tags: ["Stand-up", "Corporate", "English"],
    bio: "Stand-up comedian who believes laughter is the best medicine. Performing clean, relatable humor perfect for corporate events, college fests, and private parties. My shows blend observational comedy with interactive elements, ensuring everyone leaves with a smile.",
  },
  {
    id: "5",
    name: "Neha Singh",
    category: "Singer",
    rating: 4.9,
    reviews: 142,
    price: "₹30,000",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&auto=format&fit=crop",
    tags: ["Bollywood", "Classical", "Ghazal"],
    bio: "Versatile vocalist with classical training and a passion for Bollywood and Ghazals. Having trained under renowned maestros, I bring soul and emotion to every performance. Whether it's a wedding sangeet or a corporate gala, I create musical moments that touch hearts.",
  },
  {
    id: "6",
    name: "Amit Patel",
    category: "Anchor",
    rating: 4.6,
    reviews: 98,
    price: "₹12,000",
    location: "Ahmedabad",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
    tags: ["Corporate", "Wedding", "Bilingual"],
    bio: "Dynamic bilingual anchor and emcee specializing in corporate events, weddings, and product launches. With excellent stage presence and the ability to engage any audience, I ensure your event flows smoothly and keeps guests entertained throughout.",
  },
];

const ArtistDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artist = MOCK_ARTISTS.find(a => a.id === id);
  const { addToCart, cart } = useCart();
  const { toast } = useToast();
  const [showAvailability, setShowAvailability] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const isInCart = artist ? cart.some(item => item.id === artist.id) : false;

  const handleAddToCart = () => {
    if (artist) {
      addToCart(artist);
      toast({
        title: "Added to Cart!",
        description: `${artist.name} has been added to your bookings.`,
      });
    }
  };

  if (!artist) {
    return (
      <div className="min-h-screen bg-secondary/20">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Artist Not Found</h1>
          <Button onClick={() => navigate('/browse')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Browse
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/browse')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Browse
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <div className="aspect-[21/9] overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-4xl font-bold">{artist.name}</h1>
                      <Badge className="text-sm">{artist.category}</Badge>
                    </div>
                    <div className="flex items-center gap-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 fill-accent text-accent" />
                        <span className="font-semibold text-foreground">{artist.rating}</span>
                        <span>({artist.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        <span>{artist.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {artist.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="border-t pt-6">
                  <h2 className="text-xl font-semibold mb-3">About</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {artist.bio}
                  </p>
                </div>

                <div className="border-t pt-6">
                  <h2 className="text-xl font-semibold mb-3">Portfolio</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-square bg-secondary/50 rounded-lg overflow-hidden">
                        <img 
                          src={artist.image} 
                          alt={`${artist.name} portfolio ${i}`}
                          className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24 space-y-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Starting from</div>
                <div className="text-4xl font-bold text-primary">{artist.price}</div>
                <div className="text-sm text-muted-foreground">per event</div>
              </div>

              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={() => setShowAvailability(true)}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Check Availability
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setShowMessage(true)}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
                <Button 
                  size="lg" 
                  variant={isInCart ? "secondary" : "default"}
                  className="w-full"
                  onClick={handleAddToCart}
                  disabled={isInCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {isInCart ? "In Cart" : "Add to Cart"}
                </Button>
              </div>

              <div className="border-t pt-6 space-y-3">
                <h3 className="font-semibold">Quick Facts</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium">{artist.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">{artist.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Reviews</span>
                    <span className="font-medium">{artist.reviews}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="font-medium">{artist.rating} ★</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {artist && (
        <>
          <AvailabilityModal
            isOpen={showAvailability}
            onClose={() => setShowAvailability(false)}
            artistName={artist.name}
          />
          <MessageModal
            isOpen={showMessage}
            onClose={() => setShowMessage(false)}
            artistName={artist.name}
          />
        </>
      )}
    </div>
  );
};

export default ArtistDetail;
