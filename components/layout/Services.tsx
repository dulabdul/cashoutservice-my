import { CONTENT, SITE_CONFIG } from '@/data/content';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Services() {
  const { services } = CONTENT;

  return (
    <Section
      id='services'
      bgColor='gray'>
      <Container>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900'>{services.title}</h2>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {services.items.map((service, idx) => (
            <div
              key={idx}
              className='bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                {service.title}
              </h3>
              <p className='text-gray-600 mb-6 flex-grow'>{service.desc}</p>
              <Button
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Saya nak tanya pasal ${service.title}`}
                variant='outline'
                fullWidth
                external>
                Tanya Sekarang
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
