import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';

const BeforeAfterSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2>{t('baTitle')}</h2>
          <p>{t('baSubtitle')}</p>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', aspectRatio: '16/9' }}>
          <BeforeAfterSlider 
            beforeImage="/slider-before.png" 
            afterImage="/slider-after.png"
          />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
