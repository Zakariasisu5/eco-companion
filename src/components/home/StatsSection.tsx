
import React from "react";
import { BarChart, Recycle, Car, TreePine } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-eco-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-primary font-medium mb-2">OUR IMPACT</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Making a difference together</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Join thousands of eco-conscious individuals who are already making a positive impact on our planet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-border/40">
            <BarChart className="h-10 w-10 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold mb-1">2,500+</div>
            <p className="text-foreground/70">Active Users</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-border/40">
            <Recycle className="h-10 w-10 text-blue-500 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-1">15 tons</div>
            <p className="text-foreground/70">Waste Recycled</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-border/40">
            <Car className="h-10 w-10 text-orange-500 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-1">8,200 kg</div>
            <p className="text-foreground/70">CO₂ Emissions Saved</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-border/40">
            <TreePine className="h-10 w-10 text-emerald-500 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-1">1,200+</div>
            <p className="text-foreground/70">Trees Planted</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
