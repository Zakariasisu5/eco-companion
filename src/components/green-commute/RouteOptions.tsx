
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation, Car, Bus, Bike, Clock, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RouteOptions = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [showRoutes, setShowRoutes] = useState(false);
  
  // Mock data for routes
  const routes = [
    {
      id: 1,
      mode: "Public Transit",
      icon: <Bus className="h-8 w-8 text-blue-500" />,
      time: "45 mins",
      emissions: "1.2 kg CO2",
      details: "Bus 42 → Metro Line A → Walk 5 mins",
      emissionsSaved: "5.8 kg CO2 saved vs. driving",
      color: "bg-blue-500/10 border-blue-500/20"
    },
    {
      id: 2,
      mode: "Bike",
      icon: <Bike className="h-8 w-8 text-green-500" />,
      time: "35 mins",
      emissions: "0 kg CO2",
      details: "Dedicated bike lane available for 80% of route",
      emissionsSaved: "7.0 kg CO2 saved vs. driving",
      color: "bg-green-500/10 border-green-500/20"
    },
    {
      id: 3,
      mode: "Car",
      icon: <Car className="h-8 w-8 text-gray-500" />,
      time: "25 mins",
      emissions: "7.0 kg CO2",
      details: "Heavy traffic expected on Main St.",
      emissionsSaved: "0 kg CO2 saved (baseline)",
      color: "bg-gray-500/10 border-gray-500/20"
    }
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (origin && destination) {
      setShowRoutes(true);
    }
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <Navigation className="mr-2 h-5 w-5 text-primary" />
            Find Eco-Friendly Routes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="origin">Starting Point</Label>
                <Input
                  id="origin"
                  placeholder="Enter your starting location"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Input
                  id="destination"
                  placeholder="Enter your destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full">Find Routes</Button>
          </form>
          
          {showRoutes && (
            <div className="mt-8 space-y-4">
              <h3 className="font-medium text-lg">Route Options from {origin} to {destination}</h3>
              
              {routes.map((route) => (
                <Card key={route.id} className={`overflow-hidden border-2 ${route.color}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        {route.icon}
                        <div>
                          <h4 className="font-semibold text-lg">{route.mode}</h4>
                          <div className="flex items-center text-sm text-muted-foreground gap-4 mt-1">
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" /> {route.time}
                            </span>
                            <span className="flex items-center">
                              <Leaf className="h-3 w-3 mr-1" /> {route.emissions}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Choose</Button>
                    </div>
                    <div className="mt-4 text-sm">
                      <p>{route.details}</p>
                      {route.id !== 3 && (
                        <p className="mt-2 text-green-600 font-medium">{route.emissionsSaved}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RouteOptions;
