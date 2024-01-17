"use client"
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // You can use any icon library or custom styling
import { Button } from '@nextui-org/button';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check the scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <Button onClick={scrollToTop} className="scroll-to-top-button">
          <FaArrowUp />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
