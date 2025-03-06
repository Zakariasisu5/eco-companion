
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Recycle, Zap, Car, Calendar, TreePine } from 'lucide-react';

const activities = [
  {
    title: "Recycled 2.3kg of Plastic",
    category: "Waste Management",
    date: "Today, 10:24 AM",
    icon: <Recycle className="h-8 w-8 p-1.5 bg-blue-100 text-blue-600 rounded-full" />
  },
  {
    title: "Reduced Energy Usage by 5%",
    category: "Energy Saving",
    date: "Yesterday, 8:15 PM",
    icon: <Zap className="h-8 w-8 p-1.5 bg-yellow-100 text-yellow-600 rounded-full" />
  },
  {
    title: "Used Public Transport",
    category: "Green Commute",
    date: "Mar 5, 2025",
    icon: <Car className="h-8 w-8 p-1.5 bg-green-100 text-green-600 rounded-full" />
  },
  {
    title: "Planted Oak Tree",
    category: "Tree Planting",
    date: "Mar 3, 2025",
    icon: <TreePine className="h-8 w-8 p-1.5 bg-emerald-100 text-emerald-600 rounded-full" />
  }
];

const RecentActivities = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="mr-2 h-5 w-5 text-primary" />
          Recent Activities
        </CardTitle>
        <CardDescription>
          Your latest sustainability actions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4">
              {activity.icon}
              <div>
                <h3 className="font-medium">{activity.title}</h3>
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <span>{activity.category}</span>
                  <span>•</span>
                  <span>{activity.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
