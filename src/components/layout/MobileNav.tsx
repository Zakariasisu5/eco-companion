
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Recycle, 
  Leaf, 
  Car, 
  Zap, 
  TreePine,
  User
} from 'lucide-react';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onSignOut?: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, onSignOut }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/eco-waste', label: 'Waste', icon: Recycle },
    { path: '/sustainable-living', label: 'Living', icon: Leaf },
    { path: '/green-commute', label: 'Commute', icon: Car },
    { path: '/energy-saver', label: 'Energy', icon: Zap },
    { path: '/tree-planting', label: 'Trees', icon: TreePine },
    { path: '/profile', label: 'Profile', icon: User },
  ];
  
  if (!isOpen) return null;
  
  return (
    <div className="mobile-navbar md:hidden frost-glass border-t py-2">
      <div className="grid grid-cols-4 gap-1">
        {navItems.slice(0, 4).map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-md text-xs ${
              location.pathname === item.path
                ? 'text-primary font-medium'
                : 'text-foreground/60'
            }`}
            onClick={onClose}
          >
            <item.icon className={`h-5 w-5 mb-1 ${
              location.pathname === item.path ? 'text-primary' : 'text-foreground/60'
            }`} />
            {item.label}
          </Link>
        ))}
      </div>
      
      {/* Second row for remaining items */}
      <div className="grid grid-cols-3 gap-1 mt-1">
        {navItems.slice(4).map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-md text-xs ${
              location.pathname === item.path
                ? 'text-primary font-medium'
                : 'text-foreground/60'
            }`}
            onClick={onClose}
          >
            <item.icon className={`h-5 w-5 mb-1 ${
              location.pathname === item.path ? 'text-primary' : 'text-foreground/60'
            }`} />
            {item.label}
          </Link>
        ))}
      </div>
      
      {onSignOut && (
        <div className="mt-4 px-2">
          <button 
            onClick={() => {
              onSignOut();
              onClose();
            }}
            className="w-full py-2 text-sm text-center text-foreground/80 hover:text-primary"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
