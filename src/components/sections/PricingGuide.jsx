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
        <div className="grid-cards" style={{ maxWidth: '1000px', margin: '0 auto', gap: '2rem' }}>
          {/* Residential Card */}
          <GlassCard style={{ ...styles.card, ...styles.cardPopular }}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle}>{t('priceResTitle')}</h3>
              <div style={styles.badge}>Most Popular</div>
            </div>
            
            <div style={styles.priceContainer}>
              <span style={styles.currency}>$</span>
              <span style={styles.amount}>149</span>
              <span style={styles.plus}>+</span>
            </div>
            
            <p style={styles.subtitle}>{t('priceResDesc')}</p>
            
            <ul style={styles.factors}>
              <li style={styles.listItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>{t('priceResItem1')}</span>
              </li>
              <li style={styles.listItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>{t('priceResItem2')}</span>
              </li>
              <li style={styles.listItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>{t('priceResItem3')}</span>
              </li>
            </ul>
          </GlassCard>

          {/* Commercial Card */}
          <GlassCard style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle}>{t('priceComTitle')}</h3>
            </div>
            
            <div style={styles.priceContainer}>
              <span style={styles.customQuoteText}>{t('priceComQuote')}</span>
            </div>
            
            <p style={styles.subtitle}>{t('priceComDesc')}</p>
            
            <ul style={styles.factors}>
              <li style={styles.listItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>{t('priceComItem1')}</span>
              </li>
              <li style={styles.listItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>{t('priceComItem2')}</span>
              </li>
              <li style={styles.listItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-aqua)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}><polyline points="20 6 9 17 4 12"></polyline></svg>
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
  card: {
    padding: 'clamp(2rem, 5vw, 3rem)',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    height: '100%',
  },
  cardPopular: {
    border: '1px solid var(--color-aqua)',
    boxShadow: '0 8px 30px rgba(0, 175, 239, 0.1)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  cardTitle: {
    fontSize: '1.25rem',
    margin: 0,
    fontWeight: '700',
  },
  badge: {
    background: 'var(--color-aqua)',
    color: '#fff',
    fontSize: '0.75rem',
    fontWeight: '700',
    padding: '0.3rem 0.75rem',
    borderRadius: '100px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    color: 'var(--color-navy)',
    marginBottom: '1rem',
    minHeight: '3.5rem',
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
  customQuoteText: {
    fontSize: '2rem',
    fontWeight: '800',
    lineHeight: '1.2',
  },
  subtitle: {
    marginBottom: '2.5rem',
    fontSize: '0.95rem',
    color: 'var(--color-text-light)',
    lineHeight: '1.5',
  },
  factors: {
    listStyle: 'none',
    padding: '2.5rem 0 0 0',
    margin: 'auto 0 0 0',
    borderTop: '1px solid var(--glass-border)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    color: 'var(--color-text-main)',
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    fontSize: '0.95rem',
    lineHeight: '1.4',
  },
  icon: {
    flexShrink: 0,
    marginTop: '2px',
  }
};

export default PricingGuide;
