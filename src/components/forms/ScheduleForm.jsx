import React, { useState } from 'react';
import GlassButton from '../ui/GlassButton';

const ScheduleForm = ({ onSuccess }) => {
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
      <div className="form-row">
        <div style={styles.group}>
          <label style={styles.label}>Name</label>
          <input type="text" placeholder="Your Name" style={styles.input} required />
        </div>
        <div style={styles.group}>
          <label style={styles.label}>Property Type</label>
          <select style={styles.input} required>
            <option value="residential">{t('priceResTitle')}</option>
            <option value="commercial">{t('priceComTitle')}</option>
          </select>
        </div>
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
      <div className="form-row">
        <div style={styles.group}>
          <label style={styles.label}>Preferred Date</label>
          <input type="date" style={styles.input} required />
        </div>
        <div style={styles.group}>
          <label style={styles.label}>Preferred Time Window</label>
          <select style={styles.input} required>
            <option value="morning">Morning (8am - 12pm)</option>
            <option value="afternoon">Afternoon (12pm - 4pm)</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>
      <div style={styles.group}>
        <label style={styles.label}>Address / Service Area</label>
        <input type="text" placeholder="123 Main St, Austin, TX" style={styles.input} required />
      </div>
      <div style={styles.group}>
        <label style={styles.label}>Optional Notes / Details</label>
        <textarea rows={2} placeholder="Any specific instructions?" style={styles.input}></textarea>
      </div>
      <div style={styles.actions}>
        <GlassButton type="submit" variant="primary" style={{ width: '100%', padding: '1rem' }} disabled={loading}>
          {loading ? 'Submitting...' : 'Schedule Visit'}
        </GlassButton>
      </div>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
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
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  },
  actions: {
    marginTop: '0.5rem',
  }
};

export default ScheduleForm;
