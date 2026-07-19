/* eslint-disable @next/next/no-img-element */

const galleryItemsFr = [
  { src: '/images/dent1.png', alt: 'Appareil de radiologie', label: 'Appareil de radiologie' },
  { src: '/images/dent2.png', alt: 'Équipe dentaire professionnelle', label: 'Équipe dentaire professionnelle' },
  { src: '/images/dent3.png', alt: "Salle d'attente", label: "Salle d'attente" },
  { src: '/images/dent4.png', alt: 'Chambre de traitement', label: 'Chambre de traitement' },
  { src: '/images/dent5.png', alt: 'Image cabinet & matériel', label: 'Image cabinet & matériel' },
  { src: '/images/dent6.png', alt: 'Image dentaire', label: 'Image dentaire' },
];

const galleryItemsAr = [
  { src: '/images/dent1.png', alt: 'جهاز الأشعة', label: 'جهاز الأشعة' },
  { src: '/images/dent2.png', alt: 'فريق طب الأسنان المحترف', label: 'فريق طب الأسنان المحترف' },
  { src: '/images/dent3.png', alt: 'غرفة الانتظار', label: 'غرفة الانتظار' },
  { src: '/images/dent4.png', alt: 'غرفة العلاج', label: 'غرفة العلاج' },
  { src: '/images/dent5.png', alt: 'صورة العيادة والمعدات', label: 'صورة العيادة والمعدات' },
  { src: '/images/dent6.png', alt: 'صورة أسنان', label: 'صورة أسنان' },
];

export default function GalleryGrid({ lang = 'fr' }) {
  const items = lang === 'ar' ? galleryItemsAr : galleryItemsFr;

  return (
    <div className="gallery-grid">
      {items.map((item, index) => (
        <div className="gallery-item" key={index}>
          <img src={item.src} alt={item.alt} />
          <div className="gallery-overlay">
            <span>{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
