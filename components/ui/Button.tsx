import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  external?: boolean;
}

export default function Button({
  children,
  className,
  href,
  variant = 'primary',
  fullWidth = false,
  external = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50';

  const variants = {
    primary:
      'bg-primary text-white hover:bg-orange-600 shadow-md hover:shadow-lg focus:ring-primary',
    outline:
      'border-2 border-primary text-primary hover:bg-orange-50 focus:ring-primary',
    ghost: 'text-gray-600 hover:text-primary hover:bg-gray-100',
  };

  const combinedClasses = cn(
    baseStyles,
    variants[variant],
    fullWidth && 'w-full',
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...props}>
      {children}
    </button>
  );
}
