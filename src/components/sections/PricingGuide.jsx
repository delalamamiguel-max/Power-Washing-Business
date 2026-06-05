import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import GlassCard from '../ui/GlassCard';

const PricingGuide = () => {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>{t('priceTitle')}</h2>
          <p>{t('priceSubtitle')}</p>
        </div>
        <div className="grid-cards" style={{ maxWidth: '950px', margin: '0 auto' }}>
          <GlassCard padding="3rem 3.5rem" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>{t('priceResTitle')}</h3>
            <div style={styles.price}>
              <span style={styles.currency}>$</span>
              <span style={styles.amount}>149</span>
              <span style={styles.plus}>+</span>
            </div>
            <p style={styles.subtitle}>{t('priceResDesc')}</p>
            <ul style={styles.factors}>
              <li style={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>{t('priceResItem1')}</span>
              </li>
              <li style={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>{t('priceResItem2')}</span>
              </li>
              <li style={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>{t('priceResItem3')}</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard padding="3rem 3.5rem" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>{t('priceComTitle')}</h3>
            <div style={styles.price}>
              <span style={{ fontSize: '2.2rem', fontWeight: '800', lineHeight: '1.4' }}>{t('priceComQuote')}</span>
            </div>
            <p style={styles.subtitle}>{t('priceComDesc')}</p>
            <ul style={styles.factors}>
              <li style={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>{t('priceComItem1')}</span>
              </li>
              <li style={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>{t('priceComItem2')}</span>
              </li>
              <li style={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>{t('priceComItem3')}</span>
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
    fontSize: '1.25rem',
    fontWeight: '700',
    marginTop: '0.4rem',
  },
  amount: {
    fontSize: '3rem',
    fontWeight: '800',
    lineHeight: '1',
  },
  plus: {
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  subtitle: {
    marginBottom: '2rem',
    fontSize: '0.9rem',
    color: 'var(--color-text-main)',
    opacity: 0.8,
    lineHeight: '1.5',
    padding: '0 0.5rem',
  },
  factors: {
    listStyle: 'none',
    padding: '2rem 0 0 0',
    margin: 0,
    borderTop: '1px solid var(--glass-border)',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    color: 'var(--color-text-main)',
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    fontSize: '0.9rem',
    lineHeight: '1.4',
  },
  icon: {
    flexShrink: 0,
    marginTop: '1px',
    width: '18px',
    height: '18px',
  }
};

export default PricingGuide;
