import React, { useState, useEffect } from 'react';
import bg10 from '../../assets/bg10.jpg';
import bg2 from '../../assets/bg2.jpg';
import bg11 from '../../assets/bg11.jpg';
import bg9 from '../../assets/bg9.jpg';

const HeroSection = () => {
  
  const images = [
    bg10,
    bg2,
    bg11,
    bg9,
  
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    
    const interval = setInterval(changeImage, 4000); 

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '70vh', // Adjust as needed
        width: '95%',
        margin: 'auto',
      }}
    >
      
    </div>
  );
};

export default HeroSection;
