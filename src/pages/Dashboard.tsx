
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, PieChart, LineChart, Activity, Calendar,
  Leaf, Droplet, Wind, Zap, Car, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/ui/PageTransition';
import EcoImpactSummary from '@/components/dashboard/EcoImpactSummary';
import RecentActivities from '@/components/dashboard/RecentActivities';
import SustainabilityGoals from '@/components/dashboard/SustainabilityGoals';
import QuickAccessMenu from '@/components/dashboard/QuickAccessMenu';

const Dashboard = () => {
  const { user, profile, isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">
      <Activity className="h-8 w-8 animate-spin text-primary" />
    </div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <PageTransition>
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome, {profile?.full_name || user?.email?.split('@')[0]}
            </h1>
            <p className="text-muted-foreground">
              Here's your sustainability dashboard for today
            </p>
          </div>
          <QuickAccessMenu />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <EcoImpactSummary />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-primary" />
                  Sustainability Metrics
                </CardTitle>
                <CardDescription>
                  Track your environmental impact over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="waste">
                  <TabsList className="mb-4">
                    <TabsTrigger value="waste">
                      <Droplet className="mr-2 h-4 w-4" />
                      Waste
                    </TabsTrigger>
                    <TabsTrigger value="energy">
                      <Zap className="mr-2 h-4 w-4" />
                      Energy
                    </TabsTrigger>
                    <TabsTrigger value="commute">
                      <Car className="mr-2 h-4 w-4" />
                      Commute
                    </TabsTrigger>
                    <TabsTrigger value="carbon">
                      <Wind className="mr-2 h-4 w-4" />
                      Carbon
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="waste" className="h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-2">Connect your waste tracking to see metrics</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/eco-waste">
                          Go to Waste Tracking
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="energy" className="h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-2">Connect your energy saver to see metrics</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/energy-saver">
                          Go to Energy Saver
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="commute" className="h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-2">Connect your commute tracking to see metrics</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/green-commute">
                          Go to Green Commute
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="carbon" className="h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-2">Calculate your carbon footprint to see metrics</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/sustainable-living">
                          Go to Carbon Calculator
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <SustainabilityGoals />
          </div>
        </div>

        <RecentActivities />
      </div>
    </PageTransition>
  );
};

export default Dashboard;
