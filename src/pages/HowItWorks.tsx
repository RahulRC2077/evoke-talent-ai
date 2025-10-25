import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, UserCheck, Calendar, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: Search,
      title: "Search & Filter",
      description: "Browse through thousands of verified artists by category, location, budget, and availability. Use AI-powered search to find perfect matches.",
    },
    {
      icon: UserCheck,
      title: "View Profiles",
      description: "Check out artist portfolios, reviews, pricing, and past work. Watch videos, view photos, and read testimonials from previous clients.",
    },
    {
      icon: Calendar,
      title: "Book & Pay",
      description: "Send booking requests, chat with artists, and finalize details. Secure payment through our platform with buyer protection.",
    },
    {
      icon: CheckCircle,
      title: "Enjoy Your Event",
      description: "Relax while the artist delivers an amazing performance. Rate and review after the event to help other clients.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-neopop text-foreground mb-6">
              How ARTIQ Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book amazing talent for your event in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/browse')}
              className="rounded-full px-8"
            >
              Start Browsing Artists
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
