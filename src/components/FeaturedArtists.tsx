import ArtistCard from "./ArtistCard";

const FEATURED_ARTISTS = [
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

const FeaturedArtists = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground text-center mb-12">
          Featured Talent
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_ARTISTS.map((artist) => (
            <ArtistCard key={artist.id} {...artist} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;
