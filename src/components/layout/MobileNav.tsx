
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { NavLink } from '@/components/layout/NavLink';

interface NavLinkItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

interface MobileNavProps {
  isOpen: boolean;
  links: NavLinkItem[];
  onClose: () => void;
  onSignOut: () => Promise<void>;
}

export const MobileNav = ({ 
  isOpen, 
  links, 
  onClose,
  onSignOut 
}: MobileNavProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  
  return (
    <div
      className={`fixed inset-0 top-16 bg-background z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}
    >
      <nav className="container h-full flex flex-col gap-2 p-4">
        {links.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            isActive={location.pathname === link.path}
            onClick={onClose}
            className="py-3 px-4 rounded-md"
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
        
        {isAuthenticated ? (
          <Button 
            variant="outline" 
            className="mt-4 w-full justify-start"
            onClick={() => {
              onSignOut();
              onClose();
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign out
          </Button>
        ) : (
          <div className="mt-4 flex flex-col gap-2">
            <Link to="/login" onClick={onClose}>
              <Button variant="outline" className="w-full justify-start">
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </Link>
            <Link to="/signup" onClick={onClose}>
              <Button variant="default" className="w-full justify-start">
                Sign Up
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default MobileNav;
