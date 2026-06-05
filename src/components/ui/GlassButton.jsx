import React from 'react';
import './GlassButton.css';

const GlassButton = ({ children, variant = 'primary', className = '', ...props }) => {
  return (
    <button className={`glass-btn glass-btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default GlassButton;
