import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-neopop text-foreground mb-6">
              About ARTIQ
            </h1>
            <p className="text-xl text-muted-foreground">
              Connecting talent with opportunity
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                ARTIQ was built to solve a simple problem: finding and booking talented artists should be easy, transparent, and trustworthy. We're building a platform where event planners can discover amazing talent, and artists can showcase their work and grow their business.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">How We're Different</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Unlike traditional booking agencies, we leverage AI to help you find the perfect match for your event. Our platform features:
              </p>
              <ul className="space-y-3 text-muted-foreground text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>AI-powered search that understands natural language queries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Verified profiles with real reviews from past clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Secure payment processing with buyer protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Direct communication between clients and artists</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">By The Numbers</h2>
              <div className="grid grid-cols-3 gap-6 my-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                  <div className="text-muted-foreground">Verified Artists</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
                  <div className="text-muted-foreground">Events Booked</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
                  <div className="text-muted-foreground">Average Rating</div>
                </div>
              </div>
            </section>

            <div className="text-center mt-16">
              <Button 
                size="lg" 
                onClick={() => navigate('/browse')}
                className="rounded-full px-8"
              >
                Start Exploring
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
