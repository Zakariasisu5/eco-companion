
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  image?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('eco_user');
    
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user', error);
        localStorage.removeItem('eco_user');
      }
    }
    
    setIsLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock authentication - in a real app this would be an API call
      if (email === 'demo@example.com' && password === 'password') {
        const mockUser = {
          id: '1',
          name: 'Demo User',
          email: 'demo@example.com',
          isAdmin: false,
        };
        
        setUser(mockUser);
        localStorage.setItem('eco_user', JSON.stringify(mockUser));
        toast.success('Successfully signed in!');
        return;
      }
      
      // Demo admin user
      if (email === 'admin@example.com' && password === 'admin') {
        const adminUser = {
          id: '2',
          name: 'Zakaria Sisu',
          email: 'zakariasisu5@gmail.com',
          isAdmin: true,
          image: '/lovable-uploads/a8c669ec-763e-4135-b46a-a1500e096cec.png'
        };
        
        setUser(adminUser);
        localStorage.setItem('eco_user', JSON.stringify(adminUser));
        toast.success('Successfully signed in as admin!');
        return;
      }
      
      throw new Error('Invalid email or password');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('An error occurred during sign in');
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock user creation - in a real app this would be an API call
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        isAdmin: false,
      };
      
      setUser(newUser);
      localStorage.setItem('eco_user', JSON.stringify(newUser));
      toast.success('Account created successfully!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('An error occurred during sign up');
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('eco_user');
    toast.info('You have been signed out');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};
