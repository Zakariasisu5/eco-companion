
import React, { useState } from 'react';
import { Search, MapPin, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const recycleCenters = [
  {
    name: 'Central Recycling Center',
    distance: '2.3 km',
    address: '1234 Green Street',
    materials: ['Paper', 'Glass', 'Plastic', 'Metal']
  },
  {
    name: 'Northside Drop-off Center',
    distance: '4.1 km',
    address: '567 Ecology Avenue',
    materials: ['Electronics', 'Batteries', 'Metals']
  },
  {
    name: 'Southside Waste Management',
    distance: '5.7 km',
    address: '890 Environmental Road',
    materials: ['All Materials', 'Hazardous Waste']
  }
];

const CentersTab = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCenters = recycleCenters.filter(center => 
    center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    center.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    center.materials.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-foreground/40" />
        <Input 
          placeholder="Search recycling centers..." 
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="space-y-4">
        {filteredCenters.length > 0 ? (
          filteredCenters.map((center, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-lg">{center.name}</h3>
                    <div className="flex items-center text-sm text-foreground/70 mt-1">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      <span>{center.address}</span>
                      <span className="mx-2">•</span>
                      <span>{center.distance} away</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {center.materials.map((material, idx) => (
                        <Badge key={idx} variant="outline">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end md:self-center">
                    <Button variant="outline" size="sm">
                      Call
                    </Button>
                    <Button size="sm">
                      Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center p-8">
            <Info className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
            <h3 className="font-medium text-lg">No centers found</h3>
            <p className="text-foreground/70">Try a different search term</p>
          </div>
        )}
      </div>
      
      <div className="bg-muted rounded-lg p-4 text-center">
        <p className="text-sm text-foreground/70">
          Map view is currently unavailable. We're working to add this feature soon.
        </p>
      </div>
    </div>
  );
};

export default CentersTab;
