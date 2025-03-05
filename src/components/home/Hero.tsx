
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const Hero = () => {
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
  );
};

export default Hero;
