import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ lang = 'fr' }) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href={`${prefix}/`} className="logo" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              <Image
                src="/images/logo.jpg"
                alt="Dental Art Logo"
                width={45}
                height={45}
                className="logo-img"
                style={{ objectFit: 'contain', borderRadius: '8px' }}
              />
              <div className="logo-text">
                {isAr ? (
                  <>
                    <span className="logo-name" style={{ fontFamily: "'Cairo', sans-serif", fontSize: '1.2rem' }}>عيادة الكنزي لطب الأسنان</span>
                    <span className="logo-subtitle">Dental Art</span>
                  </>
                ) : (
                  <>
                    <span className="logo-name" style={{ fontSize: '1.2rem' }}>Dental Art</span>
                    <span className="logo-subtitle">Cabinet Dentaire</span>
                  </>
                )}
              </div>
            </Link>
            <p>
              {isAr
                ? 'المرجع في مجال العناية بالأسنان عالية الجودة. نحن نعتني بصحة فمك وأسنانك بلطف وخبرة.'
                : "La référence en matière de soins dentaires de haute qualité. Nous prenons soin de votre santé bucco-dentaire avec douceur et expertise."}
            </p>
          </div>

          <div className="footer-col">
            <h3>{isAr ? 'شبكاتنا الاجتماعية' : 'Nos Réseaux Sociaux'}</h3>
            <div className="social-links">
              <a href="https://wa.me/21307991349​59" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://instagram.com/drbelguidoum" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://tiktok.com/@cabinetdentairedrbelguidoum" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://facebook.com/cabinetdentairedrbelguidoum" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3>{isAr ? 'روابط سريعة' : 'Liens Rapides'}</h3>
            <ul>
              <li><Link href={`${prefix}/`}>{isAr ? 'الرئيسية' : 'Accueil'}</Link></li>
              <li><Link href={`${prefix}/a-propos`}>{isAr ? 'من نحن' : 'À propos'}</Link></li>
              <li><Link href={`${prefix}/galerie`}>{isAr ? 'معرض الصور' : 'Galerie'}</Link></li>
              <li><Link href={`${prefix}/contact`}>{isAr ? 'اتصل بنا' : 'Contact'}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>{isAr ? 'اتصل بنا' : 'Contact'}</h3>
            <ul>
              <li>📍 {isAr
                ? '220 شارع محمد بلوزداد، أمام سونلغاز، فوق مصلحة الضرائب، الرويسو، الجزائر العاصمة'
                : '220 rue Mohamed Belouizdad, en face Sonalgaz, au dessus des impôts de Ruisseau'}</li>
              <li>📞 0799 13 49 59 / 0778 32 38 16</li>
              <li>✉️ drbelguidoum.93@gmail.com</li>
              <li>🕒 {isAr ? 'السبت - الأربعاء : 10:00 - 18:00' : 'Sam - Merc : 10h00 - 18h00'}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            {isAr
              ? '© 2026 Dental Art — عيادة الكنزي لطب الأسنان. جميع الحقوق محفوظة.'
              : '© 2026 Dental Art — Cabinet Dentaire Dr Belguidoum. Tous droits réservés.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
