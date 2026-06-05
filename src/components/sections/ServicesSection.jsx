import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import GlassButton from '../ui/GlassButton';
import { CheckCircle2 } from 'lucide-react';

const ServicesSection = ({ onOpenQuote }) => {
  const { t } = useLanguage();

  const residential = [
    'Driveways', 'Full exterior house washing', 'Roof washing', 
    'Patios and decks', 'Walkways', 'Pool areas', 
    'Gutters', 'Windows / exterior glass', 'Mold, algae, mildew & stain removal'
  ];

  const commercial = [
    'Storefronts', 'Building exteriors', 'Sidewalks', 
    'Parking lots', 'Entryways', 'Multi-family / HOA exterior cleaning', 
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

        {/* Residential Row */}
        <div className="split-row" style={{ marginBottom: '6rem' }}>
          <div className="split-img">
            <img 
              src="/residential.png" 
              alt="Residential driveway pressure washing" 
              style={styles.img}
            />
          </div>
          <div className="split-content">
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{t('resTitle')}</h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
              Restore your home's curb appeal safely and effectively. We treat every home like our own, ensuring delicate surfaces are washed gently and tough concrete is power washed thoroughly.
            </p>
            <ul style={styles.list}>
              {residential.map((item, idx) => (
                <li key={idx} style={styles.listItem}>
                  <CheckCircle2 size={18} color="var(--color-aqua)" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '2rem' }}>
              <GlassButton variant="primary" onClick={onOpenQuote}>
                Get a Free Quote
              </GlassButton>
            </div>
          </div>
        </div>

        {/* Commercial Row */}
        <div className="split-row reverse">
          <div className="split-content">
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{t('comTitle')}</h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
              Make a great first impression. We handle high-traffic areas, large buildings, and routine maintenance to keep your business looking professional and inviting year-round.
            </p>
            <ul style={styles.list}>
              {commercial.map((item, idx) => (
                <li key={idx} style={styles.listItem}>
                  <CheckCircle2 size={18} color="var(--color-aqua)" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '2rem' }}>
              <GlassButton variant="primary" onClick={onOpenQuote}>
                Get a Free Quote
              </GlassButton>
            </div>
          </div>
          <div className="split-img">
            <img 
              src="/commercial.png" 
              alt="Commercial storefront and sidewalk cleaning" 
              style={styles.img}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

const styles = {
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--glass-shadow)',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: 'var(--color-text-main)',
    fontWeight: '500',
  }
};

export default ServicesSection;
