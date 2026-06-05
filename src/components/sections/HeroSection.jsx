import React from 'react';
import GlassButton from '../ui/GlassButton';

const HeroSection = ({ onOpenQuote, onOpenSchedule }) => {
  return (
    <section style={styles.hero}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.headline}>Make Your Property Shine Like New</h1>
          <p style={styles.subhead}>
            Premium residential and commercial power washing. Fast, friendly, and satisfaction guaranteed.
          </p>
          <div style={styles.actions}>
            <GlassButton variant="primary" onClick={onOpenQuote} style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Get a Free Quote
            </GlassButton>
            <GlassButton variant="secondary" onClick={onOpenSchedule} style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Schedule a Visit
            </GlassButton>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    position: 'relative',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80") center/cover no-repeat',
  },
  container: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '4rem 3rem',
    background: 'var(--glass-bg)',
    backdropFilter: 'var(--glass-blur)',
    WebkitBackdropFilter: 'var(--glass-blur)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--glass-border)',
    boxShadow: 'var(--glass-shadow)',
  },
  headline: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    letterSpacing: '-1px',
    marginBottom: '1rem',
    color: 'var(--color-text-main)',
  },
  subhead: {
    fontSize: '1.25rem',
    color: 'var(--color-text-light)',
    marginBottom: '2.5rem',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }
};

export default HeroSection;
