
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { NavLink } from '@/components/layout/NavLink';
import { Recycle, Leaf, Car, Zap, TreePine } from 'lucide-react';

interface NavLinkItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

interface DesktopNavProps {
  links: NavLinkItem[];
}

export const DesktopNav = ({ links }: DesktopNavProps) => {
  const location = useLocation();
  
  return (
    <nav className="hidden md:flex items-center space-x-1">
      {links.map(link => (
        <NavLink 
          key={link.path}
          to={link.path}
          isActive={location.pathname === link.path}
        >
          {link.icon}
          <span className="ml-2">{link.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default DesktopNav;
