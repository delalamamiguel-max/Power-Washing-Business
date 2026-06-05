import React from 'react';

const Gallery = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1595814436225-bf214690eec2?auto=format&fit=crop&q=80', alt: 'Clean house exterior' },
    { src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80', alt: 'Clean commercial building' },
    { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80', alt: 'Clean modern driveway' },
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80', alt: 'Clean residential property' },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2>Our Work</h2>
          <p>See the difference professional power washing makes.</p>
        </div>
        <div style={styles.grid}>
          {images.map((img, idx) => (
            <div key={idx} style={styles.imgWrapper}>
              <img src={img.src} alt={img.alt} style={styles.img} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
  },
  imgWrapper: {
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    aspectRatio: '4/3',
    boxShadow: 'var(--glass-shadow)',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  }
};

export default Gallery;
