import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Join Our Platform</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Are You a Talented Artist?
          </h2>

          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of artists already using ARTIQ to showcase their talent and book more events. Get discovered by clients looking for your unique skills.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              variant="accent"
              className="group"
            >
              Create Artist Profile
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-primary-foreground hover:bg-primary-foreground/90"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary-foreground">5000+</div>
              <div className="text-sm text-primary-foreground/80">Artists</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground">15,000+</div>
              <div className="text-sm text-primary-foreground/80">Events Booked</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground">4.9★</div>
              <div className="text-sm text-primary-foreground/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
