'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface LightboxModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function LightboxModal({
  src,
  alt,
  onClose,
}: LightboxModalProps) {
  // Menangani tombol Escape untuk menutup modal (Accessibility)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    // Cleanup listener saat komponen unmount
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    // Backdrop hitam transparan dengan z-index tinggi
    <div
      className='fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200'
      onClick={onClose} // Klik di luar gambar untuk menutup
      role='dialog'
      aria-modal='true'>
      {/* Tombol Close (X) */}
      <button
        onClick={onClose}
        className='absolute top-4 right-4 text-white/70 hover:text-white bg-black/50 rounded-full p-2 transition-colors z-10'
        aria-label='Tutup tampilan penuh'>
        <X size={32} />
      </button>

      {/* Container Gambar */}
      {/* e.stopPropagation() mencegah klik pada gambar menutup modal */}
      <div
        className='relative w-full max-w-4xl h-full max-h-[90vh] flex items-center justify-center'
        onClick={(e) => e.stopPropagation()}>
        {/* Gunakan object-contain agar gambar utuh tidak terpotong.
           Gunakan sizes agar Next.js mengoptimalkan ukuran gambar.
        */}
        <Image
          src={src}
          alt={alt}
          fill
          className='object-contain rounded-lg animate-in zoom-in-95 duration-300'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
          priority // Prioritaskan loading gambar ini karena sedang dilihat user
        />
      </div>
    </div>
  );
}
