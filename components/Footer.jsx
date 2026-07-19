import Link from 'next/link';

export default function Footer({ lang = 'fr' }) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';

  return (
    <footer style={undefined}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href={`${prefix}/`} className="logo" style={{ marginBottom: '1rem', display: 'inline-block' }}>
              <span style={{ fontSize: '1.5rem' }}>🦷</span>
              {isAr ? (
                <>عيادة <span>الكنزي لطب الأسنان</span></>
              ) : (
                <>CABINET <span>DENTAIRE ELKENZI</span></>
              )}
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
              <a href="https://facebook.com/cabinetdentaireelkenzi" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://linkedin.com/in/cabinetdentaireelkenzi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com/cabinetdentaireelkenzi" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com/cabinetdentaireelkenzi" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
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
              <li>📍 {isAr ? 'الرويسو، الجزائر العاصمة، 16000' : 'Ruisseau, Alger, Algiers, Algeria, 16000'}</li>
              <li>📞 0799 13 49 59</li>
              <li>✉️ drbelguidoum.93@gmail.com</li>
              <li>🕒 {isAr ? 'السبت - الأربعاء : 10:00 - 18:00' : 'Sam - Merc : 10h00 - 18h00'}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            {isAr
              ? '© 2026 عيادة الكنزي لطب الأسنان. جميع الحقوق محفوظة.'
              : '© 2026 Cabinet Dentaire ELKENZI. Tous droits réservés.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
