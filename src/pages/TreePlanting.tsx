
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TreePine, MapPin, Users, Info } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/context/AuthContext";
import TreeTracker from "@/components/tree-planting/TreeTracker";
import TreeSpecies from "@/components/tree-planting/TreeSpecies";
import CommunityEvents from "@/components/tree-planting/CommunityEvents";

const TreePlanting = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("tracker");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-eco-50/30">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tree Planting Tracker</h1>
          <p className="text-foreground/70">
            Document trees you've planted, learn about species benefits, and find community planting events.
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-4xl mx-auto"
        >
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="tracker" className="flex items-center gap-2">
              <TreePine className="h-4 w-4" />
              <span className="hidden sm:inline">Tree Tracker</span>
            </TabsTrigger>
            <TabsTrigger value="species" className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              <span className="hidden sm:inline">Tree Species</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Community Events</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tracker">
            <TreeTracker />
          </TabsContent>

          <TabsContent value="species">
            <TreeSpecies />
          </TabsContent>

          <TabsContent value="events">
            <CommunityEvents />
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default TreePlanting;
