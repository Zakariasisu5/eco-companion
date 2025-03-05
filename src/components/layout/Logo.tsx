
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <Leaf className="h-8 w-8 text-primary" />
      <span className="text-lg font-semibold">EcoCompanion</span>
    </Link>
  );
};

export default Logo;
