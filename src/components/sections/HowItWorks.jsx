import React from 'react';

const HowItWorks = () => {
  const steps = [
    { num: '1', title: 'Request a Quote', desc: 'Fill out our fast online form or give us a call.' },
    { num: '2', title: 'Schedule a Visit', desc: 'We\'ll confirm the scope and provide a transparent price.' },
    { num: '3', title: 'We Do the Work', desc: 'Our pros arrive on time with the best exterior equipment.' },
    { num: '4', title: 'Enjoy the Results', desc: 'Your property looks pristine and welcoming.' },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>How It Works</h2>
          <p>Four simple steps to a cleaner property.</p>
        </div>
        <div className="grid-steps">
          {steps.map((step, idx) => (
            <div key={idx} style={styles.step}>
              <div style={styles.number}>{step.num}</div>
              <h4 style={{ marginBottom: '0.5rem' }}>{step.title}</h4>
              <p style={{ fontSize: '0.95rem' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  step: {
    textAlign: 'center',
    padding: '1rem',
  },
  number: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-aqua)',
    color: 'var(--color-white)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
    fontWeight: '700',
    margin: '0 auto 1.5rem auto',
    boxShadow: '0 4px 14px 0 rgba(14, 165, 233, 0.39)',
  }
};

export default HowItWorks;
