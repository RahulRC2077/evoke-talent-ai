import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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

const CATEGORIES = ["DJ", "Photographer", "Band", "Comedian", "Singer", "Anchor"];
const LOCATIONS = ["Mumbai", "Delhi", "Bangalore", "Pune", "Ahmedabad"];

const Browse = () => {
  const [searchParams] = useSearchParams();
  
  // Search and filter state
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || "");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([50000]);
  const [minRating, setMinRating] = useState([1]);

  // Update search query from URL params
  useEffect(() => {
    const searchFromUrl = searchParams.get('search');
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
    }
  }, [searchParams]);

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Toggle location selection
  const toggleLocation = (location: string) => {
    setSelectedLocations(prev => 
      prev.includes(location) 
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedLocations([]);
    setPriceRange([50000]);
    setMinRating([1]);
  };

  // Filter and search logic
  const filteredArtists = useMemo(() => {
    return MOCK_ARTISTS.filter(artist => {
      // Search filter - matches name, category, or tags
      const matchesSearch = searchQuery === "" || 
        artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artist.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artist.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category filter
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(artist.category);

      // Location filter
      const matchesLocation = selectedLocations.length === 0 || 
        selectedLocations.includes(artist.location);

      // Price filter - convert price string to number
      const artistPrice = parseInt(artist.price.replace(/[₹,]/g, ''));
      const matchesPrice = artistPrice <= priceRange[0];

      // Rating filter
      const matchesRating = artist.rating >= minRating[0];

      return matchesSearch && matchesCategory && matchesLocation && matchesPrice && matchesRating;
    });
  }, [searchQuery, selectedCategories, selectedLocations, priceRange, minRating]);
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
                      <Checkbox 
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                      />
                      <label 
                        htmlFor={category} 
                        className="text-sm cursor-pointer"
                        onClick={() => toggleCategory(category)}
                      >
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
                      <Checkbox 
                        id={location}
                        checked={selectedLocations.includes(location)}
                        onCheckedChange={() => toggleLocation(location)}
                      />
                      <label 
                        htmlFor={location} 
                        className="text-sm cursor-pointer"
                        onClick={() => toggleLocation(location)}
                      >
                        {location}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">
                  Price Range: Up to ₹{priceRange[0].toLocaleString('en-IN')}
                </label>
                <Slider 
                  value={priceRange} 
                  onValueChange={setPriceRange}
                  max={50000} 
                  min={5000} 
                  step={1000} 
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>₹5,000</span>
                  <span>₹50,000</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">
                  Minimum Rating: {minRating[0].toFixed(1)}★
                </label>
                <Slider 
                  value={minRating} 
                  onValueChange={setMinRating}
                  max={5} 
                  min={1} 
                  step={0.5} 
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1★</span>
                  <span>5★</span>
                </div>
              </div>

              <Button 
                className="w-full" 
                variant="outline"
                onClick={resetFilters}
              >
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="lg" className="lg:hidden">
                <SlidersHorizontal className="h-5 w-5" />
              </Button>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Showing {filteredArtists.length} {filteredArtists.length === 1 ? 'artist' : 'artists'}
              </div>
              {(searchQuery || selectedCategories.length > 0 || selectedLocations.length > 0 || priceRange[0] < 50000 || minRating[0] > 1) && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={resetFilters}
                  className="text-primary"
                >
                  Clear all filters
                </Button>
              )}
            </div>

            {filteredArtists.length === 0 ? (
              <Card className="p-12 text-center">
                <div className="space-y-3">
                  <Search className="h-12 w-12 mx-auto text-muted-foreground" />
                  <h3 className="text-xl font-semibold">No artists found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters or search terms
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={resetFilters}
                    className="mt-4"
                  >
                    Reset Filters
                  </Button>
                </div>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredArtists.map((artist) => (
                  <ArtistCard key={artist.id} {...artist} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
