
import React from 'react';
import { AuthForm } from '@/components/auth/AuthForm';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf } from 'lucide-react';

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gradient-to-b from-white to-primary/5">
      <div className="w-full max-w-md">
        <div className="mb-6 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          
          <Link to="/" className="flex items-center gap-1.5">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-medium">EcoCompanion</span>
          </Link>
        </div>
        
        <AuthForm mode="signup" />
      </div>
    </div>
  );
};

export default Signup;
