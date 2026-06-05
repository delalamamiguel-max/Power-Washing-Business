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
            beforeImage="/slider-before.png" 
            afterImage="/slider-after.png"
          />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
