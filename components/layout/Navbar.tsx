'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '@/data/content';
import Container from '../ui/Container';
import Button from '../ui/Button';

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Keunggulan', href: '#advantages' },
  { label: 'Testimoni', href: '#testimonials' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm'>
      <Container>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link
            href='/'
            className='flex items-center gap-2'>
            <div className='h-8 w-8 rounded bg-primary flex items-center justify-center text-white font-bold text-xl'>
              C
            </div>
            <span className='text-xl font-bold tracking-tight text-gray-900'>
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className='hidden md:flex items-center gap-6'>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className='text-sm font-medium text-gray-600 hover:text-primary transition-colors'>
                {link.label}
              </Link>
            ))}
            <Button
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
              variant='primary'
              className='px-4 py-2 text-sm'
              external>
              Kontak
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className='md:hidden p-2 text-gray-600'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 p-4 shadow-lg flex flex-col gap-4 animate-in slide-in-from-top-2'>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className='block text-base font-medium text-gray-700 hover:text-primary p-2'
              onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Button
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
            fullWidth
            external>
            Hubungi Kami
          </Button>
        </div>
      )}
    </header>
  );
}
