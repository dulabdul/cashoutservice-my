import { CONTENT } from '@/data/content';
import Section from '../ui/Section';
import Container from '../ui/Container';
import {
  ShieldCheck,
  Zap,
  Heart,
  Lock,
  Headphones,
  BookOpen,
} from 'lucide-react';

const ICONS = [Zap, ShieldCheck, BookOpen, Heart, Lock, Headphones];

export default function Advantages() {
  const { advantages } = CONTENT;

  return (
    <Section id='advantages'>
      <Container>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-gray-900'>
            {advantages.title}
          </h2>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {advantages.items.map((item, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={idx}
                className='flex gap-4 items-start p-4 rounded-lg hover:bg-gray-50 transition-colors'>
                <div className='flex-shrink-0'>
                  <div className='w-10 h-10 rounded-lg bg-orange-100 text-primary flex items-center justify-center'>
                    <Icon size={20} />
                  </div>
                </div>
                <div>
                  <h4 className='text-lg font-bold text-gray-900 mb-1'>
                    {item.title}
                  </h4>
                  <p className='text-gray-600 text-sm'>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
