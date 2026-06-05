import React, { useState, useRef, useEffect } from 'react';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      style={styles.container}
      onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
      onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
    >
      {/* Before Image (Bottom) */}
      <img src={beforeImage} alt="Before exterior cleaning" style={styles.image} draggable="false" />
      <div style={styles.labelBefore}>Before</div>

      {/* After Image (Top, Clipped) */}
      <img 
        src={afterImage} 
        alt="After exterior cleaning" 
        style={{...styles.image, ...styles.afterImage, clipPath: `inset(0 0 0 ${sliderPosition}%)`}} 
        draggable="false"
      />
      <div style={{...styles.labelAfter, clipPath: `inset(0 0 0 ${sliderPosition}%)`}}>After</div>

      {/* Slider Handle */}
      <div style={{...styles.sliderHandle, left: `${sliderPosition}%`}}>
        <div style={styles.sliderButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 'var(--radius-lg)',
    cursor: 'ew-resize',
    touchAction: 'none',
    boxShadow: 'var(--glass-shadow)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    pointerEvents: 'none',
  },
  afterImage: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  sliderHandle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '4px',
    backgroundColor: 'var(--color-white)',
    transform: 'translateX(-50%)',
    pointerEvents: 'none',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  },
  sliderButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '48px',
    height: '48px',
    backgroundColor: 'var(--color-white)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    color: 'var(--color-aqua)',
  },
  labelBefore: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: 'var(--radius-sm)',
    fontSize: '0.875rem',
    fontWeight: '600',
    pointerEvents: 'none',
    zIndex: 1,
  },
  labelAfter: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: 'var(--radius-sm)',
    fontSize: '0.875rem',
    fontWeight: '600',
    pointerEvents: 'none',
    zIndex: 2,
  }
};

export default BeforeAfterSlider;
