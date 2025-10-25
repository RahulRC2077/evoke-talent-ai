import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "For Clients",
      price: "Free",
      description: "Browse and book artists with no platform fees",
      features: [
        "Unlimited browsing",
        "Direct messaging with artists",
        "Secure payment processing",
        "Booking management",
        "Review and rating system",
        "24/7 customer support",
      ],
      cta: "Browse Artists",
      action: () => navigate('/browse'),
    },
    {
      name: "For Artists",
      price: "15%",
      description: "Commission per booking",
      features: [
        "Create detailed profile",
        "Upload portfolio & media",
        "Receive booking requests",
        "Calendar management",
        "Direct client messaging",
        "Get paid securely",
        "Analytics dashboard",
      ],
      cta: "Create Profile",
      action: () => navigate('/auth'),
      highlighted: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-neopop text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No hidden fees. No monthly subscriptions. Just great value for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`p-8 ${plan.highlighted ? 'border-2 border-primary shadow-xl' : ''}`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                      Popular Choice
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.price !== "Free" && (
                    <span className="text-muted-foreground ml-2">per booking</span>
                  )}
                </div>
                <p className="text-muted-foreground mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full rounded-full" 
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                  onClick={plan.action}
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
