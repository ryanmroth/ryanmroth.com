'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: 'Blog', href: '/' },
  { name: 'Resume', href: '/resume' },
  { name: 'Projects', href: '/projects' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-4 z-50 w-full rounded-xl bg-white p-1.5">
      <div className="flex justify-between gap-x-1.5">
        {navigation.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className={clsx(
              pathname === href ? 'bg-gray-50 text-blue-600' : 'text-gray-600',
              'inline-flex w-full justify-center rounded-md px-4 py-2.5 font-medium duration-150 hover:bg-gray-50 hover:text-blue-600'
            )}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
