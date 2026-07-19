import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Slider from '@/components/Slider';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

export default function ArHomePage() {
  return (
    <>
      <Header lang="ar" />

      <HeroSection lang="ar" />

      {/* Slider Section */}
      <Slider lang="ar" />

      {/* Services Section */}
      <section className="container py-4">
        <div className="text-center">
          <h2>خبرتنا المهنية</h2>
          <p style={{ color: 'var(--text-light)' }}>
            مجموعة كاملة من خدمات طب الأسنان لجميع أفراد العائلة.
          </p>
        </div>
        <div className="services-grid">
          <ServiceCard
            icon="✨"
            title="تجميل الأسنان"
            description="تبييض، قشور وتقويم لاستعادة ابتسامة مشرقة وطبيعية."
          />
          <ServiceCard
            icon="🛡️"
            title="الرعاية الوقائية"
            description="إزالة الجير، فحص شامل ونصائح للوقاية من التسوس."
          />
          <ServiceCard
            icon="🦷"
            title="زراعة الأسنان"
            description="استبدال الأسنان المفقودة بزراعات متينة وعالية الجودة."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-4">
        <div className="container">
          <div className="text-center">
            <h2>ما يقوله مرضانا</h2>
            <p>رضا مرضانا هو أعظم مكافأة لنا.</p>
          </div>
          <div className="testimonials-grid">
            <TestimonialCard
              text="احترافية استثنائية. الفريق مطمئن جداً، المعدات حديثة ولم أشعر بأي ألم أثناء العلاج."
              name="كريمة م."
            />
            <TestimonialCard
              text="استقبال حار جداً. العيادة نظيفة بشكل لا يصدق. شرحوا لي كل شيء بالتفصيل قبل العملية. أوصي بشدة!"
              name="صالح ل."
            />
            <TestimonialCard
              text="أخيراً استعدت ابتسامتي! تبييض الأسنان صنع المعجزات والطبيب كان منتبهاً جداً لاحتياجاتي."
              name="أميرة ك."
            />
          </div>
        </div>
      </section>

      <Footer lang="ar" />
    </>
  );
}
