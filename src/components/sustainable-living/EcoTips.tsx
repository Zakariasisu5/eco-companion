
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Sprout, Globe, Recycle, Sun } from "lucide-react";

const tips = [
  {
    title: "Use Reusable Shopping Bags",
    description: "Bring your own bags when shopping to reduce plastic waste. A single reusable bag can replace hundreds of single-use plastic bags over its lifetime.",
    icon: <Leaf className="w-10 h-10 text-green-500" />,
    category: "Daily Habits"
  },
  {
    title: "Create a Home Compost Bin",
    description: "Turn food scraps and yard waste into valuable soil amendment. Composting can reduce your household waste by up to 30%.",
    icon: <Sprout className="w-10 h-10 text-green-500" />,
    category: "Food & Kitchen"
  },
  {
    title: "Switch to LED Light Bulbs",
    description: "LED bulbs use up to 80% less energy than traditional incandescent bulbs and last up to 25 times longer.",
    icon: <Sun className="w-10 h-10 text-yellow-500" />,
    category: "Energy Efficiency"
  },
  {
    title: "Reduce Water Usage",
    description: "Install low-flow faucets and showerheads, fix leaks promptly, and collect rainwater for your garden.",
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    category: "Water Conservation"
  },
  {
    title: "Practice Mindful Consumption",
    description: "Before buying, ask yourself if you really need it. Choose quality items that will last longer rather than disposable alternatives.",
    icon: <Recycle className="w-10 h-10 text-orange-500" />,
    category: "Shopping Habits"
  }
];

const EcoTips = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <Leaf className="mr-2 h-5 w-5 text-primary" />
            Daily Sustainable Living Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Small changes in your daily routine can make a significant positive impact on the environment. 
            Here are some practical tips to help you live more sustainably:
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
                  <p className="text-foreground/70">{tip.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EcoTips;
