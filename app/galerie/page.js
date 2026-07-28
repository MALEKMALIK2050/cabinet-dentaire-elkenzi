import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GallerySlider from '@/components/GallerySlider';

export const metadata = {
  title: 'Galerie | CABINET DENTAIRE ELKENZI',
  description: 'Découvrez nos résultats avant/après et notre cabinet en images. Soins dentaires modernes à Alger.',
};

export default function GalleryPage() {
  return (
    <>
      <Header lang="fr" />

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Notre Galerie</h1>
          <p>
            Explorez nos transformations dentaires et découvrez notre cabinet moderne.
          </p>
        </div>
      </div>

      {/* Gallery Slider Section */}
      <section className="container py-4">
        <GallerySlider lang="fr" />
      </section>

      <Footer lang="fr" />
    </>
  );
}
