export const metadata = {
  metadataBase: new URL('https://elkenzidental.vercel.app'),
  title: 'عيادة الكنزي لطب الأسنان | Dental Art',
  description: 'Dental Art — عيادة الكنزي لطب الأسنان في الرويسو، الجزائر العاصمة. رعاية أسنان حديثة، بدون ألم ومصممة حسب احتياجاتك.',
  alternates: {
    languages: {
      'fr-DZ': '/',
      'ar-DZ': '/ar',
    },
  },
  openGraph: {
    title: 'Dental Art — عيادة الكنزي لطب الأسنان',
    description: 'ابتسامة مثالية تبدأ بعناية استثنائية',
    url: 'https://elkenzidental.vercel.app/ar',
    siteName: 'Dental Art',
    locale: 'ar_DZ',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'عيادة الكنزي لطب الأسنان — Dental Art',
  alternateName: 'Dental Art — Cabinet Dentaire Dr Belguidoum',
  image: 'https://elkenzidental.vercel.app/images/dent1.png',
  url: 'https://elkenzidental.vercel.app/ar',
  telephone: ['+213799134959', '+213778323816'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '220 شارع محمد بلوزداد، أمام سونلغاز، فوق مصلحة الضرائب',
    addressLocality: 'الرويسو، الجزائر العاصمة',
    postalCode: '16000',
    addressCountry: 'DZ'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.742965,
    longitude: 3.078795
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday'
      ],
      opens: '10:00',
      closes: '18:00'
    }
  ],
  priceRange: '$$'
};

export default function ArLayout({ children }) {
  return (
    <div dir="rtl" lang="ar">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </div>
  );
}
