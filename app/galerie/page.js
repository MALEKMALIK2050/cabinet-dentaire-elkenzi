import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata = {
  title: 'Galerie | CABINET DENTAIRE ELKENZI',
  description: 'Découvrez notre cabinet en images : espaces modernes, équipements de dernière génération et environnement confortable.',
};

export default function GalleryPage() {
  return (
    <>
      <Header lang="fr" />

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Notre Cabinet en Images</h1>
          <p>
            Découvrez nos espaces conçus pour votre confort et nos équipements
            de dernière génération.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="container py-4">
        <GalleryGrid lang="fr" />
      </section>

      <Footer lang="fr" />
    </>
  );
}
