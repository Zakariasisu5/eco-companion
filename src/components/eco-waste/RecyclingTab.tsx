
import React from 'react';
import { Leaf, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const recyclingTips = [
  {
    title: 'Plastic Recycling',
    description: 'Rinse plastic containers before recycling. Check the recycling symbol (1-7) to ensure it\'s accepted in your area.',
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

const RecyclingTab = () => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default RecyclingTab;
