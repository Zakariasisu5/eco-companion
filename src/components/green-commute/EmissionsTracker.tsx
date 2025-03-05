
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, TrendingDown, Bike, Bus, Car } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/context/AuthContext";

const EmissionsTracker = () => {
  const { user } = useAuth();

  // Mock data for a user's emissions saved
  const emissionsSaved = {
    total: 127.5,
    goal: 200,
    progress: (127.5 / 200) * 100,
    breakdown: [
      { mode: "Biking", icon: <Bike className="h-4 w-4" />, emissions: 68.2, color: "text-green-500" },
      { mode: "Public Transit", icon: <Bus className="h-4 w-4" />, emissions: 42.3, color: "text-blue-500" },
      { mode: "Carpooling", icon: <Car className="h-4 w-4" />, emissions: 17.0, color: "text-orange-500" }
    ],
    history: [
      { month: "Jan", saved: 12 },
      { month: "Feb", saved: 15 },
      { month: "Mar", saved: 18 },
      { month: "Apr", saved: 22 },
      { month: "May", saved: 28 },
      { month: "Jun", saved: 32.5 }
    ]
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <TrendingDown className="mr-2 h-5 w-5 text-primary" />
            Your Emissions Savings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="text-center py-4">
              <div className="text-4xl font-bold text-primary mb-2">{emissionsSaved.total} kg</div>
              <p className="text-foreground/70">CO₂ emissions saved this year</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress toward yearly goal</span>
                <span className="font-medium">{Math.round(emissionsSaved.progress)}%</span>
              </div>
              <Progress value={emissionsSaved.progress} className="h-2" />
              <div className="flex justify-between text-xs text-foreground/70">
                <span>0 kg</span>
                <span>Goal: {emissionsSaved.goal} kg</span>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="font-medium mb-4">Emissions Saved by Transportation Mode</h3>
              <div className="space-y-4">
                {emissionsSaved.breakdown.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full ${item.color.replace('text', 'bg')}/10 mr-3`}>
                        {React.cloneElement(item.icon as React.ReactElement, { className: `h-5 w-5 ${item.color}` })}
                      </div>
                      <span>{item.mode}</span>
                    </div>
                    <span className="font-medium">{item.emissions} kg</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="font-medium mb-4">Monthly Progress</h3>
              <div className="h-48 flex items-end justify-between">
                {emissionsSaved.history.map((month, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="w-8 bg-primary/80 rounded-t-sm hover:bg-primary transition-colors"
                      style={{ height: `${(month.saved / Math.max(...emissionsSaved.history.map(m => m.saved))) * 100}%` }}
                    ></div>
                    <span className="text-xs mt-2">{month.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmissionsTracker;
