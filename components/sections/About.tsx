import { CONTENT } from '@/data/content';
import Section from '../ui/Section';
import Container from '../ui/Container';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const { about, whyChooseUs } = CONTENT;

  return (
    <Section id='about'>
      <Container>
        <div className='max-w-3xl mx-auto text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4 text-gray-900'>
            {about.title}
          </h2>
          <p className='text-gray-600 text-lg leading-relaxed'>
            {about.description}
          </p>
        </div>

        {/* Why Choose Us Section (Embedded) */}
        <div className='bg-orange-50 rounded-2xl p-8 md:p-12 border border-orange-100'>
          <h3 className='text-2xl font-bold text-center mb-8 text-gray-900'>
            {whyChooseUs.title}
          </h3>
          <div className='grid md:grid-cols-3 gap-6'>
            {whyChooseUs.items.map((item, idx) => (
              <div
                key={idx}
                className='flex flex-col items-center text-center p-4'>
                <div className='h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-primary'>
                  <CheckCircle size={24} />
                </div>
                <h4 className='font-semibold text-gray-800'>{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
