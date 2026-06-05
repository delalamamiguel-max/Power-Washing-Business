import React from 'react';

const Gallery = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80', alt: 'Full exterior house washing' },
    { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80', alt: 'Clean driveway and walkways' },
    { src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80', alt: 'Commercial building exterior cleaning' },
    { src: 'https://images.unsplash.com/photo-1576013551627-1430992080a9?auto=format&fit=crop&q=80', alt: 'Clean patio and pool area' },
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
