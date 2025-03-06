
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Droplet, Zap, Car } from 'lucide-react';

const metrics = [
  {
    title: "Waste Reduction",
    value: "24.5 kg",
    change: "+12%",
    icon: <Droplet className="h-8 w-8 text-blue-500" />,
    description: "Last 30 days",
    positive: true
  },
  {
    title: "Energy Saved",
    value: "143 kWh",
    change: "+8%",
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    description: "Last 30 days",
    positive: true
  },
  {
    title: "Eco Travel",
    value: "85 km",
    change: "+15%",
    icon: <Car className="h-8 w-8 text-green-500" />,
    description: "Sustainable travel distance",
    positive: true
  }
];

const EcoImpactSummary = () => {
  return (
    <>
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              {metric.icon}
              <span className={`text-sm font-medium ${metric.positive ? 'text-green-500' : 'text-red-500'}`}>
                {metric.change}
              </span>
            </div>
            <CardTitle className="text-xl mt-2">{metric.title}</CardTitle>
            <CardDescription>{metric.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{metric.value}</div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default EcoImpactSummary;
