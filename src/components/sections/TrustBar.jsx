import React from 'react';
import { Award, Home, ThumbsUp, ShieldCheck } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Home, text: 'Locally Owned' },
    { icon: ShieldCheck, text: 'Free Estimates' },
    { icon: Award, text: 'Residential & Commercial' },
    { icon: ThumbsUp, text: 'Satisfaction Focused' },
  ];

  return (
    <div style={styles.wrapper}>
      <div className="container" style={styles.container}>
        {items.map((item, idx) => (
          <div key={idx} style={styles.item}>
            <item.icon size={24} color="var(--color-aqua)" />
            <span style={styles.text}>{item.text}</span>
          </div>
        ))}
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
