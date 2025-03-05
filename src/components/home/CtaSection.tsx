
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const CtaSection = () => {
  const { isAuthenticated } = useAuth();
  
  return (
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
  );
};

export default CtaSection;
