import React, { useState } from 'react';
import GlassButton from '../ui/GlassButton';

const QuoteForm = ({ onSuccess }) => {
  const { t } = useLanguage();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
  const { t } = useLanguage();

    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.group}>
        <label style={styles.label}>Name</label>
        <input type="text" placeholder="Your Name" style={styles.input} required />
      </div>
      <div className="form-row">
        <div style={styles.group}>
          <label style={styles.label}>Phone</label>
          <input type="tel" placeholder="(555) 123-4567" style={styles.input} required />
        </div>
        <div style={styles.group}>
          <label style={styles.label}>Email</label>
          <input type="email" placeholder="you@example.com" style={styles.input} required />
        </div>
      </div>
      <div style={styles.group}>
        <label style={styles.label}>Property Address</label>
        <input type="text" placeholder="Full Address" style={styles.input} required />
      </div>
      <div className="form-row">
        <div style={styles.group}>
          <label style={styles.label}>Service Type</label>
          <select style={styles.input} required>
            <option value="residential">{t('priceResTitle')}</option>
            <option value="commercial">{t('priceComTitle')}</option>
          </select>
        </div>
        <div style={styles.group}>
          <label style={styles.label}>Timeframe</label>
          <select style={styles.input}>
            <option value="asap">As soon as possible</option>
            <option value="this-week">This week</option>
            <option value="next-week">Next week</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div style={styles.group}>
          <label style={styles.label}>Exterior Surfaces</label>
          <input type="text" placeholder="e.g. Concrete, Brick, Siding, Roof" style={styles.input} required />
        </div>
        <div style={styles.group}>
          <label style={styles.label}>Approx. Size (sq ft)</label>
          <input type="text" placeholder="e.g. 2500" style={styles.input} />
        </div>
      </div>
      <div style={styles.group}>
        <label style={styles.label}>Level of Buildup</label>
        <select style={styles.input}>
          <option value="light">Light (Routine cleaning)</option>
          <option value="medium">Medium (Noticeable dirt/algae)</option>
          <option value="heavy">Heavy (Years of buildup/stains)</option>
        </select>
      </div>
      <div style={styles.group}>
        <label style={styles.label}>Additional Notes</label>
        <textarea rows={3} placeholder="Please describe the exterior project in more detail..." style={styles.input}></textarea>
      </div>
      <GlassButton type="submit" variant="primary" style={{ width: '100%', marginTop: '1rem' }} disabled={loading}>
        {loading ? 'Submitting...' : 'Request Quote'}
      </GlassButton>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: 'var(--color-text-main)',
  },
  input: {
    padding: '0.75rem',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--color-soft-gray)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    outline: 'none',
    transition: 'border-color 0.2s',
  }
};

export default QuoteForm;
