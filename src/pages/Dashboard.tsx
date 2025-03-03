
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Recycle, 
  Leaf, 
  Car, 
  Zap, 
  TreePine, 
  BarChart4, 
  TrendingUp,
  Calendar,
  UserRound,
  Settings,
  Bell
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import { PageTransition } from '@/components/ui/PageTransition';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const quickLinks = [
    { 
      title: 'Eco-Waste', 
      icon: Recycle, 
      path: '/eco-waste', 
      color: 'text-blue-500 bg-blue-500/10' 
    },
    { 
      title: 'Sustainable Living', 
      icon: Leaf, 
      path: '/sustainable-living', 
      color: 'text-green-500 bg-green-500/10' 
    },
    { 
      title: 'Green Commute', 
      icon: Car, 
      path: '/green-commute', 
      color: 'text-orange-500 bg-orange-500/10' 
    },
    { 
      title: 'Energy Saver', 
      icon: Zap, 
      path: '/energy-saver', 
      color: 'text-yellow-500 bg-yellow-500/10' 
    },
    { 
      title: 'Tree Planting', 
      icon: TreePine, 
      path: '/tree-planting', 
      color: 'text-emerald-500 bg-emerald-500/10' 
    }
  ];

  const stats = [
    { 
      label: 'Waste Recycled', 
      value: '15 kg', 
      trend: '+8%', 
      icon: Recycle,
      color: 'text-blue-500' 
    },
    { 
      label: 'Energy Saved', 
      value: '35 kWh', 
      trend: '+12%', 
      icon: Zap,
      color: 'text-yellow-500' 
    },
    { 
      label: 'CO₂ Avoided', 
      value: '28 kg', 
      trend: '+5%', 
      icon: BarChart4,
      color: 'text-primary' 
    },
    { 
      label: 'Trees Planted', 
      value: '3', 
      trend: 'New!', 
      icon: TreePine,
      color: 'text-emerald-500' 
    }
  ];

  const upcomingEvents = [
    {
      title: 'Waste Collection',
      date: 'Tomorrow',
      type: 'waste',
      color: 'border-blue-200 bg-blue-50'
    },
    {
      title: 'Community Tree Planting',
      date: 'Saturday, 10 AM',
      type: 'tree',
      color: 'border-emerald-200 bg-emerald-50'
    },
    {
      title: 'Energy Peak Alert',
      date: 'Today, 5-7 PM',
      type: 'energy',
      color: 'border-yellow-200 bg-yellow-50'
    }
  ];

  return (
    <PageTransition>
      <div className="container px-4 py-8 max-w-7xl mx-auto space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome back, {user?.name.split(' ')[0] || 'User'}
            </h1>
            <p className="text-foreground/70">Here's an overview of your eco-friendly activities</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="rounded-full">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Settings className="h-4 w-4" />
            </Button>
            <Button 
              onClick={() => navigate('/profile')}
              variant="ghost" 
              className="flex items-center gap-2"
            >
              <UserRound className="h-4 w-4" />
              <span>Profile</span>
            </Button>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {quickLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto flex flex-col items-center py-4 border-border/60 card-hover"
              onClick={() => navigate(link.path)}
            >
              <div className={`w-10 h-10 rounded-full ${link.color} flex items-center justify-center mb-2`}>
                <link.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">{link.title}</span>
            </Button>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border/60">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-2">
                  <div className={`${stat.color} bg-background p-2 rounded-md`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className="flex items-center text-xs font-medium text-green-600 bg-green-100 rounded-full px-2 py-0.5">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.trend}
                  </div>
                </div>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-foreground/70 text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Weekly Activity and Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Weekly Activity Chart */}
          <Card className="col-span-1 lg:col-span-2 border-border/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Weekly Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted/30 rounded-md border border-border/60">
                <p className="text-muted-foreground">Activity chart visualization</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Upcoming Events */}
          <Card className="border-border/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-md border ${event.color} flex items-start gap-3`}
                >
                  <div className="p-2 bg-white rounded-md">
                    <Calendar className="h-4 w-4 text-foreground/70" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{event.title}</h4>
                    <p className="text-xs text-foreground/70">{event.date}</p>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full text-primary">
                View Calendar
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Tips and Recommendations */}
        <Card className="border-border/60">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Today's Eco Tip</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-primary/5 rounded-md border border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-primary/5">
                <Leaf className="h-32 w-32 -mt-8 -mr-8" />
              </div>
              <div className="relative">
                <h3 className="font-medium text-lg mb-2">Reduce Standby Power Consumption</h3>
                <p className="text-foreground/70">
                  Devices on standby can account for up to 10% of your home energy usage. Unplug electronics or use a power strip to cut power completely when not in use.
                </p>
                <Button variant="link" className="px-0 mt-2 text-primary">Learn more</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
};

export default Dashboard;
