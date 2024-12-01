import { parseISO, format } from 'date-fns';

interface DateProps {
  dateString: string;
  formatString?: string;
  className?: string;
}

export default function Date({
  dateString,
  formatString = 'LLLL d, yyyy',
  className = 'text-xs font-medium text-gray-600',
}: DateProps) {
  try {
    const date = parseISO(dateString);

    if (isNaN(date.getTime())) {
      throw new Error('Invalid date');
    }

    return (
      <time dateTime={dateString} className={className}>
        {format(date, formatString)}
      </time>
    );
  } catch (error) {
    console.error('Error parsing date:', error);
    return <span className={className}>Invalid date</span>;
  }
}
