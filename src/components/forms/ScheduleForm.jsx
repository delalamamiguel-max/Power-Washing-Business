import React, { useState } from 'react';
import GlassButton from '../ui/GlassButton';

const ScheduleForm = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
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
          <label style={styles.label}>Preference</label>
          <select style={styles.input} required>
            <option value="visit">Schedule a Visit</option>
            <option value="call">Schedule a Call</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div style={styles.group}>
          <label style={styles.label}>Date</label>
          <input type="date" style={styles.input} required />
        </div>
        <div style={styles.group}>
          <label style={styles.label}>Time</label>
          <input type="time" style={styles.input} required />
        </div>
      </div>
      <div style={styles.group}>
        <label style={styles.label}>Name</label>
        <input type="text" placeholder="John Doe" style={styles.input} required />
      </div>
      <div className="form-row">
        <div style={styles.group}>
          <label style={styles.label}>Phone</label>
          <input type="tel" placeholder="(555) 123-4567" style={styles.input} required />
        </div>
        <div style={styles.group}>
          <label style={styles.label}>Email</label>
          <input type="email" placeholder="john@example.com" style={styles.input} required />
        </div>
      </div>
      <div style={styles.group}>
        <label style={styles.label}>Address</label>
        <input type="text" placeholder="123 Main St, Austin, TX" style={styles.input} required />
      </div>
      <div style={styles.group}>
        <label style={styles.label}>Notes</label>
        <textarea rows={3} placeholder="Any special instructions or areas of concern?" style={styles.input}></textarea>
      </div>
      <GlassButton type="submit" variant="primary" style={{ width: '100%', marginTop: '1rem' }} disabled={loading}>
        {loading ? 'Submitting...' : 'Confirm Schedule'}
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

export default ScheduleForm;
