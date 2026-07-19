'use client';

import { useState, useEffect, useCallback } from 'react';

const slidesFr = [
  { image: '/images/dent1.png', title: 'Accueil chaleureux', desc: "Une salle d'attente moderne et confortable." },
  { image: '/images/dent2.png', title: 'Cabinet moderne', desc: 'Des installations conçues pour votre bien-être.' },
  { image: '/images/dent3.png', title: 'Technologie avancée', desc: 'Des équipements de dernière génération.' },
  { image: '/images/dent4.png', title: 'Soins de qualité', desc: 'Des traitements adaptés à chaque patient.' },
  { image: '/images/dent5.png', title: 'Hygiène irréprochable', desc: 'Une stérilisation conforme aux normes les plus strictes.' },
  { image: '/images/dent6.png', title: 'Votre sourire, notre priorité', desc: "Une équipe à votre écoute pour des soins d'excellence." },
];

const slidesAr = [
  { image: '/images/dent1.png', title: 'استقبال حار', desc: 'غرفة انتظار حديثة ومريحة.' },
  { image: '/images/dent2.png', title: 'عيادة حديثة', desc: 'مرافق مصممة لراحتكم.' },
  { image: '/images/dent3.png', title: 'تكنولوجيا متقدمة', desc: 'معدات من أحدث جيل.' },
  { image: '/images/dent4.png', title: 'رعاية متميزة', desc: 'علاجات مخصصة لكل مريض.' },
  { image: '/images/dent5.png', title: 'نظافة لا تشوبها شائبة', desc: 'تعقيم وفقاً لأعلى المعايير.' },
  { image: '/images/dent6.png', title: 'ابتسامتكم أولويتنا', desc: 'فريق يصغي إليكم لتقديم رعاية متميزة.' },
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
