'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

const allPhotos = {
  fr: [
    { src: '/images/result1.jpg', cat: 'results', title: 'Bridge en zircon', desc: 'Reconstruction complète avec prothèse en zircon' },
    { src: '/images/result2.jpg', cat: 'results', title: 'Sourire parfait', desc: 'Résultat exceptionnel : alignement et blancheur naturelle' },
    { src: '/images/result3.jpg', cat: 'results', title: 'Correction dentaire', desc: 'Traitement orthodontique — avant & après' },
    { src: '/images/result4.jpg', cat: 'results', title: 'Appareil dentaire', desc: 'Pose de bagues — traitement orthodontique' },
    { src: '/images/result5.jpg', cat: 'results', title: 'Couronnes dentaires', desc: 'Restauration complète par couronnes en céramique' },
  ],
  ar: [
    { src: '/images/result1.jpg', cat: 'results', title: 'جسر الزيركون', desc: 'إعادة بناء كاملة بطرف اصطناعي من الزيركون' },
    { src: '/images/result2.jpg', cat: 'results', title: 'ابتسامة مثالية', desc: 'نتيجة استثنائية: تناسق وبياض طبيعي' },
    { src: '/images/result3.jpg', cat: 'results', title: 'تصحيح الأسنان', desc: 'علاج تقويمي — قبل وبعد' },
    { src: '/images/result4.jpg', cat: 'results', title: 'جهاز التقويم', desc: 'تركيب تقويم الأسنان — علاج تقويمي' },
    { src: '/images/result5.jpg', cat: 'results', title: 'تيجان الأسنان', desc: 'ترميم كامل بتيجان السيراميك' },
  ],
};

export default function GallerySlider({ lang = 'fr' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);
  const isAr = lang === 'ar';

  const filtered = allPhotos[lang] ?? allPhotos.fr;

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filtered.length);
    }, 4500);
  }, [filtered.length]);


  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [startInterval]);

  const goTo = (idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(idx);
    startInterval();
    setTimeout(() => setIsAnimating(false), 400);
  };

  const prev = () => goTo((currentIndex - 1 + filtered.length) % filtered.length);
  const next = () => goTo((currentIndex + 1) % filtered.length);

  return (
    <div className="gallery-slider-wrapper">
      {/* Main Slider */}
      <div className="gallery-main-slider">
        <div
          className="gallery-slides-track"
          style={{ transform: `translateX(${isAr ? '' : '-'}${currentIndex * 100}%)` }}
        >
          {filtered.map((photo, idx) => (
            <div
              key={idx}
              className="gallery-slide"
              style={{ backgroundImage: `url('${photo.src}')` }}
            >
              <div className="gallery-slide-overlay">
                <h3>{photo.title}</h3>
                <p>{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        {filtered.length > 1 && (
          <>
            <button className="gallery-arrow gallery-arrow-prev" onClick={prev} aria-label="Précédent">
              ‹
            </button>
            <button className="gallery-arrow gallery-arrow-next" onClick={next} aria-label="Suivant">
              ›
            </button>
          </>
        )}

        {/* Dots */}
        {filtered.length > 1 && (
          <div className="gallery-dots">
            {filtered.map((_, idx) => (
              <button
                key={idx}
                className={`gallery-dot${currentIndex === idx ? ' active' : ''}`}
                onClick={() => goTo(idx)}
                aria-label={`Photo ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Counter */}
        <div className="gallery-counter">
          {currentIndex + 1} / {filtered.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="gallery-thumbs">
        {filtered.map((photo, idx) => (
          <button
            key={idx}
            className={`gallery-thumb${currentIndex === idx ? ' active' : ''}`}
            onClick={() => goTo(idx)}
            aria-label={photo.title}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo.src} alt={photo.title} />
          </button>
        ))}
      </div>
    </div>
  );
}
