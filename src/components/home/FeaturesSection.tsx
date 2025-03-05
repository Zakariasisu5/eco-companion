
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Recycle, Leaf, Zap, Car, TreePine } from "lucide-react";

const features = [
  {
    title: "Eco-Waste Management",
    description: "Track and minimize your household waste with reminders, recycling tips, and locating nearby disposal centers.",
    icon: Recycle,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Sustainable Living Guide",
    description: "Access daily eco-friendly tips, product recommendations, and a carbon footprint calculator.",
    icon: Leaf,
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "Green Commute Planner",
    description: "Find eco-friendly transportation options and track emissions saved by green commuting.",
    icon: Car,
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "Energy Saver",
    description: "Monitor home energy usage, get tips for reduction, and receive notifications during peak times.",
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-500"
  },
  {
    title: "Tree Planting Tracker",
    description: "Document trees planted, learn about species benefits, and participate in community planting events.",
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-500"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-primary font-medium mb-2">FEATURES</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to live sustainably</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Our comprehensive suite of tools helps you make eco-conscious decisions in every aspect of your daily life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover-scale border border-border/40 bg-white">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
