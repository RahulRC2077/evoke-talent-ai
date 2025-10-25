import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="font-neopop text-foreground mb-4">
              Messages
            </h1>
            <p className="text-muted-foreground text-lg">
              Chat with artists and manage your conversations
            </p>
          </div>

          <Card className="p-12 text-center">
            <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              No messages yet
            </h3>
            <p className="text-muted-foreground mb-6">
              Start a conversation with an artist to discuss your event details
            </p>
            <Button onClick={() => navigate('/browse')} className="rounded-full">
              Browse Artists
            </Button>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Messages;
