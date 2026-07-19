export const metadata = {
  metadataBase: new URL('https://elkenzidental.vercel.app'),
  title: 'عيادة الكنزي لطب الأسنان | عيادة أسنان متميزة',
  description: 'عيادة الكنزي لطب الأسنان في الرويسو، الجزائر العاصمة. رعاية أسنان حديثة، بدون ألم ومصممة حسب احتياجاتك.',
  alternates: {
    languages: {
      'fr-DZ': '/',
      'ar-DZ': '/ar',
    },
  },
  openGraph: {
    title: 'عيادة الكنزي لطب الأسنان',
    description: 'ابتسامة مثالية تبدأ بعناية استثنائية',
    url: 'https://elkenzidental.vercel.app/ar',
    siteName: 'عيادة الكنزي لطب الأسنان',
    locale: 'ar_DZ',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'عيادة الكنزي لطب الأسنان',
  image: 'https://elkenzidental.vercel.app/images/dent1.png',
  url: 'https://elkenzidental.vercel.app/ar',
  telephone: '+213550000000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'الرويسو',
    addressLocality: 'الجزائر العاصمة',
    addressCountry: 'DZ'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.752887,
    longitude: 3.042048
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday'
      ],
      opens: '08:00',
      closes: '17:00'
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
