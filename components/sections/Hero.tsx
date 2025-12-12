import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { CONTENT, SITE_CONFIG } from '@/data/content';

export default function Hero() {
  const { headline, description, cta } = CONTENT.hero;

  return (
    <section className='relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden'>
      {/* Background Gradient */}
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-50 to-white -z-10' />

      <Container>
        <div className='flex flex-col md:flex-row items-center gap-12'>
          <div className='flex-1 text-center md:text-left space-y-6'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight'>
              {headline}
            </h1>
            <p className='text-lg text-gray-600 leading-relaxed'>
              {description}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
              <Button
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hai, saya nak cairkan limit!`}
                external>
                {cta}
              </Button>
            </div>
          </div>

          <div className='flex-1 w-full max-w-md md:max-w-full relative'>
            <div className='relative aspect-square overflow-hidden'>
              {/* Placeholder untuk gambar hero. Ganti src dengan gambar asli. */}

              <Image
                src='/hero1.png'
                alt='Cashout ShopeePay Later'
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
