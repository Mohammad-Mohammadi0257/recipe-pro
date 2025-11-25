'use client';

import { usePathname } from 'next/navigation';
import Header from './layout/Header';

export default function HeaderController() {
  const pathname = usePathname();


  const hideHeader = pathname.startsWith('/recipes/');

  if (hideHeader) return ;

  return <Header/>;
}
