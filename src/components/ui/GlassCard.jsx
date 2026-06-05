import React from 'react';

const GlassCard = ({ children, className = '', hoverEffect = false, padding = '2rem', ...props }) => {
  return (
    <div 
      className={`glass-panel ${className}`}
      style={{
        padding: padding,
        transition: hoverEffect ? 'all 0.3s ease' : 'none',
        cursor: hoverEffect ? 'pointer' : 'default',
        transform: 'translateY(0)',
      }}
      onMouseEnter={(e) => {
        if(hoverEffect) {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = 'var(--glass-shadow-hover)';
        }
      }}
      onMouseLeave={(e) => {
        if(hoverEffect) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
