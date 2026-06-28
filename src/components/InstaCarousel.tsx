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
    // class name must stay so this querySelector keeps working
    const slide = track.querySelector('.insta-slide') as HTMLElement;
    if (!slide) return;
    const w = slide.offsetWidth + 20; // 20 = gap
    indexRef.current = (next + IMAGES.length) % IMAGES.length;
    track.scrollTo({ left: indexRef.current * w, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const id = setInterval(() => goTo(indexRef.current + 1), 3000);
    return () => clearInterval(id);
  }, [goTo]);

  const btnClass =
    'flex-shrink-0 w-[54px] h-[54px] rounded-full border-2 border-orange bg-orange text-white ' +
    'text-[2.2rem] leading-none cursor-pointer inline-flex items-center justify-center ' +
    'transition-[background,transform] duration-200 ' +
    'hover:bg-orange-dark hover:border-orange-dark hover:scale-[1.08] ' +
    'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#ffd166] focus-visible:outline-offset-2';

  return (
    <div className="flex items-center gap-4 mt-8">
      <button className={btnClass} onClick={() => goTo(indexRef.current - 1)} aria-label="Previous">&#8249;</button>

      <div
        className="insta-carousel-track flex gap-[1.25rem] overflow-x-auto snap-x snap-mandatory flex-1 py-2 px-[0.25rem]"
        ref={trackRef}
      >
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

      <button className={btnClass} onClick={() => goTo(indexRef.current + 1)} aria-label="Next">&#8250;</button>
    </div>
  );
}
