
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Zap, Thermometer, Coffee, Plug, WashingMachine } from "lucide-react";

const tips = [
  {
    title: "Switch to LED Lighting",
    description: "Replace incandescent bulbs with LEDs to use up to 80% less energy and last 25 times longer.",
    icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
    category: "Lighting",
    savings: "Saves ~$75 per year"
  },
  {
    title: "Optimize Thermostat Settings",
    description: "Lower your thermostat by 7-10°F for 8 hours a day (while asleep or away) to save up to 10% annually.",
    icon: <Thermometer className="w-10 h-10 text-red-500" />,
    category: "Heating & Cooling",
    savings: "Saves ~$100 per year"
  },
  {
    title: "Use Smart Power Strips",
    description: "Eliminate phantom energy use from electronics and appliances when they're not in active use.",
    icon: <Plug className="w-10 h-10 text-blue-500" />,
    category: "Electronics",
    savings: "Saves ~$50 per year"
  },
  {
    title: "Run Full Loads Only",
    description: "Always run your dishwasher and washing machine with full loads to maximize efficiency.",
    icon: <WashingMachine className="w-10 h-10 text-green-500" />,
    category: "Appliances",
    savings: "Saves ~$40 per year"
  },
  {
    title: "Maintain Appliances Regularly",
    description: "Clean refrigerator coils, HVAC filters, and dryer vents regularly to maintain efficiency.",
    icon: <Zap className="w-10 h-10 text-orange-500" />,
    category: "Maintenance",
    savings: "Saves ~$60 per year"
  }
];

const EnergyTips = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <Lightbulb className="mr-2 h-5 w-5 text-primary" />
            Energy Saving Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Implementing these energy-saving strategies can help reduce your utility bills 
            and decrease your environmental impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {tips.map((tip, index) => (
              <Card key={index} className="overflow-hidden border border-border/40">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {tip.icon}
                    <div>
                      <h3 className="font-semibold text-lg">{tip.title}</h3>
                      <p className="text-sm text-primary/70">{tip.category}</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 mb-3">{tip.description}</p>
                  <div className="text-sm font-medium text-green-600">{tip.savings}</div>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnergyTips;
