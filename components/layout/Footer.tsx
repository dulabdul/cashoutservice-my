import { SITE_CONFIG } from '@/data/content';
import Container from '../ui/Container';
import { Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300 py-8 border-t border-gray-800'>
      <Container>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <div className='text-center md:text-left'>
            <h3 className='text-lg font-bold text-white'>{SITE_CONFIG.name}</h3>
            <p className='text-sm mt-1'>
              © {new Date().getFullYear()} Hak Cipta Terpelihara.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
