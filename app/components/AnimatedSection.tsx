'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  direction = 'up',
  delay = 0,
  duration = 700,
  className = '',
  threshold = 0.1
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const getTransformClasses = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'opacity-0 translate-y-10 scale-95';
        case 'down':
          return 'opacity-0 -translate-y-10 scale-95';
        case 'left':
          return 'opacity-0 -translate-x-20 scale-95';
        case 'right':
          return 'opacity-0 translate-x-20 scale-95';
        case 'scale':
          return 'opacity-0 scale-90';
        default:
          return 'opacity-0 translate-y-10 scale-95';
      }
    }
    return 'opacity-100 translate-x-0 translate-y-0 scale-100';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-${duration} transform ${getTransformClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
}
