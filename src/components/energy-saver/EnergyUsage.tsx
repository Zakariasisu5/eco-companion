
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, PieChart, Battery, Home, PieChartIcon } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as RechartsBarChart, Bar, PieChart as RechartsPieChart, Pie, Cell } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

// Sample data - in a real app, this would come from a database or API
const dailyData = [
  { time: '00:00', usage: 2.1, temperature: 18 },
  { time: '03:00', usage: 1.5, temperature: 17 },
  { time: '06:00', usage: 2.3, temperature: 18 },
  { time: '09:00', usage: 4.2, temperature: 21 },
  { time: '12:00', usage: 3.8, temperature: 23 },
  { time: '15:00', usage: 3.5, temperature: 22 },
  { time: '18:00', usage: 5.2, temperature: 21 },
  { time: '21:00', usage: 4.1, temperature: 19 },
];

const weeklyData = [
  { day: 'Mon', usage: 18.4 },
  { day: 'Tue', usage: 17.2 },
  { day: 'Wed', usage: 19.8 },
  { day: 'Thu', usage: 16.5 },
  { day: 'Fri', usage: 21.2 },
  { day: 'Sat', usage: 24.5 },
  { day: 'Sun', usage: 22.8 },
];

const monthlyData = [
  { month: 'Jan', usage: 520 },
  { month: 'Feb', usage: 480 },
  { month: 'Mar', usage: 460 },
  { month: 'Apr', usage: 440 },
  { month: 'May', usage: 420 },
  { month: 'Jun', usage: 480 },
  { month: 'Jul', usage: 510 },
  { month: 'Aug', usage: 530 },
  { month: 'Sep', usage: 490 },
  { month: 'Oct', usage: 470 },
  { month: 'Nov', usage: 520 },
  { month: 'Dec', usage: 560 },
];

const deviceUsageData = [
  { name: 'HVAC', value: 45, color: '#4ade80' },
  { name: 'Lighting', value: 15, color: '#facc15' },
  { name: 'Kitchen', value: 20, color: '#3b82f6' },
  { name: 'Electronics', value: 12, color: '#ec4899' },
  { name: 'Other', value: 8, color: '#8b5cf6' },
];

const EnergyUsage = () => {
  const [timeRange, setTimeRange] = useState("daily");
  const [targetUsage, setTargetUsage] = useState(20);
  const [showTemperature, setShowTemperature] = useState(false);
  const [activePieIndex, setActivePieIndex] = useState(0);

  // Calculate total usage for today
  const todayUsage = dailyData.reduce((acc, item) => acc + item.usage, 0);
  
  // Calculate cost (simple estimate)
  const costPerKWh = 0.15; // example rate
  const todayCost = (todayUsage * costPerKWh).toFixed(2);
  
  // Calculate carbon footprint (simple estimate)
  const carbonPerKWh = 0.4; // kg CO2 per kWh
  const todayCarbon = (todayUsage * carbonPerKWh).toFixed(1);

  const handleTemperatureToggle = () => {
    setShowTemperature(!showTemperature);
  };

  const renderTimeRangeData = () => {
    switch (timeRange) {
      case "daily":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={dailyData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="usageGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
                </linearGradient>
                {showTemperature && (
                  <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                  </linearGradient>
                )}
              </defs>
              <XAxis dataKey="time" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
              {showTemperature && <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />}
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="usage" 
                stroke="#4ade80" 
                fillOpacity={1} 
                fill="url(#usageGradient)" 
                name="Energy (kWh)"
                yAxisId="left"
              />
              {showTemperature && (
                <Area 
                  type="monotone" 
                  dataKey="temperature" 
                  stroke="#f97316" 
                  fillOpacity={1} 
                  fill="url(#tempGradient)" 
                  name="Temperature (°C)"
                  yAxisId="right"
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        );
      case "weekly":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <RechartsBarChart data={weeklyData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="usage" name="Energy (kWh)" fill="#4ade80" radius={[4, 4, 0, 0]} />
            </RechartsBarChart>
          </ResponsiveContainer>
        );
      case "monthly":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="usage" name="Energy (kWh)" stroke="#4ade80" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today's Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayUsage.toFixed(1)} kWh</div>
            <p className="text-xs text-muted-foreground">
              {todayUsage > targetUsage ? "Over target" : "Under target"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Estimated Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${todayCost}</div>
            <p className="text-xs text-muted-foreground">Based on your current rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Carbon Footprint</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayCarbon} kg CO₂</div>
            <p className="text-xs text-muted-foreground">Environmental impact</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Energy Consumption</CardTitle>
          <CardDescription>
            Monitor your energy usage over time
          </CardDescription>
          <div className="flex justify-between mt-2">
            <Tabs value={timeRange} onValueChange={setTimeRange}>
              <TabsList>
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
            {timeRange === "daily" && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleTemperatureToggle}
                className="text-xs"
              >
                {showTemperature ? "Hide Temperature" : "Show Temperature"}
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {renderTimeRangeData()}
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <div className="text-sm font-medium mb-2">Target Usage</div>
          <div className="flex items-center w-full gap-4">
            <Slider 
              defaultValue={[targetUsage]} 
              max={50} 
              step={1}
              onValueChange={(value) => setTargetUsage(value[0])}
              className="flex-1"
            />
            <span className="text-sm font-medium w-12">{targetUsage} kWh</span>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage by Device</CardTitle>
          <CardDescription>
            Breakdown of energy consumption by device category
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="w-full max-w-md">
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={deviceUsageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  activeIndex={activePieIndex}
                  onMouseEnter={(_, index) => setActivePieIndex(index)}
                >
                  {deviceUsageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex flex-wrap justify-center gap-2">
            {deviceUsageData.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2"
                onMouseEnter={() => setActivePieIndex(index)}
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm">{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Optimization Suggestions</CardTitle>
          <CardDescription>
            Smart recommendations to reduce energy consumption
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <Home className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Adjust thermostat by 2°C</h4>
                <p className="text-sm text-muted-foreground">Potential savings: 5% on heating/cooling</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <Battery className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Unplug idle electronics</h4>
                <p className="text-sm text-muted-foreground">Potential savings: 3-5% on electricity</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
              <PieChartIcon className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Schedule appliance usage</h4>
                <p className="text-sm text-muted-foreground">Run appliances during off-peak hours</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnergyUsage;
