import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-hero opacity-90"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Artist Discovery</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Book the Perfect Artist
            <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2">
              for Your Event
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover and book talented musicians, DJs, photographers, comedians, and performers for your next event. Powered by AI for perfect matches.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="flex gap-3 p-2 bg-card rounded-xl shadow-xl border">
              <div className="flex-1 flex items-center gap-2 px-4">
                <Search className="h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="What kind of artist are you looking for?"
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button variant="hero" size="lg">
                Search Artists
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
              <span>Popular:</span>
              <button className="hover:text-primary transition-colors">DJ</button>
              <button className="hover:text-primary transition-colors">Photographer</button>
              <button className="hover:text-primary transition-colors">Band</button>
              <button className="hover:text-primary transition-colors">Comedian</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
