import { ElementType, ReactNode } from 'react';

interface InfoItemProps {
  icon: ElementType;
  text: string | ReactNode;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export default function InfoItem({
  icon: Icon,
  text,
  className = 'flex items-center gap-x-1.5',
  iconClassName = 'h-3.5 w-3.5',
  textClassName = 'text-xs font-medium',
}: InfoItemProps) {
  return (
    <div className={className}>
      <Icon className={iconClassName} />
      <span className={textClassName}>{text}</span>
    </div>
  );
}
