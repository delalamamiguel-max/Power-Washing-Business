import React from 'react';
import { ShieldCheck, ThumbsUp, Leaf } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const TrustBar = () => {
  const { t } = useLanguage();

  return (
    <div style={styles.wrapper}>
      <div className="container" style={styles.container}>
        <div style={styles.item}>
          <ShieldCheck color="var(--color-aqua)" size={24} />
          <span style={styles.text}>{t('trustLicensed')}</span>
        </div>
        <div style={styles.item}>
          <ThumbsUp color="var(--color-aqua)" size={24} />
          <span style={styles.text}>{t('trustSatisfaction')}</span>
        </div>
        <div style={styles.item}>
          <Leaf color="var(--color-aqua)" size={24} />
          <span style={styles.text}>{t('trustEco')}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: 'var(--color-white)',
    padding: '2rem 0',
    borderBottom: '1px solid var(--color-soft-gray)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  text: {
    fontWeight: '600',
    color: 'var(--color-text-main)',
  }
};

export default TrustBar;
