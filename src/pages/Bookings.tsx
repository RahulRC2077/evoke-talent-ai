import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const navigate = useNavigate();

  // Mock bookings data
  const bookings = [
    {
      id: "1",
      artistName: "DJ Rhythm Wave",
      eventDate: "2025-02-15",
      location: "Mumbai, India",
      status: "confirmed",
      price: "₹25,000",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop",
    },
    {
      id: "2",
      artistName: "Priya Sharma",
      eventDate: "2025-03-10",
      location: "Delhi, India",
      status: "pending",
      price: "₹18,000",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "completed":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="font-neopop text-foreground mb-4">
              My Bookings
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage your upcoming and past event bookings
            </p>
          </div>

          {bookings.length === 0 ? (
            <Card className="p-12 text-center">
              <User className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                No bookings yet
              </h3>
              <p className="text-muted-foreground mb-6">
                Start browsing artists to book for your next event
              </p>
              <Button onClick={() => navigate('/browse')} className="rounded-full">
                Browse Artists
              </Button>
            </Card>
          ) : (
            <div className="space-y-6">
              {bookings.map((booking) => (
                <Card key={booking.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-6">
                    <img 
                      src={booking.image} 
                      alt={booking.artistName}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {booking.artistName}
                          </h3>
                          <Badge className={getStatusColor(booking.status)}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-foreground">
                            {booking.price}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(booking.eventDate).toLocaleDateString('en-IN', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{booking.location}</span>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-4">
                        <Button variant="outline" size="sm" className="rounded-full">
                          View Details
                        </Button>
                        <Button variant="ghost" size="sm" className="rounded-full">
                          Contact Artist
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Bookings;
