interface BadgeProps {
  text: string;
  className?: string;
}

export default function Badge({ text, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded bg-gray-200 px-2 py-1 text-xs font-medium text-gray-600 ${className}`}
    >
      {text}
    </span>
  );
}
