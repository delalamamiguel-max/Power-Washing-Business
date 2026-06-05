import React from 'react';
import GlassCard from '../ui/GlassCard';

const PricingGuide = () => {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>Simple, Transparent Pricing</h2>
          <p>No hidden fees. Every exterior project is unique, but here is what you can expect.</p>
        </div>
        <div className="grid-cards" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <GlassCard padding="3rem 2.5rem" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Residential</h3>
            <div style={styles.price}>
              <span style={styles.currency}>$</span>
              <span style={styles.amount}>149</span>
              <span style={styles.plus}>+</span>
            </div>
            <p style={styles.subtitle}>Starting price for basic driveway or patio cleaning.</p>
            <ul style={styles.factors}>
              <li style={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Final price based on square footage</span>
              </li>
              <li style={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Type of exterior surface</span>
              </li>
              <li style={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Level of buildup</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard padding="3rem 2.5rem" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Commercial</h3>
            <div style={styles.price}>
              <span style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.4' }}>Custom Quote</span>
            </div>
            <p style={styles.subtitle}>Tailored to your specific property needs.</p>
            <ul style={styles.factors}>
              <li style={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Building size and height</span>
              </li>
              <li style={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Water access and drainage</span>
              </li>
              <li style={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Frequency of service</span>
              </li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

const styles = {
  price: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: 'var(--color-aqua)',
    marginBottom: '1rem',
    minHeight: '3.5rem', // Keeps both price areas vertically aligned
  },
  currency: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginTop: '0.25rem',
  },
  amount: {
    fontSize: '3.5rem',
    fontWeight: '800',
    lineHeight: '1',
  },
  plus: {
    fontSize: '1.75rem',
    fontWeight: '700',
  },
  subtitle: {
    marginBottom: '2rem',
    fontSize: '0.95rem',
    color: 'var(--color-text-main)',
    opacity: 0.8,
  },
  factors: {
    listStyle: 'none',
    paddingTop: '2rem',
    borderTop: '1px solid var(--glass-border)',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    color: 'var(--color-text-main)',
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    fontSize: '0.95rem',
    lineHeight: '1.4',
  },
  icon: {
    flexShrink: 0,
    marginTop: '2px',
  }
};

export default PricingGuide;
