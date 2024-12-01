import clsx from 'clsx';
import { ReactNode } from 'react';

interface CardContentProps {
  children: ReactNode;
  className?: string;
  hasCover?: boolean;
}

export default function CardContent({
  children,
  className = '',
  hasCover = false,
}: CardContentProps) {
  return (
    <div
      className={clsx(
        'bg-gray-50 p-4',
        hasCover ? 'rounded-b-md' : 'rounded-md',
        className
      )}
    >
      {children}
    </div>
  );
}
