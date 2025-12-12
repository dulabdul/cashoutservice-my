import { CONTENT, SITE_CONFIG } from '@/data/content';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function ContactCTA() {
  const { contact } = CONTENT;

  return (
    <Section className='bg-primary text-white text-center'>
      <Container>
        <div className='max-w-2xl mx-auto space-y-8'>
          <h2 className='text-3xl md:text-4xl font-bold'>{contact.headline}</h2>
          <Button
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Saya berminat untuk cairkan limit.`}
            variant='primary'
            className='bg-white text-primary hover:bg-gray-100 shadow-xl text-lg px-8 py-4'
            external>
            {contact.cta}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
