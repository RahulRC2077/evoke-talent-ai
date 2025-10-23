import Navbar from "@/components/Navbar";
import ArtistCard from "@/components/ArtistCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, SlidersHorizontal } from "lucide-react";

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
  },
];

const CATEGORIES = ["All", "DJ", "Photographer", "Band", "Comedian", "Singer", "Anchor"];
const LOCATIONS = ["All Cities", "Mumbai", "Delhi", "Bangalore", "Pune", "Ahmedabad"];

const Browse = () => {
  return (
    <div className="min-h-screen bg-secondary/20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Browse Artists</h1>
          <p className="text-muted-foreground">Discover talented professionals for your next event</p>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <Card className="hidden lg:block w-80 p-6 h-fit sticky top-24">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5" />
                  Filters
                </h3>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">Category</label>
                <div className="space-y-3">
                  {CATEGORIES.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={category} />
                      <label htmlFor={category} className="text-sm cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">Location</label>
                <div className="space-y-3">
                  {LOCATIONS.map((location) => (
                    <div key={location} className="flex items-center space-x-2">
                      <Checkbox id={location} />
                      <label htmlFor={location} className="text-sm cursor-pointer">
                        {location}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">
                  Price Range: ₹5,000 - ₹50,000
                </label>
                <Slider defaultValue={[25000]} max={50000} min={5000} step={1000} />
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">Minimum Rating</label>
                <Slider defaultValue={[4]} max={5} min={1} step={0.5} />
              </div>

              <Button className="w-full" variant="outline">
                Reset Filters
              </Button>
            </div>
          </Card>

          {/* Artists Grid */}
          <div className="flex-1">
            <div className="mb-6 flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search artists by name, skill, or category..."
                  className="pl-10 h-12"
                />
              </div>
              <Button variant="outline" size="lg" className="lg:hidden">
                <SlidersHorizontal className="h-5 w-5" />
              </Button>
            </div>

            <div className="mb-4 text-sm text-muted-foreground">
              Showing {MOCK_ARTISTS.length} artists
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {MOCK_ARTISTS.map((artist) => (
                <ArtistCard key={artist.id} {...artist} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
