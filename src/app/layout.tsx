import '@/styles/globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Sidebar from '@/components/sidebar';
import { Navigation } from '@/components/ui';

// Constants
const inter = Inter({ subsets: ['latin'] });

const SITE_NAME = 'Ryan M. Roth';
const SITE_DESCRIPTION =
  'Personal website of Ryan M. Roth, Cybersecurity Professional. See my resume and blog posts.';
const SITE_URL = 'https://ryanmroth.com';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-TODO';

// Types
interface RootLayoutProps {
  children: React.ReactNode;
}

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME} • Cybersecurity Professional`,
    default: `${SITE_NAME} • Cybersecurity Professional`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: `${SITE_NAME} • Cybersecurity Professional`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: '/img/og.png',
        width: 800,
        height: 600,
      },
      {
        url: '/img/og-alt.png',
        width: 1800,
        height: 1600,
        alt: `${SITE_NAME} • Cybersecurity Professional`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    types: {
      'application/rss+xml': [
        {
          title: 'Blog Feed | Ryan M. Roth • Cybersecurity Professional',
          url: `${SITE_URL}/blog/index.xml`,
        },
      ],
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Components
function Favicons() {
  return (
    <>
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
    </>
  );
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Favicons />
      </head>
      <body className="bg-gray-100 text-sm antialiased">
        <div className="mx-auto my-4 max-w-xl px-4 lg:max-w-5xl">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="order-2 lg:order-1">
              <Sidebar />
            </div>
            <main className="order-1 space-y-4 lg:order-2 lg:col-span-2">
              <Navigation />
              {children}
            </main>
          </div>
        </div>
        <GoogleAnalytics gaId={GA_ID} />
      </body>
    </html>
  );
}
