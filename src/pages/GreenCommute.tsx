
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bike, MapPin, Navigation, BarChart } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/context/AuthContext";
import RouteOptions from "@/components/green-commute/RouteOptions";
import EmissionsTracker from "@/components/green-commute/EmissionsTracker";
import CommuteMap from "@/components/green-commute/CommuteMap";

const GreenCommute = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("routes");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-eco-50/30">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Green Commute Planner</h1>
          <p className="text-foreground/70">
            Discover eco-friendly transportation options and track your carbon emissions savings.
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-4xl mx-auto"
        >
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="routes" className="flex items-center gap-2">
              <Navigation className="h-4 w-4" />
              <span className="hidden sm:inline">Route Options</span>
            </TabsTrigger>
            <TabsTrigger value="emissions" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              <span className="hidden sm:inline">Emissions Saved</span>
            </TabsTrigger>
            <TabsTrigger value="map" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">Map View</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="routes">
            <RouteOptions />
          </TabsContent>

          <TabsContent value="emissions">
            <EmissionsTracker />
          </TabsContent>

          <TabsContent value="map">
            <CommuteMap />
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default GreenCommute;
