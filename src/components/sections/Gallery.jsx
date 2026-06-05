import React from 'react';

const Gallery = () => {
  const images = [
    { src: '/gallery-1.png', alt: 'Clean residential driveway' },
    { src: '/gallery-2.png', alt: 'Commercial building exterior cleaning' },
    { src: '/gallery-3.png', alt: 'Craftsman style house exterior washing' },
    { src: '/gallery-4.png', alt: 'Modern commercial parking area cleaning' },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2>Our Work</h2>
          <p>See the difference professional power washing makes.</p>
        </div>
        <div className="grid-gallery">
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
