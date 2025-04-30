'use client';

import { AuthProvider } from '@/hooks/useAuthContext';
import { HeroUIProvider, ToastProvider } from '@heroui/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
    <HeroUIProvider>
      <ToastProvider/>
      {children}
    </HeroUIProvider>
    </AuthProvider>
  );
}
