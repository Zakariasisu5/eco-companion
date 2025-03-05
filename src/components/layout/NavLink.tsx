
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  to: string;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const NavLink = ({ 
  to, 
  isActive, 
  onClick, 
  className,
  children 
}: NavLinkProps) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "flex items-center transition-colors",
        isActive 
          ? "bg-primary/10 text-primary font-medium" 
          : "text-foreground/70 hover:bg-primary/5 hover:text-foreground",
        className || "px-3 py-2 rounded-md text-sm font-medium"
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
