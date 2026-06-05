import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Droplets, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.brandCol}>
          <div style={styles.logo}>
            <Droplets size={24} color="var(--color-aqua)" />
            <span style={styles.brandName}>AquaWash Pro</span>
          </div>
          <p style={styles.desc}>
            Premium residential and commercial power washing services. Making your property shine.
          </p>
        </div>
        
        <div style={styles.contactCol}>
          <h4 style={{ marginBottom: '1rem' }}>Contact Us</h4>
          <div style={styles.contactItem}>
            <Phone size={18} color="var(--color-aqua)" />
            <span>{t('footerPhone')}</span>
          </div>
          <div style={styles.contactItem}>
            <Mail size={18} color="var(--color-aqua)" />
            <span>hello@aquawashpro.com</span>
          </div>
          <div style={styles.contactItem}>
            <MapPin size={18} color="var(--color-aqua)" />
            <span>Serving Austin, TX & Surrounding Areas</span>
          </div>
        </div>
      </div>
      <div style={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} AquaWash Pro. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'var(--color-white)',
    borderTop: '1px solid var(--color-soft-gray)',
    paddingTop: '4rem',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    marginBottom: '3rem',
  },
  brandCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  brandName: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--color-text-main)',
  },
  desc: {
    color: 'var(--color-text-light)',
    maxWidth: '300px',
  },
  contactCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: 'var(--color-text-main)',
  },
  bottom: {
    borderTop: '1px solid var(--color-soft-gray)',
    padding: '1.5rem 0',
    textAlign: 'center',
    fontSize: '0.875rem',
    color: 'var(--color-text-light)',
  }
};

export default Footer;
