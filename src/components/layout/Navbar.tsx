
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { 
  Menu, 
  X, 
  LogIn,
  User as UserIcon,
  LogOut,
  Leaf
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MobileNav } from './MobileNav';

export const Navbar = () => {
  const { user, profile, isAuthenticated, signOut } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const links = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/eco-waste', label: 'Eco-Waste' },
    { path: '/sustainable-living', label: 'Sustainable Living' },
    { path: '/green-commute', label: 'Green Commute' },
    { path: '/energy-saver', label: 'Energy Saver' },
    { path: '/tree-planting', label: 'Tree Planting' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-lg font-semibold">EcoCompanion</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Auth Buttons or User Menu */}
          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      {profile?.avatar_url ? (
                        <AvatarImage src={profile.avatar_url} alt={profile.full_name || ""} />
                      ) : null}
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {profile?.full_name 
                          ? profile.full_name.substring(0, 2).toUpperCase() 
                          : user?.email?.substring(0, 2).toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 mt-2 frost-glass">
                  <div className="flex flex-col p-2 gap-2">
                    <div className="font-medium">{profile?.full_name || user?.email?.split('@')[0]}</div>
                    <div className="text-xs text-foreground/70">{user?.email}</div>
                  </div>
                  <DropdownMenuSeparator />
                  <Link to="/profile">
                    <DropdownMenuItem className="cursor-pointer">
                      <UserIcon className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  <span>Sign In</span>
                </Button>
              </Link>
            )}
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav isOpen={isMenuOpen} onClose={closeMenu} onSignOut={signOut} />
    </header>
  );
};

export default Navbar;
