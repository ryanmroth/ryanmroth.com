import Image from 'next/image';
import Link from 'next/link';

import Figure from '@/app/blog/_components/Figure';

import type { MDXComponents } from 'mdx/types';

// Define props type for custom components
interface CustomFigureProps {
  src: string;
  alt?: string;
  caption?: string;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom components
    Figure: (props: CustomFigureProps) => <Figure {...props} />,

    // Override default HTML elements
    a: ({ href = '', ...props }) => {
      const isInternal = href.startsWith('/');
      if (isInternal) {
        return <Link href={href} {...props} />;
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
      );
    },

    img: ({ src, alt, width, height, ...props }) => {
      if (!src) return null;
      return (
        <Image
          src={src}
          alt={alt || ''}
          width={typeof width === 'string' ? parseInt(width) : width}
          height={typeof height === 'string' ? parseInt(height) : height}
          {...props}
          loading="lazy"
          className="rounded-md"
        />
      );
    },

    // Pass through any other components
    ...components,
  };
}
