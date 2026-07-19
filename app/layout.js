import './globals.css';

export const metadata = {
  metadataBase: new URL('https://elkenzidental.vercel.app'),
  title: 'CABINET DENTAIRE ELKENZI | Cabinet Dentaire d\'Excellence à Alger',
  description: 'Cabinet Dentaire ELKENZI à Ruisseau, Alger. Soins dentaires modernes, sans douleur et adaptés à vos besoins. Esthétique dentaire, implantologie, soins préventifs.',
  keywords: 'dentiste, cabinet dentaire, Alger, Ruisseau, soins dentaires, implant, blanchiment, ELKENZI',
  alternates: {
    languages: {
      'fr-DZ': '/',
      'ar-DZ': '/ar',
    },
  },
  openGraph: {
    title: 'CABINET DENTAIRE ELKENZI',
    description: 'Un sourire parfait commence par des soins d\'exception',
    url: 'https://elkenzidental.vercel.app',
    siteName: 'Cabinet Dentaire ELKENZI',
    locale: 'fr_DZ',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Cabinet Dentaire ELKENZI',
  image: 'https://elkenzidental.vercel.app/images/dent1.png',
  url: 'https://elkenzidental.vercel.app',
  telephone: '+213550000000', // To be updated by user
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ruisseau',
    addressLocality: 'Alger',
    addressCountry: 'DZ'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.752887, // Approximate for Alger
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

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
