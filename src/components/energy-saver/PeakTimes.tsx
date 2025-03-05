
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Bell, BellOff, AlertTriangle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const PeakTimes = () => {
  const { toast } = useToast();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  
  const handleToggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    
    toast({
      title: !notificationsEnabled ? "Peak time notifications enabled" : "Peak time notifications disabled",
      description: !notificationsEnabled 
        ? "You'll receive alerts when electricity demand is high." 
        : "You will no longer receive peak time alerts.",
      variant: !notificationsEnabled ? "default" : "destructive",
    });
  };

  // Mock data for peak times
  const peakTimes = [
    { day: "Monday", times: ["5:00 PM - 9:00 PM"], status: "high" },
    { day: "Tuesday", times: ["5:00 PM - 9:00 PM"], status: "high" },
    { day: "Wednesday", times: ["5:00 PM - 9:00 PM"], status: "medium" },
    { day: "Thursday", times: ["5:00 PM - 9:00 PM"], status: "high" },
    { day: "Friday", times: ["4:00 PM - 8:00 PM"], status: "high" },
    { day: "Saturday", times: ["2:00 PM - 6:00 PM"], status: "medium" },
    { day: "Sunday", times: ["2:00 PM - 6:00 PM"], status: "low" }
  ];
  
  const getCurrentStatus = () => {
    // In a real app, this would check the current time against peak periods
    const today = new Date().getDay();
    const hour = new Date().getHours();
    
    // Sunday is 0, Saturday is 6
    if (today === 0) {
      return hour >= 14 && hour < 18 ? "low" : "off-peak";
    } else if (today === 6) {
      return hour >= 14 && hour < 18 ? "medium" : "off-peak";
    } else if (today >= 1 && today <= 5) {
      return hour >= 17 && hour < 21 ? "high" : "off-peak";
    }
    
    return "off-peak";
  };
  
  const currentStatus = getCurrentStatus();
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "high": return "text-red-500 bg-red-500/10";
      case "medium": return "text-orange-500 bg-orange-500/10";
      case "low": return "text-yellow-500 bg-yellow-500/10";
      default: return "text-green-500 bg-green-500/10";
    }
  };
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "high": return <AlertTriangle className="h-5 w-5" />;
      case "medium": return <AlertTriangle className="h-5 w-5" />;
      case "low": return <Clock className="h-5 w-5" />;
      default: return <Check className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <Clock className="mr-2 h-5 w-5 text-primary" />
            Peak Energy Times
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Electricity rates are typically higher during peak demand times. Shifting your energy use 
            to off-peak hours can save money and reduce strain on the power grid.
          </p>
          
          <div className="flex items-center justify-between p-4 rounded-lg mb-6 bg-primary/5">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${getStatusColor(currentStatus)}`}>
                {getStatusIcon(currentStatus)}
              </div>
              <div>
                <h3 className="font-medium">Current Status</h3>
                <p className="text-sm text-foreground/70 capitalize">{currentStatus.replace('-', ' ')} time</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Switch 
                id="notifications" 
                checked={notificationsEnabled} 
                onCheckedChange={handleToggleNotifications} 
              />
              <Label htmlFor="notifications" className="text-sm">
                {notificationsEnabled ? "Notifications On" : "Enable Notifications"}
              </Label>
            </div>
          </div>
          
          <h3 className="font-medium mb-4">Weekly Peak Hours Schedule</h3>
          <div className="space-y-2">
            {peakTimes.map((day, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="font-medium">{day.day}</div>
                <div className="flex items-center gap-2">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(day.status)}`}>
                    {day.status.charAt(0).toUpperCase() + day.status.slice(1)}
                  </div>
                  <div className="text-sm">{day.times.join(', ')}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-primary/5 rounded-lg">
            <h3 className="font-medium mb-2">Energy-Saving Tips During Peak Hours</h3>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Avoid using large appliances like washers, dryers, and dishwashers</li>
              <li>Pre-cool or pre-heat your home before peak hours begin</li>
              <li>Use smart plugs to automatically turn off non-essential devices</li>
              <li>Charge electric vehicles and devices during off-peak hours</li>
              <li>Consider solar power with battery storage to offset peak grid usage</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PeakTimes;
