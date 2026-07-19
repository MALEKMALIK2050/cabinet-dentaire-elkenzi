/* eslint-disable @next/next/no-img-element */
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'À propos | CABINET DENTAIRE ELKENZI',
  description: 'Découvrez le Cabinet Dentaire ELKENZI, notre philosophie, notre équipe et nos valeurs. Une équipe dévouée à votre santé bucco-dentaire.',
};

export default function AboutPage() {
  return (
    <>
      <Header lang="fr" />

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>À Propos de Notre Cabinet</h1>
          <p>
            Une équipe dévouée à votre santé bucco-dentaire, alliant technologie
            de pointe et douceur dans chaque soin.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="container py-4">
        <div className="about-grid">
          <div>
            <h2>Notre Philosophie</h2>
            <p>
              Au <strong>Cabinet Dentaire ELKENZI</strong>, nous croyons que chaque
              patient mérite une attention particulière et des soins d&apos;une qualité
              irréprochable. Notre mission est de vous offrir une expérience
              dentaire agréable, sans douleur et totalement personnalisée.
            </p>
            <p>
              Forts de plusieurs années d&apos;expérience, le Dr Belguidoum et son
              équipe se forment continuellement aux dernières avancées
              technologiques et médicales pour vous garantir des traitements à la
              pointe de la modernité.
            </p>

            <h3 style={{ marginTop: '2rem' }}>Pourquoi nous choisir ?</h3>
            <ul className="about-list">
              <li>✅ <strong>Hygiène stricte :</strong> Stérilisation aux normes les plus rigoureuses.</li>
              <li>✅ <strong>Écoute active :</strong> Nous prenons le temps de comprendre vos besoins et vos craintes.</li>
              <li>✅ <strong>Soins en douceur :</strong> Des techniques modernes pour minimiser tout inconfort.</li>
              <li>✅ <strong>Transparence totale :</strong> Des plans de traitement et des devis clairs.</li>
            </ul>
          </div>
          <div>
            <img
              src="/images/dent2.png"
              alt="Équipe dentaire professionnelle"
              style={{
                width: '100%',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)',
              }}
            />
          </div>
        </div>
      </section>

      <Footer lang="fr" />
    </>
  );
}
