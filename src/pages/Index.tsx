import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Leaf, Recycle, Zap, Car, TreePine, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
} from "@/components/ui/card";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/context/AuthContext";

const features = [
  {
    title: "Eco-Waste Management",
    description: "Track and minimize your household waste with reminders, recycling tips, and locating nearby disposal centers.",
    icon: Recycle,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Sustainable Living Guide",
    description: "Access daily eco-friendly tips, product recommendations, and a carbon footprint calculator.",
    icon: Leaf,
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "Green Commute Planner",
    description: "Find eco-friendly transportation options and track emissions saved by green commuting.",
    icon: Car,
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "Energy Saver",
    description: "Monitor home energy usage, get tips for reduction, and receive notifications during peak times.",
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-500"
  },
  {
    title: "Tree Planting Tracker",
    description: "Document trees planted, learn about species benefits, and participate in community planting events.",
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-500"
  }
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
        heroRef.current.style.opacity = `${1 - scrollY * 0.002}`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      <div className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-b from-eco-50 via-white to-white pointer-events-none" />
        
        <div className="relative flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 pb-12 overflow-hidden">
          <div ref={heroRef} className="w-full max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-6 animate-pulse-slow">
              <Leaf className="h-4 w-4" />
              <span>Empowering sustainable living</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-700 animate-fade-in">
              Your Personal Guide to Eco-Friendly Living
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Track your environmental impact, discover sustainable alternatives, and join a community committed to preserving our planet.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
              {isAuthenticated ? (
                <Link to="/eco-waste">
                  <Button size="lg" className="rounded-full w-full sm:w-auto">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Link to="/eco-waste">
                  <Button size="lg" className="rounded-full w-full sm:w-auto">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
              {!isAuthenticated && (
                <Link to="/login">
                  <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-primary rounded-full animate-pulse-slow" />
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-20 bg-white" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h6 className="text-primary font-medium mb-2">FEATURES</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to live sustainably</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Our comprehensive suite of tools helps you make eco-conscious decisions in every aspect of your daily life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale border border-border/40 bg-white">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-b from-white to-eco-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h6 className="text-primary font-medium mb-2">OUR IMPACT</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Making a difference together</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Join thousands of eco-conscious individuals who are already making a positive impact on our planet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-border/40">
              <BarChart className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-1">2,500+</div>
              <p className="text-foreground/70">Active Users</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-border/40">
              <Recycle className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-1">15 tons</div>
              <p className="text-foreground/70">Waste Recycled</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-border/40">
              <Car className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-1">8,200 kg</div>
              <p className="text-foreground/70">CO₂ Emissions Saved</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-border/40">
              <TreePine className="h-10 w-10 text-emerald-500 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-1">1,200+</div>
              <p className="text-foreground/70">Trees Planted</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-eco-900 to-eco-800 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full">
                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
                  <g opacity="0.3">
                    <rect x="0" y="0" width="100" height="100" fill="white" />
                    <rect x="100" y="100" width="100" height="100" fill="white" />
                    <rect x="200" y="200" width="100" height="100" fill="white" />
                    <rect x="300" y="300" width="100" height="100" fill="white" />
                  </g>
                </svg>
              </div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to make a difference?</h2>
                <p className="text-eco-50 max-w-xl">
                  Join our community of eco-conscious individuals and start your journey towards sustainable living today.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {isAuthenticated ? (
                  <Link to="/eco-waste">
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      Get Started
                    </Button>
                  </Link>
                ) : (
                  <Link to="/eco-waste">
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      Get Started
                    </Button>
                  </Link>
                )}
                {!isAuthenticated && (
                  <Link to="/login">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-eco-900 w-full sm:w-auto"
                    >
                      Sign In
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
