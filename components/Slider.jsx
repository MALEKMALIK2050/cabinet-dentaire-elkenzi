'use client';

import { useState, useEffect, useCallback } from 'react';

const slidesFr = [
  { image: '/images/result2.jpg', title: 'Un sourire transformé', desc: 'Résultat avant/après : des dents parfaitement alignées et éclatantes de blancheur.' },
];

const slidesAr = [
  { image: '/images/result2.jpg', title: 'ابتسامة متحولة', desc: 'نتيجة قبل/بعد: أسنان متوافقة تمامًا وبياض مبهر.' },
];

export default function Slider({ lang = 'fr' }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = lang === 'ar' ? slidesAr : slidesFr;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="container py-4">
      <div className="text-center">
        <h2>{lang === 'ar' ? 'اكتشفوا عيادتنا' : 'Découvrez notre cabinet'}</h2>
        <p style={{ color: 'var(--text-light)' }}>
          {lang === 'ar'
            ? 'بيئة مهدئة ومعدات متطورة لراحتكم المطلقة.'
            : 'Un environnement apaisant, des équipements de pointe pour votre confort absolu.'}
        </p>
      </div>

      <div className="slider-container">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="slide-content">
                <h3>{slide.title}</h3>
                <p style={{ marginBottom: 0 }}>{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
