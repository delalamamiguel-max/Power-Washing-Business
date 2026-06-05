import React from 'react';
import GlassButton from '../ui/GlassButton';
import { Droplets } from 'lucide-react';

const Navbar = ({ onOpenQuote, onOpenSchedule }) => {
  return (
    <nav style={styles.nav}>
      <div className="container nav-container">
        <div style={styles.logo}>
          <Droplets size={28} color="var(--color-aqua)" />
          <span style={styles.brandName}>AquaWash Pro</span>
        </div>
        
        <div className="nav-actions">
          <GlassButton variant="secondary" onClick={onOpenSchedule}>
            Schedule Visit
          </GlassButton>
          <GlassButton variant="primary" onClick={onOpenQuote}>
            Get a Quote
          </GlassButton>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'var(--glass-bg)',
    backdropFilter: 'var(--glass-blur)',
    WebkitBackdropFilter: 'var(--glass-blur)',
    borderBottom: '1px solid var(--glass-border)',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
  },
  brandName: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--color-text-main)',
    letterSpacing: '-0.5px',
  }
};

export default Navbar;
