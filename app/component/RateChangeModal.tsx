'use client';

import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaExclamationTriangle } from 'react-icons/fa';

const RateChangeModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    // Check if modal has been shown before in this session
    const modalShown = sessionStorage.getItem('rateChangeModalShown');
    
    if (!modalShown) {
      // Show modal after 2 seconds of page load
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('rateChangeModalShown', 'true');
        
        // Start animation after a small delay to ensure DOM is ready
        setTimeout(() => {
          setIsAnimating(true);
        }, 50);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Prevent body scroll when modal is visible
  useEffect(() => {
    if (isVisible) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Add styles to prevent scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      // Cleanup function to restore scrolling
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 500); // Wait for animation to complete
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isSwipeUp = distance > 50;
    const isSwipeDown = distance < -50;

    if (isSwipeDown) {
      handleClose();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Don't render anything if not visible or already shown
  if (!isVisible || (hasShown && !isVisible)) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50"
        style={{ zIndex: 1040 }}
        onClick={handleClose}
      />
      
      {/* Modal Drawer */}
      <div 
        className={`position-fixed d-flex align-items-center justify-content-center`}
        style={{ 
          zIndex: 1050,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          transform: isAnimating ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.5s ease-out'
        }}
      >
        <div 
          className="bg-white shadow-lg mx-3"
          style={{ 
            maxWidth: '500px',
            width: '100%',
            borderRadius: '1rem'
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        > 
          {/* Content */}
          <div className="p-4">
            {/* Icon and Title */}
            <div className="text-center mb-4">
              <div className="d-inline-flex align-items-center justify-content-center bg-warning bg-opacity-10 rounded-circle mb-3"
                   style={{ width: '64px', height: '64px' }}>
                <FaExclamationTriangle className="text-white fs-2" />
              </div>
              <h3 className="fs-4 fw-bold text-dark mb-2">
                Important Notice
              </h3>
            </div>
            
            {/* Message */}
            <div className="text-center">
              <p className="text-dark lh-base mb-3">
                <span className="fw-semibold text-dark">Rates are going to change after 1st September 2025.</span>
              </p>
              
              <p className="text-muted small lh-base mb-3">
                Our rates are set as per the best industry standards and current market conditions to ensure you get the most competitive pricing for our professional driver services.
              </p>
            </div>
            
            {/* Action Button */}
            <div>
              <button
                onClick={handleClose}
                className="btn btn-dark text-white fw-semibold w-100 py-3"
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RateChangeModal;
