'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import catsGroupe from '@/assets/slider-1.jpg';
import babyCat from '@/assets/slider-2.jpg';
import dog from '@/assets/slider-3.jpg';

const images = [
  { image: catsGroupe, alt: 'Cats' },
  { image: babyCat, alt: 'baby' },
  { image: dog, alt: 'dog' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? 'active' : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
