import Advantages from '@/components/layout/Advantages';
import ContactCTA from '@/components/layout/ContactCTA';
import Services from '@/components/layout/Services';
import Testimonials from '@/components/layout/Testimonials';
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';

export default function Home() {
  // Schema.org untuk Financial Service
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'CashoutSPayLater Malaysia',
    image: 'https://cashoutspaylater.my/images/logo.png',
    description:
      'Perkhidmatan pencairan limit kredit ShopeePay Later dan Grab PayLater menjadi tunai segera.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MY',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 3.140853, // Koordinat umum KL (opsional)
      longitude: 101.693207,
    },
    url: 'https://cashoutspaylater.my',
    telephone: '+60123456789', // Sesuaikan nomor WA
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    currenciesAccepted: 'MYR',
    paymentAccepted: 'Cash, Credit Card, ShopeePay, GrabPay',
  };
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Services />
      <Advantages />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
