import { clsx } from 'clsx';
import Image, { ImageProps } from 'next/image';

interface FigureProps extends Omit<ImageProps, 'alt'> {
  alt?: string;
  caption?: string;
  figureClassName?: string;
}

export default function Figure({
  className = '',
  alt = '',
  caption,
  figureClassName = '',
  ...props
}: FigureProps) {
  return (
    <figure className={figureClassName}>
      <Image {...props} alt={alt} className={clsx('rounded-lg', className)} />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
