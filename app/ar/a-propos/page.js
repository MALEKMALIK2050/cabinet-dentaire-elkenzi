/* eslint-disable @next/next/no-img-element */
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'من نحن | عيادة الكنزي لطب الأسنان',
  description: 'تعرف على عيادة الكنزي لطب الأسنان، فلسفتنا، فريقنا وقيمنا.',
};

export default function ArAboutPage() {
  return (
    <>
      <Header lang="ar" />

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>عن عيادتنا</h1>
          <p>
            فريق متفانٍ لصحة فمك وأسنانك، يجمع بين التكنولوجيا المتقدمة واللطف في كل علاج.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="container py-4">
        <div className="about-grid">
          <div>
            <h2>فلسفتنا</h2>
            <p>
              في <strong>عيادة الكنزي لطب الأسنان</strong>، نؤمن بأن كل مريض
              يستحق اهتماماً خاصاً ورعاية بجودة لا تشوبها شائبة. مهمتنا هي
              تقديم تجربة علاج أسنان ممتعة، بدون ألم ومخصصة بالكامل.
            </p>
            <p>
              بفضل سنوات عديدة من الخبرة، يواصل الدكتور بلقيدوم وفريقه التدريب
              المستمر على أحدث التطورات التكنولوجية والطبية لضمان علاجات في طليعة
              الحداثة.
            </p>

            <h3 style={{ marginTop: '2rem' }}>لماذا تختارنا؟</h3>
            <ul className="about-list">
              <li>✅ <strong>نظافة صارمة:</strong> تعقيم وفقاً لأكثر المعايير صرامة.</li>
              <li>✅ <strong>إصغاء فعال:</strong> نأخذ الوقت لفهم احتياجاتك ومخاوفك.</li>
              <li>✅ <strong>رعاية لطيفة:</strong> تقنيات حديثة لتقليل أي إزعاج.</li>
              <li>✅ <strong>شفافية تامة:</strong> خطط علاج وتقديرات واضحة.</li>
            </ul>
          </div>
          <div>
            <img
              src="/images/dent2.png"
              alt="فريق طب الأسنان المحترف"
              style={{
                width: '100%',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)',
              }}
            />
          </div>
        </div>
      </section>

      <Footer lang="ar" />
    </>
  );
}
