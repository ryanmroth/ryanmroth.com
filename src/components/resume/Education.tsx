import Image from 'next/image';
import { StaticImageData } from 'next/image';

import { Card, CardHeading, CardContent, InfoItem } from '@/components/ui';
import {
  GraduationCapIcon,
  PinIcon,
  CalendarIcon,
} from '@/components/ui/icons';

import drexel from './img/drexel.jpg';
import holyfamily from './img/holyfamily.jpg';

interface Education {
  icon: StaticImageData;
  degree: string;
  university: string;
  location: string;
  period: string;
  description: string;
}

interface EducationCardProps {
  education: Education;
}

const educationList: Education[] = [
  {
    icon: drexel,
    degree: 'Master of Science in Cybersecurity Engineering',
    university: 'Drexel University',
    location: 'Philadelphia, PA',
    period: '2016 - 2018',
    description:
      'The Master of Science (MS) in Cybersecurity is an interdisciplinary program that prepares students with both the academic and practical training to be competitive in the ever-changing landscape of cybersecurity. The program provides deeply technical and specialized training to develop professionals that are able to understand, adapt, and develop new techniques to confront emerging threats in cybersecurity.',
  },
  {
    icon: holyfamily,
    degree: 'Bachelor of Business Administration in Digital Forensics',
    university: 'Holy Family University',
    location: 'Philadelphia, PA',
    period: '2011 - 2015',
    description:
      'The Digital Forensics program combines business, criminal justice, computer technology, and digital forensics. Graduates possess a solid foundation in business along with specialized knowledge in information security, criminal investigation, evidentiary processes, and accounting forensics. They are proficient in working with various technologies, and trained to conduct high-tech investigations and provide expert testimony.',
  },
];

const EducationCard = ({ education }: EducationCardProps) => {
  const { icon, degree, university, location, period, description } = education;

  return (
    <CardContent className="flex flex-col gap-4 duration-150 hover:bg-gray-100 sm:flex-row">
      <Image
        src={icon}
        alt={`${university} logo`}
        className="size-12 rounded-full border-2 border-white shadow-sm"
        width={48}
        height={48}
      />

      <div className="w-full">
        <h3 className="font-medium">{degree}</h3>

        <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600">
          <InfoItem icon={GraduationCapIcon} text={university} />
          <InfoItem icon={PinIcon} text={location} />
          <InfoItem icon={CalendarIcon} text={period} />
        </div>

        <p className="mt-4 max-w-lg text-gray-600">{description}</p>
      </div>
    </CardContent>
  );
};

export default function Education() {
  return (
    <Card>
      <CardHeading heading="Education" />
      <div className="mt-4 space-y-1.5">
        {educationList.map((education) => (
          <EducationCard key={education.degree} education={education} />
        ))}
      </div>
    </Card>
  );
}
