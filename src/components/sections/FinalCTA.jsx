import React from 'react';
import GlassButton from '../ui/GlassButton';
import { useLanguage } from '../../context/LanguageContext';

const FinalCTA = ({ onOpenQuote }) => {
  const { t } = useLanguage();

  return (
    <section className="section" style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.card}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-navy)' }}>{t('ctaTitle')}</h2>
          <p style={styles.subtitle}>{t('ctaSubtitle')}</p>
          <GlassButton variant="primary" onClick={onOpenQuote} style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
            {t('ctaBtn')}
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
