import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata = {
  title: 'معرض الصور | عيادة الكنزي لطب الأسنان',
  description: 'اكتشفوا عيادتنا بالصور: مساحات حديثة ومعدات متطورة وبيئة مريحة.',
};

export default function ArGalleryPage() {
  return (
    <>
      <Header lang="ar" />

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>عيادتنا بالصور</h1>
          <p>
            اكتشفوا مساحاتنا المصممة لراحتكم ومعداتنا من أحدث جيل.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="container py-4">
        <GalleryGrid lang="ar" />
      </section>

      <Footer lang="ar" />
    </>
  );
}
