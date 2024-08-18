import React, { useState, useEffect, useRef } from 'react';
import './infiniteSlider.scss';

const InfiniteSlider = ({ items, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef();
  const startX = useRef(0);
  const moveX = useRef(0);

  // Function to move to the next slide
  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Function to handle the end of the transition
  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // Reset position if at cloned slide
    if (currentIndex === items.length) {
      setCurrentIndex(0);
      sliderRef.current.style.transition = 'none';
      sliderRef.current.style.transform = `translateX(-${0 * 100}%)`;
    } else if (currentIndex === -1) {
      setCurrentIndex(items.length - 1);
      sliderRef.current.style.transition = 'none';
      sliderRef.current.style.transform = `translateX(-${(items.length - 1) * 100}%)`;
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  // Autoplay functionality
  useEffect(() => {
    autoPlayRef.current = handleNext;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const intervalId = setInterval(play, interval);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [interval]);

  // Touch support
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    moveX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = startX.current - moveX.current;
    if (distance > 50) {
      handleNext();
    }
  };

  return (
    <div
      className="slider-container"
      onMouseEnter={() => clearInterval(autoPlayRef.current)}
      onMouseLeave={() => {
        autoPlayRef.current = setInterval(handleNext, interval);
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slider" ref={sliderRef} onTransitionEnd={handleTransitionEnd}>
        {/* Cloned last item */}
        <div className="slide">
          <img src={items[items.length - 1]} alt="Slide" />
        </div>

        {/* Original slides */}
        {items.map((item, index) => (
          <div className="slide" key={index}>
            <img src={item} alt={`Slide ${index + 1}`} />
          </div>
        ))}

        {/* Cloned first item */}
        <div className="slide">
          <img src={items[0]} alt="Slide" />
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
