
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Lightbulb, BarChart, Clock } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/context/AuthContext";
import EnergyUsage from "@/components/energy-saver/EnergyUsage";
import EnergyTips from "@/components/energy-saver/EnergyTips";
import PeakTimes from "@/components/energy-saver/PeakTimes";

const EnergySaver = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("usage");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-eco-50/30">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Energy Saver</h1>
          <p className="text-foreground/70">
            Monitor your energy usage, get reduction tips, and receive notifications about peak times.
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-4xl mx-auto"
        >
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="usage" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              <span className="hidden sm:inline">Energy Usage</span>
            </TabsTrigger>
            <TabsTrigger value="tips" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              <span className="hidden sm:inline">Energy Tips</span>
            </TabsTrigger>
            <TabsTrigger value="peak" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="hidden sm:inline">Peak Times</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="usage">
            <EnergyUsage />
          </TabsContent>

          <TabsContent value="tips">
            <EnergyTips />
          </TabsContent>

          <TabsContent value="peak">
            <PeakTimes />
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default EnergySaver;
