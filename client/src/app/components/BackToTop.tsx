'use client';

import React, { useEffect, useState } from 'react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      // Show button only when scrolling UP and not at the very top
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '70px', // Position above the Miami-Dade.gov footer bar
            right: '20px',
            width: '60px',
            height: '60px',
            backgroundColor: '#0288D1',
            opacity: '0.5',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 1000,
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1.0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.5';
          }}
          title="Back to top"
        >
          <div 
            className="fa fa-arrow-up fa-2x" 
            style={{ 
              color: 'white',
              fontSize: '20px',
              lineHeight: '1'
            }}
          />
          <span className="sr-only">Back to top</span>
        </div>
      )}
    </>
  );
};

export default BackToTop; 