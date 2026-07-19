import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact | CABINET DENTAIRE ELKENZI',
  description: 'Prenez rendez-vous au Cabinet Dentaire ELKENZI. Contactez-nous par téléphone, email ou formulaire. Ruisseau, Alger.',
};

export default function ContactPage() {
  return (
    <>
      <Header lang="fr" />

      {/* Page Header */}
      <div className="page-header page-header--tall">
        <div className="container">
          <h1>Prendre Rendez-vous</h1>
          <p>
            N&apos;hésitez pas à nous contacter pour toute question ou pour planifier
            votre prochaine consultation. Votre sourire est notre priorité.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="container">
        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Nos Coordonnées</h2>
            <p>
              L&apos;équipe du cabinet DENTAIRE ELKENZI se tient à votre entière
              disposition pour vous renseigner et vous accompagner dans votre
              parcours de soins.
            </p>

            <div className="info-item mt-2">
              <div className="info-icon">📍</div>
              <div>
                <h4 style={{ marginBottom: '0.2rem', color: 'var(--text-dark)' }}>
                  Adresse du Cabinet
                </h4>
                <p style={{ margin: 0, color: 'var(--text-light)' }}>
                  Ruisseau, 16000<br />Algiers, Algeria
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h4 style={{ marginBottom: '0.2rem', color: 'var(--text-dark)' }}>
                  Téléphone
                </h4>
                <p style={{ margin: 0, color: 'var(--text-light)' }}>0799 13 49 59</p>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--primary-color)' }}>
                  En cas d&apos;urgence dentaire, contactez ce numéro directement.
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <h4 style={{ marginBottom: '0.2rem', color: 'var(--text-dark)' }}>
                  Email
                </h4>
                <p style={{ margin: 0, color: 'var(--text-light)' }}>
                  drbelguidoum.93@gmail.com
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div>
                <h4 style={{ marginBottom: '0.2rem', color: 'var(--text-dark)' }}>
                  Horaires d&apos;ouverture
                </h4>
                <p style={{ margin: 0, color: 'var(--text-light)' }}>
                  Sam - Merc : 10h00 - 18h00<br />Jeudi : Fermé
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm lang="fr" />
        </div>
      </section>

      {/* Google Map */}
      <section style={{ marginTop: '4rem' }}>
        <iframe
          className="map-frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.150207896809!2d3.078795776879264!3d36.74296547226359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb38f80cb8235%3A0x924bfc585d93cf22!2sDentalart%20cabinet%20dr%20Belguidoum!5e0!3m2!1sfr!2sdz!4v1784458146164!5m2!1sfr!2sdz"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Localisation du cabinet"
        />
      </section>

      <Footer lang="fr" />
    </>
  );
}
