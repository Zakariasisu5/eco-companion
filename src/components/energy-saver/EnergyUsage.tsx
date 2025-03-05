
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, TrendingDown, Zap, Lightbulb, Home } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/context/AuthContext";

const EnergyUsage = () => {
  const { user } = useAuth();

  // Mock data for energy usage
  const energyData = {
    currentMonth: 425,
    previousMonth: 480,
    reduction: 11.5,
    goal: 400,
    progress: ((480 - 425) / (480 - 400)) * 100,
    breakdown: [
      { category: "Heating/Cooling", icon: <Home className="h-4 w-4" />, usage: 185, percentage: 43, color: "text-red-500" },
      { category: "Appliances", icon: <Zap className="h-4 w-4" />, usage: 120, percentage: 28, color: "text-blue-500" },
      { category: "Lighting", icon: <Lightbulb className="h-4 w-4" />, usage: 75, percentage: 18, color: "text-yellow-500" },
      { category: "Other", icon: <Zap className="h-4 w-4" />, usage: 45, percentage: 11, color: "text-green-500" }
    ],
    history: [
      { month: "Jan", usage: 520 },
      { month: "Feb", usage: 495 },
      { month: "Mar", usage: 510 },
      { month: "Apr", usage: 490 },
      { month: "May", usage: 480 },
      { month: "Jun", usage: 425 }
    ]
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <BarChart className="mr-2 h-5 w-5 text-primary" />
            Home Energy Usage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-foreground/70 mb-1">Current Month</p>
                  <div className="text-2xl font-bold">{energyData.currentMonth} kWh</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-foreground/70 mb-1">Previous Month</p>
                  <div className="text-2xl font-bold">{energyData.previousMonth} kWh</div>
                </CardContent>
              </Card>
              
              <Card className="bg-green-500/10">
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-foreground/70 mb-1">Reduction</p>
                  <div className="text-2xl font-bold text-green-600">
                    <TrendingDown className="inline h-5 w-5 mr-1" />
                    {energyData.reduction}%
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress toward monthly goal</span>
                <span className="font-medium">{Math.round(energyData.progress)}%</span>
              </div>
              <Progress value={energyData.progress} className="h-2" />
              <div className="flex justify-between text-xs text-foreground/70">
                <span>Goal: {energyData.goal} kWh</span>
                <span>Previous: {energyData.previousMonth} kWh</span>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="font-medium mb-4">Energy Usage by Category</h3>
              <div className="space-y-4">
                {energyData.breakdown.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full ${item.color.replace('text', 'bg')}/10 mr-3`}>
                          {React.cloneElement(item.icon as React.ReactElement, { className: `h-5 w-5 ${item.color}` })}
                        </div>
                        <span>{item.category}</span>
                      </div>
                      <span className="font-medium">{item.usage} kWh</span>
                    </div>
                    <Progress value={item.percentage} className="h-1.5" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="font-medium mb-4">6-Month Usage History</h3>
              <div className="h-48 flex items-end justify-between">
                {energyData.history.map((month, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="w-8 bg-primary/80 rounded-t-sm hover:bg-primary transition-colors"
                      style={{ height: `${(month.usage / Math.max(...energyData.history.map(m => m.usage))) * 100}%` }}
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

export default EnergyUsage;
