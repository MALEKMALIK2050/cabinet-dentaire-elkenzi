import './globals.css';

export const metadata = {
  title: 'CABINET DENTAIRE ELKENZI | Cabinet Dentaire d\'Excellence',
  description: 'Cabinet Dentaire ELKENZI à Ruisseau, Alger. Soins dentaires modernes, sans douleur et adaptés à vos besoins. Esthétique dentaire, implantologie, soins préventifs.',
  keywords: 'dentiste, cabinet dentaire, Alger, Ruisseau, soins dentaires, implant, blanchiment, ELKENZI',
  openGraph: {
    title: 'CABINET DENTAIRE ELKENZI',
    description: 'Un sourire parfait commence par des soins d\'exception',
    locale: 'fr_DZ',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
