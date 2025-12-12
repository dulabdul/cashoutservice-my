'use client'; // Wajib: Menjadikan ini Client Component agar bisa pakai state

import { useState } from 'react';
import { CONTENT } from '@/data/content';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Image from 'next/image';
import LightboxModal from '../ui/LightboxModal'; // Pastikan path ini sesuai

export default function Testimonials() {
  const { testimonials } = CONTENT;

  // State untuk menyimpan URL gambar yang sedang dibuka
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Section
      id='testimonials'
      bgColor='gray'>
      <Container>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900'>
            {testimonials.title}
          </h2>
          <p className='text-sm text-gray-500 mt-2'>
            Klik gambar untuk memperbesar
          </p>
        </div>

        {/* Container Scroll Horizontal */}
        <div className='flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar'>
          {testimonials.images.map((src, idx) => (
            <div
              key={idx}
              className='snap-center shrink-0 w-[80%] sm:w-[40%] md:w-[30%] lg:w-[25%]'>
              {/* Ubah div menjadi button (atau tambahkan onClick pada div) 
                 agar user tahu ini bisa diklik 
              */}
              <button
                type='button'
                onClick={() => setSelectedImage(src)}
                className='w-full h-full aspect-[9/16] relative rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary'
                aria-label={`Lihat bukti testimoni ke-${idx + 1}`}>
                {/* Placeholder / Gambar */}
                <div className='absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400'>
                  <Image
                    src={src}
                    alt={`Testimoni ${idx + 1}`}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                    sizes='(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 25vw'
                  />
                  {/* Span ini mungkin tertutup jika gambar load full, tapi tidak apa-apa */}
                  <span className='text-sm relative z-10 hidden group-hover:hidden'>
                    Bukti {idx + 1}
                  </span>

                  {/* Overlay efek hover gelap sedikit agar terlihat interaktif */}
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none' />
                </div>
              </button>
            </div>
          ))}
        </div>
      </Container>

      {/* Render Lightbox jika ada gambar yang dipilih */}
      {selectedImage && (
        <LightboxModal
          src={selectedImage}
          alt='Bukti Testimoni Full'
          onClose={() => setSelectedImage(null)}
        />
      )}
    </Section>
  );
}
