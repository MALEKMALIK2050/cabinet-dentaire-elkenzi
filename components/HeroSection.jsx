import Link from 'next/link';

export default function HeroSection({ lang = 'fr' }) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';

  return (
    <section className="hero text-center">
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="hero-content text-center" style={{ alignItems: 'center' }}>
          <h1>
            {isAr ? (
              <>ابتسامة مثالية تبدأ <span>بعناية استثنائية</span></>
            ) : (
              <>Un sourire parfait commence par des <span>soins d&apos;exception</span></>
            )}
          </h1>
          <p>
            {isAr
              ? 'استعد ثقتك بنفسك بفضل خبرتنا. نقدم رعاية أسنان حديثة، بدون ألم ومصممة حسب احتياجاتك.'
              : "Retrouvez confiance en vous grâce à notre expertise. Nous offrons des soins dentaires modernes, sans douleur et adaptés à vos besoins."}
          </p>
          <div className="hero-actions">
            <Link href={`${prefix}/contact`} className="btn btn-pulse">
              {isAr ? '📅 حجز موعد' : '📅 Prendre Rendez-vous'}
            </Link>
            <a
              href="https://wa.me/213799134959"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <i className="fab fa-whatsapp" style={{ marginRight: isAr ? '0' : '8px', marginLeft: isAr ? '8px' : '0' }}></i>
              {isAr ? 'واتساب' : 'WhatsApp'}
            </a>
            <Link href={`${prefix}/a-propos`} className="btn btn-outline">
              {isAr ? 'اكتشف العيادة' : 'Découvrir le cabinet'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
