import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CarrosselItem = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avança para o próximo slide a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container-carrossel2">
      <motion.div
        className='inner'
        style={{
          display: 'flex',
          transform: `translateX(-${currentIndex * 100}%)`, // Move os slides horizontalmente
          transition: 'transform 0.5s ease' // Transição suave ao mudar de slide
        }}
      >
        {images.map((image, index) => (
          <div className='item' key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CarrosselItem();