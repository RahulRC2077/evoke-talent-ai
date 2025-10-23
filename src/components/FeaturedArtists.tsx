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
];

const FeaturedArtists = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Artists</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked talented professionals ready to make your event unforgettable
          </p>
        </div>

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
