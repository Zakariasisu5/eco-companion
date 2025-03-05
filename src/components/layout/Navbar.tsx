
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Recycle, Leaf, Car, Zap, TreePine } from 'lucide-react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Logo from './Logo';
import UserMenu from './UserMenu';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const { user } = useAuth();
  
  const navLinks = [
    {
      path: '/eco-waste',
      label: 'Eco-Waste',
      icon: <Recycle className="h-4 w-4" />
    },
    {
      path: '/sustainable-living',
      label: 'Sustainable Living',
      icon: <Leaf className="h-4 w-4" />
    },
    {
      path: '/green-commute',
      label: 'Green Commute',
      icon: <Car className="h-4 w-4" />
    },
    {
      path: '/energy-saver',
      label: 'Energy Saver',
      icon: <Zap className="h-4 w-4" />
    },
    {
      path: '/tree-planting',
      label: 'Tree Planting',
      icon: <TreePine className="h-4 w-4" />
    }
  ];

  return (
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <div className="flex items-center justify-between flex-1">
          <DesktopNav links={navLinks} />
          <div className="flex items-center space-x-4">
            <UserMenu />
            <MobileNav links={navLinks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
