import React from 'react';
import GlassButton from '../ui/GlassButton';
import { Droplets } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = ({ onOpenQuote, onOpenSchedule }) => {
  const { language, toggleLanguage, t } = useLanguage();
  return (
    <nav style={styles.nav}>
      <div className="container nav-container">
        <div style={styles.logo}>
          <Droplets size={28} color="var(--color-aqua)" />
          <span style={styles.brandName}>AquaWash Pro</span>
        </div>
        
        <div className="nav-actions">
          <button onClick={toggleLanguage} style={styles.langToggle}>
            {language === 'en' ? 'ES' : 'EN'}
          </button>
          <GlassButton variant="secondary" onClick={onOpenSchedule}>
            {t('navSchedule')}
          </GlassButton>
          <GlassButton variant="primary" onClick={onOpenQuote}>
            {t('navGetQuote')}
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
  },
  langToggle: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: '700',
    color: 'var(--color-navy)',
    padding: '0.5rem',
    borderRadius: '4px',
    transition: 'background 0.2s',
  }
};

export default Navbar;
