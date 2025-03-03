
import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Search, 
  Trash2, 
  Info, 
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Plus,
  Leaf
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { PageTransition } from '@/components/ui/PageTransition';

const EcoWaste = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const scheduleItems = [
    {
      type: 'General Waste',
      day: 'Monday',
      time: '8:00 AM',
      icon: Trash2,
      color: 'text-gray-600 bg-gray-100'
    },
    {
      type: 'Recycling',
      day: 'Thursday',
      time: '9:00 AM',
      icon: Info,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      type: 'Green Waste',
      day: 'First Tuesday',
      time: '8:00 AM',
      icon: Leaf,
      color: 'text-green-600 bg-green-100'
    },
    {
      type: 'Hazardous Waste',
      day: 'Last Saturday',
      time: '10:00 AM - 2:00 PM',
      icon: AlertTriangle,
      color: 'text-orange-600 bg-orange-100'
    }
  ];
  
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
  
  const recyclingTips = [
    {
      title: 'Plastic Recycling',
      description: 'Rinse plastic containers before recycling. Check the recycling symbol (1-7) to ensure it's accepted in your area.',
      icon: Info
    },
    {
      title: 'Paper Products',
      description: 'Remove staples and paper clips. Pizza boxes with grease stains should go in compost, not recycling.',
      icon: Info
    },
    {
      title: 'Electronics',
      description: 'Never throw electronics in regular trash. Take them to specialized recycling centers to prevent toxic materials from entering landfills.',
      icon: AlertTriangle
    }
  ];
  
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
  
  const filteredCenters = recycleCenters.filter(center => 
    center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    center.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    center.materials.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
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
          
          {/* Collection Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-primary" />
                  Collection Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {scheduleItems.map((item, index) => (
                  <div key={index} className="flex items-center p-3 border rounded-lg">
                    <div className={`p-2 rounded-full ${item.color} mr-4`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.type}</h3>
                      <div className="flex items-center text-sm text-foreground/70">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span className="mr-3">{item.day}</span>
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Set Reminder
                    </Button>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Custom Reminder
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Collections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-md shadow-sm mr-4">
                      <Calendar className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Next Collection: Recycling</h3>
                      <p className="text-sm text-foreground/70">Thursday, 9:00 AM</p>
                      <div className="mt-2 text-sm">
                        <span className="font-medium">Reminder:</span> Place bins out by 8:00 PM the night before.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Recycling Tips Tab */}
          <TabsContent value="recycling" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Leaf className="mr-2 h-5 w-5 text-primary" />
                  Recycling Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recyclingTips.map((tip, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0.5">
                        <tip.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{tip.title}</h3>
                        <p className="text-sm text-foreground/70">{tip.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-medium flex items-center">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2" />
                    Common Recycling Mistakes
                  </h3>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Placing recyclables in plastic bags</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Not cleaning food containers properly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Including non-recyclable plastics (like plastic bags or straws)</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Accepted Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="border rounded-lg p-3">
                    <h3 className="font-medium mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Paper
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline">Newspapers</Badge>
                      <Badge variant="outline">Magazines</Badge>
                      <Badge variant="outline">Office Paper</Badge>
                      <Badge variant="outline">Cardboard</Badge>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <h3 className="font-medium mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Plastic
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline">#1 - PET</Badge>
                      <Badge variant="outline">#2 - HDPE</Badge>
                      <Badge variant="outline">#5 - PP</Badge>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <h3 className="font-medium mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Metal
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline">Aluminum Cans</Badge>
                      <Badge variant="outline">Steel Cans</Badge>
                      <Badge variant="outline">Metal Lids</Badge>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <h3 className="font-medium mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Glass
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline">Bottles</Badge>
                      <Badge variant="outline">Jars</Badge>
                      <Badge variant="outline">Containers</Badge>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3 border-orange-200 bg-orange-50">
                    <h3 className="font-medium mb-2 flex items-center">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mr-2" />
                      Not Accepted
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="border-orange-200">Plastic Bags</Badge>
                      <Badge variant="outline" className="border-orange-200">Styrofoam</Badge>
                      <Badge variant="outline" className="border-orange-200">Tissue Paper</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Recycling Centers Tab */}
          <TabsContent value="centers" className="space-y-6">
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
          </TabsContent>
          
          {/* Waste Tracking Tab */}
          <TabsContent value="tracking" className="space-y-6">
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
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  );
};

export default EcoWaste;
