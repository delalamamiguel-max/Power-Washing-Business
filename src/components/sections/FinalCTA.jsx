import React from 'react';
import GlassButton from '../ui/GlassButton';

const FinalCTA = ({ onOpenQuote, onOpenSchedule }) => {
  return (
    <section className="section" style={styles.section}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>Ready for a Cleaner Property?</h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
          Get your free, no-obligation quote today and see how we can restore your surfaces to like-new condition.
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
    </section>
  );
};

const styles = {
  section: {
    background: 'linear-gradient(to bottom, var(--color-off-white), var(--color-light-blue))',
    padding: '6rem 0',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }
};

export default FinalCTA;
