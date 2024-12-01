import { Metadata } from 'next';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s | Blog | Ryan M. Roth • Cybersecurity Professional`,
    default: `Blog | Ryan M. Roth • Cybersecurity Professional`,
  },
  description: 'This blog is about...',
  openGraph: {
    title: 'Blog | Ryan M. Roth • Cybersecurity Professional',
    description: 'This blog is about...',
    type: 'article',
    locale: 'en',
    siteName: 'Ryan M. Roth',
    images: [
      {
        url: '/img/og-image.jpg', // Add OG image
        width: 1200,
        height: 630,
        alt: 'Ryan M. Roth Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Ryan M. Roth • Cybersecurity Professional',
    description: 'This blog is about...',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: LayoutProps) {
  return <article className="mx-auto max-w-4xl">{children}</article>;
}
