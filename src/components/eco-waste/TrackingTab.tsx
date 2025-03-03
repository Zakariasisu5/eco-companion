
import React from 'react';
import { Trash2, Plus, ArrowRight, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const wasteTracking = [
  {
    category: 'Recycling',
    amount: '12.5 kg',
    change: '+2.3 kg',
    trend: 'up'
  },
  {
    category: 'General Waste',
    amount: '8.2 kg',
    change: '-1.5 kg',
    trend: 'down' 
  },
  {
    category: 'Compost',
    amount: '4.7 kg',
    change: '+0.8 kg',
    trend: 'up'
  }
];

const TrackingTab = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Trash2 className="mr-2 h-5 w-5 text-primary" />
            Waste Tracking
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {wasteTracking.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{item.category}</h3>
                  <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                    item.trend === 'down' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {item.change}
                  </div>
                </div>
                <p className="text-2xl font-bold mt-2">{item.amount}</p>
                <div className="mt-3 pt-3 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/70">Monthly goal: 20% reduction</span>
                    <span className="font-medium">45% complete</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Button className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Log New Waste
          </Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Eco Rewards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center text-center p-4 bg-primary/5 rounded-lg">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-medium">You've earned 350 Eco Points!</h3>
            <p className="text-sm text-foreground/70 mb-4">
              By reducing your waste and recycling properly, you're making a difference.
            </p>
            <Button variant="outline" className="flex items-center">
              View Rewards
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrackingTab;
