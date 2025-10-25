import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    navigate('/browse');
  };

  const handleSignUpArtist = () => {
    navigate('/auth');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <h1 className="font-neopop text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground">
              Connecting event planners with entertainers and speakers in minutes
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Your one-stop solution for vetted talent booking
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="default"
                onClick={handleCreateEvent}
                className="rounded-full text-base font-semibold px-8"
              >
                Create Your Event
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={handleSignUpArtist}
                className="rounded-full text-base font-semibold px-8 bg-secondary hover:bg-secondary/80"
              >
                Sign Up as Entertainer
              </Button>
            </div>
          </div>

          {/* Right side - Illustration/Mockup */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Abstract shapes mimicking eva's design */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent rounded-full opacity-20 blur-3xl" />
              
              {/* Mockup card */}
              <div className="relative z-10 bg-card rounded-3xl shadow-2xl p-8 border border-border">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary" />
                    <div className="flex-1">
                      <div className="h-4 bg-muted rounded w-32 mb-2" />
                      <div className="h-3 bg-muted/50 rounded w-24" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                      <div className="text-sm font-semibold text-primary mb-2">I'm looking for this type of talent for my event:</div>
                      <div className="text-xs text-foreground">Musical Acts</div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <div className="px-4 py-2 rounded-full border-2 border-primary text-primary text-sm font-medium">
                        Bluegrass
                      </div>
                      <div className="px-4 py-2 rounded-full border-2 border-primary text-primary text-sm font-medium">
                        Singer-Songwriter
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-foreground">Band Setups</div>
                      <div className="flex gap-2">
                        <div className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                          Full Band
                        </div>
                        <div className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                          Solo
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
