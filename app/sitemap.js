export default function sitemap() {
  const baseUrl = 'https://elkenzidental.vercel.app';

  // Routes in both languages
  const routes = ['', '/a-propos', '/galerie', '/contact'];
  const arRoutes = ['/ar', '/ar/a-propos', '/ar/galerie', '/ar/contact'];

  const frUrls = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  const arUrls = arRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '/ar' ? 1 : 0.8,
  }));

  return [...frUrls, ...arUrls];
}
