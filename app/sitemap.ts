import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.cashoutspaylater.my',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Jika nanti ada halaman blog/artikel, tambahkan loop di sini
  ];
}