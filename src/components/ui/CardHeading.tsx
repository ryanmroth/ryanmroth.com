import clsx from 'clsx';

interface CardHeadingProps {
  heading: string;
  isWarn?: boolean;
  isError?: boolean;
}

export default function CardHeading({
  heading,
  isWarn = false,
  isError = false,
}: CardHeadingProps) {
  return (
    <h2
      className={clsx(
        'flex items-center gap-x-2.5 px-4 pt-2.5 text-base font-medium before:h-1.5 before:w-1.5 before:rounded-full before:bg-blue-600',
        { 'before:bg-red-600': isError, 'before:bg-yellow-600': isWarn }
      )}
    >
      {heading}
    </h2>
  );
}
