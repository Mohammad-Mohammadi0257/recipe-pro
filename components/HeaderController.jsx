'use client';

import { usePathname } from 'next/navigation';
import Header from './layout/Header';

export default function HeaderController() {
  const pathname = usePathname();

  // هر صفحه‌ای که آدرسش با /recipes/ شروع بشه، هدر نداشته باشه
  const hideHeader = pathname.startsWith('/recipes/');

  if (hideHeader) return null;

  return <Header/>;
}
