import React from 'react';
import GlassCard from '../ui/GlassCard';

const PricingGuide = () => {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>Simple, Transparent Pricing</h2>
          <p>No hidden fees. Every property is unique, but here is what you can expect.</p>
        </div>
        <div style={styles.grid}>
          <GlassCard padding="3rem" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Residential</h3>
            <div style={styles.price}>
              <span style={styles.currency}>$</span>
              <span style={styles.amount}>149</span>
              <span style={styles.plus}>+</span>
            </div>
            <p style={{ marginBottom: '2rem' }}>Starting price for basic driveway or patio cleaning.</p>
            <ul style={styles.factors}>
              <li>Final price based on square footage</li>
              <li>Type of surface</li>
              <li>Level of buildup</li>
            </ul>
          </GlassCard>

          <GlassCard padding="3rem" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Commercial</h3>
            <div style={styles.price}>
              <span style={styles.amount} style={{ fontSize: '2.5rem', fontWeight: '800' }}>Custom Quote</span>
            </div>
            <p style={{ marginBottom: '2rem', marginTop: '0.5rem' }}>Tailored to your specific property needs.</p>
            <ul style={styles.factors}>
              <li>Building size and height</li>
              <li>Water access and drainage</li>
              <li>Frequency of service</li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  price: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: 'var(--color-aqua)',
    marginBottom: '0.5rem',
  },
  currency: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginTop: '0.5rem',
  },
  amount: {
    fontSize: '4rem',
    fontWeight: '800',
    lineHeight: '1',
  },
  plus: {
    fontSize: '2rem',
    fontWeight: '700',
  },
  factors: {
    listStyle: 'none',
    paddingTop: '2rem',
    borderTop: '1px solid var(--glass-border)',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    color: 'var(--color-text-main)',
  }
};

export default PricingGuide;
