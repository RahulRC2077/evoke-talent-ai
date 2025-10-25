import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Are You a Talented Artist?
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of artists already using ARTIQ to showcase their talent and book more events. Get discovered by clients looking for your unique skills.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              variant="default"
              className="group rounded-full px-8"
            >
              Create Artist Profile
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full px-8 border-2"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-foreground">5,000+</div>
              <div className="text-sm text-muted-foreground mt-1">Artists</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground">15,000+</div>
              <div className="text-sm text-muted-foreground mt-1">Events Booked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground">4.9★</div>
              <div className="text-sm text-muted-foreground mt-1">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
