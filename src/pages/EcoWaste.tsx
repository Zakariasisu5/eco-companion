
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageTransition } from '@/components/ui/PageTransition';
import ScheduleTab from '@/components/eco-waste/ScheduleTab';
import RecyclingTab from '@/components/eco-waste/RecyclingTab';
import CentersTab from '@/components/eco-waste/CentersTab';
import TrackingTab from '@/components/eco-waste/TrackingTab';

const EcoWaste = () => {
  return (
    <PageTransition>
      <div className="container px-4 py-8 max-w-7xl mx-auto space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold">Eco-Waste Management</h1>
          <p className="text-foreground/70">Track collections, find recycling centers, and manage your waste</p>
        </div>
        
        {/* Main Tabs */}
        <Tabs defaultValue="schedule" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full md:w-auto">
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="recycling">Recycling</TabsTrigger>
            <TabsTrigger value="centers">Centers</TabsTrigger>
            <TabsTrigger value="tracking">Tracking</TabsTrigger>
          </TabsList>
          
          <TabsContent value="schedule">
            <ScheduleTab />
          </TabsContent>
          
          <TabsContent value="recycling">
            <RecyclingTab />
          </TabsContent>
          
          <TabsContent value="centers">
            <CentersTab />
          </TabsContent>
          
          <TabsContent value="tracking">
            <TrackingTab />
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  );
};

export default EcoWaste;
