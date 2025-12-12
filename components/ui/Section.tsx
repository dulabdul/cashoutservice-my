import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bgColor?: 'white' | 'gray';
}

export default function Section({
  children,
  className,
  id,
  bgColor = 'white',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 scroll-mt-20',
        bgColor === 'gray' ? 'bg-gray-50' : 'bg-white',
        className
      )}>
      {children}
    </section>
  );
}
