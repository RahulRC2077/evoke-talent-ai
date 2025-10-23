import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Music } from "lucide-react";
import { Link } from "react-router-dom";

interface ArtistCardProps {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  price: string;
  location: string;
  image: string;
  tags: string[];
}

const ArtistCard = ({ id, name, category, rating, reviews, price, location, image, tags }: ArtistCardProps) => {
  return (
    <Link to={`/artist/${id}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img 
            src={image} 
            alt={name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-background/95 backdrop-blur">
              {category}
            </Badge>
          </div>
        </div>
        
        <div className="p-5 space-y-3">
          <div>
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {name}
            </h3>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-medium text-foreground">{rating}</span>
                <span>({reviews})</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="pt-3 border-t flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary">{price}</span>
              <span className="text-sm text-muted-foreground ml-1">/ event</span>
            </div>
            <Music className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ArtistCard;
