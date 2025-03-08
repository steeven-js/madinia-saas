import { ReactNode } from 'react';
import { domMax, LazyMotion } from 'framer-motion';

// ----------------------------------------------------------------------

export function MotionLazy({ children }: { children: ReactNode }) {
  return (
    <LazyMotion strict features={domMax}>
      {children}
    </LazyMotion>
  );
}
