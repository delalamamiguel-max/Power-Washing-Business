import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Home, Building2, CheckCircle2 } from 'lucide-react';

const ServicesSection = () => {
  const residential = [
    'Driveways', 'Full exterior house washing', 'Roof washing', 
    'Patios and decks', 'Walkways', 'Pool areas', 
    'Gutters', 'Windows/exterior glass', 'Mold, algae, mildew & stain removal'
  ];

  const commercial = [
    'Storefronts', 'Building exteriors', 'Sidewalks', 
    'Parking lots', 'Entryways', 'Multi-family/HOA exterior cleaning', 
    'Routine maintenance cleaning'
  ];

  return (
    <section className="section" id="services">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>Premium Power Washing Services</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            We specialize in bringing out the best in your property's exterior, using safe methods for every surface.
          </p>
        </div>

        <div className="grid-cards">
          <GlassCard hoverEffect padding="3rem" style={{ borderTop: '4px solid var(--color-aqua)' }}>
            <div style={styles.cardHeader}>
              <div style={styles.iconWrapper}>
                <Home size={32} color="var(--color-aqua)" />
              </div>
              <h3>Residential Power Washing</h3>
              <p>Improve curb appeal and protect your home's exterior surfaces.</p>
            </div>
            <ul style={styles.list}>
              {residential.map((item, idx) => (
                <li key={idx} style={styles.listItem}>
                  <CheckCircle2 size={18} color="var(--color-green-accent)" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard hoverEffect padding="3rem" style={{ borderTop: '4px solid var(--color-text-main)' }}>
            <div style={styles.cardHeader}>
              <div style={styles.iconWrapperDark}>
                <Building2 size={32} color="var(--color-text-main)" />
              </div>
              <h3>Commercial Power Washing</h3>
              <p>Improve customer perception, safety, and property maintenance.</p>
            </div>
            <ul style={styles.list}>
              {commercial.map((item, idx) => (
                <li key={idx} style={styles.listItem}>
                  <CheckCircle2 size={18} color="var(--color-green-accent)" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

const styles = {
  cardHeader: {
    marginBottom: '2rem',
  },
  iconWrapper: {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    backgroundColor: 'var(--color-light-blue)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  iconWrapperDark: {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    backgroundColor: 'var(--color-soft-gray)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: 'var(--color-text-main)',
  }
};

export default ServicesSection;
