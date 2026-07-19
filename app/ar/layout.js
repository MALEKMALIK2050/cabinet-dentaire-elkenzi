export const metadata = {
  title: 'عيادة الكنزي لطب الأسنان | عيادة أسنان متميزة',
  description: 'عيادة الكنزي لطب الأسنان في الرويسو، الجزائر العاصمة. رعاية أسنان حديثة، بدون ألم ومصممة حسب احتياجاتك.',
  openGraph: {
    title: 'عيادة الكنزي لطب الأسنان',
    description: 'ابتسامة مثالية تبدأ بعناية استثنائية',
    locale: 'ar_DZ',
    type: 'website',
  },
};

export default function ArLayout({ children }) {
  return (
    <div dir="rtl" lang="ar">
      {children}
    </div>
  );
}
