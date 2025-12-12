// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { SITE_CONFIG } from '@/data/content';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const viewport: Viewport = {
  themeColor: '#FF5722', // Warna Shopee Orange di browser mobile
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cashoutspaylater.my'), // Ganti dengan domain asli nanti
  title: {
    default: 'CashoutSPayLater | Tukar Limit ShopeePay & Grab Jadi Tunai',
    template: '%s | CashoutSPayLater Malaysia',
  },
  description:
    'Perkhidmatan trusted cairkan limit ShopeePay Later, Boost, dan Grab PayLater jadi tunai segera (Instant Transfer). Rate rendah & selamat. Proses 5 minit.',
  keywords: [
    'cashout shopeepay later malaysia',
    'tukar limit grab jadi tunai',
    'cairkan paylater',
    'pinjaman wang segera online',
    'boost payflex cashout',
    'personal loan malaysia',
    'tunai segera',
  ],
  authors: [{ name: 'CashoutSPayLater Admin' }],
  creator: 'CashoutSPayLater',
  publisher: 'CashoutSPayLater',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Geo Tags untuk Local SEO Malaysia
  other: {
    'geo.region': 'MY', // Kode wilayah Malaysia
    'geo.placename': 'Malaysia', // Atau "Malaysia" secara umum
    'og:locale': 'ms_MY',
  },
  openGraph: {
    title: 'Tukar Limit PayLater Jadi Tunai | Trusted & Pantas',
    description:
      'Perlu tunai urgent? Tukar limit Shopee/Grab anda sekarang. Proses pantas 5 minit masuk bank.',
    url: 'https://www.cashoutspaylater.my',
    siteName: 'CashoutSPayLater Malaysia',
    locale: 'ms_MY',
    type: 'website',
    images: [
      {
        url: '/og-image.webp', // Pastikan buat gambar ini (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Cashout Service Malaysia',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Set bahasa ke Malay (Malaysia)
    <html
      lang='ms-MY'
      className='scroll-smooth'>
      <body className={inter.variable}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
