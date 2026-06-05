import React from 'react';

const Gallery = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80', alt: 'Clean residential driveway' },
    { src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80', alt: 'House exterior and siding washing' },
    { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80', alt: 'Commercial building exterior cleaning' },
    { src: 'https://images.unsplash.com/photo-1576013551627-1430992080a9?auto=format&fit=crop&q=80', alt: 'Clean patio and pool deck' },
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
