'use client';

import Image from 'next/image';
import { useRef, useEffect, useCallback } from 'react';

const IMAGES = [1, 2, 3, 4, 5];

export default function InstaCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  const goTo = useCallback((next: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector('.insta-slide') as HTMLElement;
    if (!slide) return;
    const w = slide.offsetWidth + 20; // 20 = gap
    indexRef.current = (next + IMAGES.length) % IMAGES.length;
    track.scrollTo({ left: indexRef.current * w, behavior: 'smooth' });
  }, []);

  // auto-advance every 3s
  useEffect(() => {
    const id = setInterval(() => goTo(indexRef.current + 1), 3000);
    return () => clearInterval(id);
  }, [goTo]);

  return (
    <div className="insta-carousel-wrap">
      <button className="carousel-btn" onClick={() => goTo(indexRef.current - 1)} aria-label="Previous">&#8249;</button>
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
      <button className="carousel-btn" onClick={() => goTo(indexRef.current + 1)} aria-label="Next">&#8250;</button>
    </div>
  );
}
