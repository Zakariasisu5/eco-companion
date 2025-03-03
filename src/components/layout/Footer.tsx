
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Github, Linkedin, Mail, Leaf } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary/5 pt-12 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">EcoCompanion</span>
            </Link>
            <p className="text-sm text-foreground/70 mb-4">
              Your personal guide to sustainable living. Track your environmental impact, discover eco-friendly
              alternatives, and join a community committed to preserving our planet.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/eco-waste" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Eco-Waste Management
                </Link>
              </li>
              <li>
                <Link to="/sustainable-living" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Sustainable Living Guide
                </Link>
              </li>
              <li>
                <Link to="/green-commute" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Green Commute Planner
                </Link>
              </li>
              <li>
                <Link to="/energy-saver" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Energy Saver
                </Link>
              </li>
              <li>
                <Link to="/tree-planting" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Tree Planting Tracker
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-4">Connect with Zakaria</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:zakariasisu5@gmail.com" 
                  className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>zakariasisu5@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/mr-zakaria-sisu-9b2486239/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Zakariasisu5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-foreground/60 flex items-center justify-center gap-1">
            <span>© {new Date().getFullYear()} EcoCompanion. Made with</span>
            <Heart className="h-3 w-3 fill-red-500 text-red-500" />
            <span>for a greener planet.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
