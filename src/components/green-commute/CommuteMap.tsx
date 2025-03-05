
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const CommuteMap = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <MapPin className="mr-2 h-5 w-5 text-primary" />
            Eco-Friendly Transportation Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
            <div className="text-center p-6">
              <MapPin className="h-12 w-12 text-primary/50 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Map View</h3>
              <p className="text-sm text-foreground/70">
                An interactive map will be displayed here showing bike lanes, public transit routes, 
                and eco-friendly transportation options in your area.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card className="bg-green-500/10">
              <CardContent className="p-4 text-center">
                <h4 className="font-medium">Bike Lanes</h4>
                <p className="text-sm text-foreground/70">12 nearby routes</p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-500/10">
              <CardContent className="p-4 text-center">
                <h4 className="font-medium">Public Transit</h4>
                <p className="text-sm text-foreground/70">8 stations within 1 mile</p>
              </CardContent>
            </Card>
            
            <Card className="bg-orange-500/10">
              <CardContent className="p-4 text-center">
                <h4 className="font-medium">EV Charging</h4>
                <p className="text-sm text-foreground/70">5 stations nearby</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommuteMap;
