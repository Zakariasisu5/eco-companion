
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageTransition } from '@/components/ui/PageTransition';
import ScheduleTab from '@/components/eco-waste/ScheduleTab';
import RecyclingTab from '@/components/eco-waste/RecyclingTab';
import CentersTab from '@/components/eco-waste/CentersTab';
import TrackingTab from '@/components/eco-waste/TrackingTab';
import { useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const EcoWaste = () => {
  const location = useLocation();
  
  return (
    <PageTransition location={location.pathname}>
      <div className="container px-4 py-8 max-w-7xl mx-auto space-y-8">
        {/* Page Header with enhanced styling */}
        <div className="bg-gradient-to-r from-eco-900/90 to-eco-800 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-full">
              <Leaf className="h-6 w-6 text-eco-200" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Eco-Waste Management</h1>
              <p className="text-eco-100/90">Track collections, find recycling centers, and manage your waste</p>
            </div>
          </div>
        </div>
        
        {/* Redesigned Tabs */}
        <Tabs defaultValue="schedule" className="space-y-6">
          <div className="bg-muted/30 p-2 rounded-lg">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger 
                value="schedule" 
                className="data-[state=active]:bg-eco-600 data-[state=active]:text-white"
              >
                Schedule
              </TabsTrigger>
              <TabsTrigger 
                value="recycling"
                className="data-[state=active]:bg-eco-600 data-[state=active]:text-white"
              >
                Recycling
              </TabsTrigger>
              <TabsTrigger 
                value="centers"
                className="data-[state=active]:bg-eco-600 data-[state=active]:text-white"
              >
                Centers
              </TabsTrigger>
              <TabsTrigger 
                value="tracking"
                className="data-[state=active]:bg-eco-600 data-[state=active]:text-white"
              >
                Tracking
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="schedule" className="animate-fade-in">
            <ScheduleTab />
          </TabsContent>
          
          <TabsContent value="recycling" className="animate-fade-in">
            <RecyclingTab />
          </TabsContent>
          
          <TabsContent value="centers" className="animate-fade-in">
            <CentersTab />
          </TabsContent>
          
          <TabsContent value="tracking" className="animate-fade-in">
            <TrackingTab />
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  );
};

export default EcoWaste;
