import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'اتصل بنا | عيادة الكنزي لطب الأسنان',
  description: 'احجز موعدك في عيادة الكنزي لطب الأسنان. اتصل بنا هاتفياً أو عبر البريد الإلكتروني أو من خلال النموذج.',
};

export default function ArContactPage() {
  return (
    <>
      <Header lang="ar" />

      {/* Page Header */}
      <div className="page-header page-header--tall">
        <div className="container">
          <h1>حجز موعد</h1>
          <p>
            لا تترددوا في الاتصال بنا لأي استفسار أو لتحديد موعد استشارتكم القادمة. ابتسامتكم هي أولويتنا.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="container">
        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>بياناتنا</h2>
            <p>
              فريق عيادة الكنزي لطب الأسنان تحت تصرفكم لمساعدتكم ومرافقتكم في مسار علاجكم.
            </p>

            <div className="info-item mt-2">
              <div className="info-icon">📍</div>
              <div>
                <h4 style={{ marginBottom: '0.2rem', color: 'var(--text-dark)' }}>
                  عنوان العيادة
                </h4>
                <p style={{ margin: 0, color: 'var(--text-light)' }}>
                  الرويسو، 16000<br />الجزائر العاصمة، الجزائر
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h4 style={{ marginBottom: '0.2rem', color: 'var(--text-dark)' }}>
                  الهاتف
                </h4>
                <p style={{ margin: 0, color: 'var(--text-light)' }}>0799 13 49 59</p>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--primary-color)' }}>
                  في حالة الطوارئ، اتصلوا بهذا الرقم مباشرة.
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <h4 style={{ marginBottom: '0.2rem', color: 'var(--text-dark)' }}>
                  البريد الإلكتروني
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
                  ساعات العمل
                </h4>
                <p style={{ margin: 0, color: 'var(--text-light)' }}>
                  السبت - الأربعاء : 10:00 - 18:00<br />الخميس : مغلق
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm lang="ar" />
        </div>
      </section>

      {/* Google Map */}
      <section style={{ marginTop: '4rem' }}>
        <iframe
          className="map-frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.150207896809!2d3.078795776879264!3d36.74296547226359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb38f80cb8235%3A0x924bfc585d93cf22!2sDentalart%20cabinet%20dr%20Belguidoum!5e0!3m2!1sar!2sdz!4v1784458146164!5m2!1sar!2sdz"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="موقع العيادة"
        />
      </section>

      <Footer lang="ar" />
    </>
  );
}
