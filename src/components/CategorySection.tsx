import { Card } from "@/components/ui/card";
import { Music, Camera, Mic, Users, Radio, Sparkles } from "lucide-react";

const CATEGORIES = [
  { name: "Musicians", icon: Music, count: "1,234", color: "text-primary" },
  { name: "Photographers", icon: Camera, count: "892", color: "text-accent" },
  { name: "Comedians", icon: Mic, count: "456", color: "text-primary" },
  { name: "Bands", icon: Users, count: "678", color: "text-accent" },
  { name: "DJs", icon: Radio, count: "543", color: "text-primary" },
  { name: "Performers", icon: Sparkles, count: "321", color: "text-accent" },
];

const CategorySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Browse by Category</h2>
          <p className="text-xl text-muted-foreground">
            Find the perfect talent for your event
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name}
                className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary/50 group"
              >
                <div className="text-center space-y-3">
                  <div className={`mx-auto h-16 w-16 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform ${category.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.count} artists</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
