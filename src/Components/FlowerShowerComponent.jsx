import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FlowerShowerComponent = ({ toggle }) => {
  const flowersRef = useRef([]);

  useEffect(() => {
    if (toggle) {
      flowersRef.current.forEach((flower, index) => {
        gsap.fromTo(
          flower,
          {
            opacity: 0,
            y: '-10vh', 
            x: `${Math.random() * 100}vw`,
            rotation: 0,
          },
          {
            opacity: 1,
            y: '110vh',
            rotation: 720, // Add rotation for a more realistic fall
            duration: 5,
            ease: 'linear',
            delay: index * 0.1 + Math.random() * 1,
          }
        );
      });
    }
  }, [toggle]);

  return (
    <div className='w-screen h-screen absolute top-0 right-0 overflow-hidden z-10'>
      {[...Array(100)].map((_, i) => (
        <img
          key={i}
          ref={(el) => (flowersRef.current[i] = el)}
          src="/assets/flower.svg"
          alt="flower"
          className="flower"
          style={{
            position: 'absolute',
            width: '50px',
            height: '50px',
            top: '-10vh', // Start slightly above the screen
            left: `${Math.random() * 100}vw`, // Randomized horizontal position
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};

export default FlowerShowerComponent;
