import { Card, CardHeading, CardContent } from '@/components/ui';

const details = [
  { label: 'Location', value: 'Malvern, PA' },
  { label: 'Experience', value: '> 10 years' },
  { label: 'Availability', value: 'Unavailable' },
  { label: 'Relocation', value: 'No' },
];

export default function Information() {
  return (
    <Card>
      <CardHeading heading="Information" />
      <CardContent className="mt-4">
        <ul className="-my-2.5 divide-y divide-gray-200">
          {details.map(({ label, value }) => (
            <li key={label} className="flex justify-between gap-x-4 py-2.5">
              <span className="text-gray-600">{label}</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
