
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, ShoppingBag, BookOpen, BarChart } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/context/AuthContext";
import EcoTips from "@/components/sustainable-living/EcoTips";
import EcoProducts from "@/components/sustainable-living/EcoProducts";
import CarbonFootprint from "@/components/sustainable-living/CarbonFootprint";

const SustainableLiving = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("tips");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-eco-50/30">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sustainable Living Guide</h1>
          <p className="text-foreground/70">
            Discover practical tips, eco-friendly product recommendations, and tools to measure your environmental impact.
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-4xl mx-auto"
        >
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="tips" className="flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              <span className="hidden sm:inline">Eco Tips</span>
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Eco Products</span>
            </TabsTrigger>
            <TabsTrigger value="carbon" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              <span className="hidden sm:inline">Carbon Footprint</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tips">
            <EcoTips />
          </TabsContent>

          <TabsContent value="products">
            <EcoProducts />
          </TabsContent>

          <TabsContent value="carbon">
            <CarbonFootprint />
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default SustainableLiving;
