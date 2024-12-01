import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return <div className="rounded-xl bg-white p-1.5">{children}</div>;
}
