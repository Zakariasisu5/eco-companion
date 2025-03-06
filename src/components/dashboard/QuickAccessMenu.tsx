
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Trash2, Leaf, Zap, Car, TreePine
} from 'lucide-react';

const QuickAccessMenu = () => {
  const quickLinks = [
    { 
      name: "Eco Waste", 
      path: "/eco-waste", 
      icon: <Trash2 className="h-4 w-4 mr-2" />,
      color: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
    },
    { 
      name: "Sustainable Living", 
      path: "/sustainable-living", 
      icon: <Leaf className="h-4 w-4 mr-2" />,
      color: "bg-green-500/10 text-green-500 hover:bg-green-500/20"
    },
    { 
      name: "Energy Saver", 
      path: "/energy-saver", 
      icon: <Zap className="h-4 w-4 mr-2" />,
      color: "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
    },
    { 
      name: "Tree Planting", 
      path: "/tree-planting", 
      icon: <TreePine className="h-4 w-4 mr-2" />,
      color: "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20"
    }
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {quickLinks.map((link, index) => (
        <Button 
          key={index} 
          variant="ghost" 
          size="sm" 
          asChild
          className={link.color}
        >
          <Link to={link.path}>
            {link.icon}
            {link.name}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default QuickAccessMenu;
