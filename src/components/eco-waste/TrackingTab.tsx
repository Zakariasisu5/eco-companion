import React, { useEffect, useState } from 'react';
import { Trash2, Plus, ArrowRight, Leaf, ArrowUp, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { WasteTrackingForm } from './WasteTrackingForm';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';

const TrackingTab = () => {
  const [wasteEntries, setWasteEntries] = useState<any[]>([]);

  const fetchWasteTracking = async () => {
    const { data } = await supabase
      .from('waste_tracking')
      .select('*')
      .order('tracking_date', { ascending: false });
    
    setWasteEntries(data || []);
  };

  useEffect(() => {
    fetchWasteTracking();
  }, []);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Trash2 className="mr-2 h-5 w-5 text-primary" />
            Add New Waste Entry
          </CardTitle>
        </CardHeader>
        <CardContent>
          <WasteTrackingForm onSubmit={fetchWasteTracking} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Entries</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {wasteEntries.map((entry) => (
            <div key={entry.id} className="p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{entry.waste_type}</h3>
                <span className="text-sm text-foreground/70">
                  {format(new Date(entry.tracking_date), 'PPP')}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="text-2xl font-bold">
                  {entry.amount} {entry.unit}
                </div>
              </div>
              {entry.notes && (
                <p className="mt-2 text-sm text-foreground/70">{entry.notes}</p>
              )}
            </div>
          ))}
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
