import React from 'react';
import BRAND from '../config/brand';

// If you have a logo image, uncomment and use it:
// import logo from '../assets/logo.png';
// import logoWhite from '../assets/logo-white.png';

const Logo = ({ variant = 'default', className = '', size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-xl',
    lg: 'w-16 h-16 text-2xl',
    xl: 'w-20 h-20 text-3xl',
  };
  
  const isWhite = variant === 'white';
  const bgGradient = isWhite 
    ? 'from-primary-400 to-secondary-400'
    : 'from-primary-500 to-secondary-500';
  
  // If you have a logo image, use it instead:
  // return (
  //   <img 
  //     src={isWhite ? logoWhite : logo} 
  //     alt={BRAND.company.name}
  //     className={`${className}`}
  //     style={{ height: size === 'sm' ? '32px' : size === 'md' ? '48px' : '64px' }}
  //   />
  // );
  
  // Placeholder until you add your logo
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${sizes[size]} bg-gradient-to-br ${bgGradient} rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/25`}>
        <span className={`font-bold ${isWhite ? 'text-white' : 'text-white'}`}>
          360
        </span>
      </div>
      <span className={`font-bold ${isWhite ? 'text-white' : 'text-gray-800'}`}>
        <span className={isWhite ? 'text-white' : 'text-gray-800'}>360</span>
        <span className={isWhite ? 'text-primary-300' : 'text-primary-600'}>Cloud</span>
        <span className={isWhite ? 'text-white' : 'text-gray-800'}>School</span>
      </span>
    </div>
  );
};

export default Logo;
