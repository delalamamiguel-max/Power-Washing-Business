import React from 'react';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';

const BeforeAfterSection = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2>See the Difference in Seconds</h2>
          <p>Drag to compare real exterior cleaning results.</p>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', aspectRatio: '16/9' }}>
          <BeforeAfterSlider 
            beforeImage="https://images.unsplash.com/photo-1595844730298-b960fad97351?auto=format&fit=crop&q=80" 
            afterImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
