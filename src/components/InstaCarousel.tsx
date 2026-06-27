'use client';

import Image from 'next/image';
import { useRef } from 'react';

const IMAGES = [1, 2, 3, 4, 5];

export default function InstaCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 'prev' | 'next') {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector('.insta-slide') as HTMLElement;
    const w = card ? card.offsetWidth + 20 : 260;
    trackRef.current.scrollBy({ left: dir === 'next' ? w : -w, behavior: 'smooth' });
  }

  return (
    <div className="insta-carousel-wrap">
      <button className="carousel-btn" onClick={() => scroll('prev')} aria-label="Previous">&#8249;</button>
      <div className="insta-carousel-track" ref={trackRef}>
        {IMAGES.map(n => (
          <div key={n} className="insta-slide">
            <Image
              src={`/assets/insta-${n}.jpg`}
              alt={`Customer photo ${n}`}
              width={240}
              height={240}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      <button className="carousel-btn" onClick={() => scroll('next')} aria-label="Next">&#8250;</button>
    </div>
  );
}
