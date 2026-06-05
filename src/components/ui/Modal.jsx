import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import GlassCard from './GlassCard';

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.container} onClick={(e) => e.stopPropagation()}>
        <GlassCard padding="2rem" style={{ position: 'relative', width: '100%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto' }}>
          <button style={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            <X size={24} />
          </button>
          {title && <h2 style={{ marginBottom: '1.5rem', paddingRight: '2rem' }}>{title}</h2>}
          {children}
        </GlassCard>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.4)',
    backdropFilter: 'blur(4px)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  container: {
    width: '100%',
    maxWidth: '600px',
    animation: 'modalSlideIn 0.3s ease-out forwards',
  },
  closeBtn: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--color-text-light)',
    padding: '0.25rem',
  }
};

export default Modal;
