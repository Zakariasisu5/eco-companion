
import React from 'react';
import { Calendar, Clock, Plus, Trash2, Info, Leaf, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

const ScheduleTab = () => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default ScheduleTab;
