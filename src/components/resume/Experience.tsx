import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

import {
  Badge,
  Card,
  CardHeading,
  CardContent,
  InfoItem,
} from '@/components/ui';
import { PinIcon, BriefcaseIcon, CalendarIcon } from '@/components/ui/icons';

import drexel from './img/drexel.jpg';
import dropseed from './img/dropseed.jpg';
import l8s from './img/l8s.jpg';

// Or if you want to be more specific with the job types:
type JobType = 'Full-time' | 'Part-time' | 'Self-employed' | 'Contract';

interface Job {
  icon: StaticImageData;
  role: string;
  company: string;
  website: string;
  location: string;
  period: string;
  type: JobType; // Using the union type
  description: string[];
}

interface JobCardProps {
  job: Job;
}

const jobsList = [
  {
    icon: l8s,
    role: 'Vice President, Technical Security Solutions',
    company: 'Layer 8 Security',
    website: 'https://layer8security.com',
    location: 'Malvern, PA',
    period: 'Apr 2023 - Present',
    type: 'Full-time' as JobType,
    description: [
      'Led a 6-person cybersecurity team and spearheaded innovative service development that generated $1.7M in revenue while partnering with executives on strategic initiatives. Served as technical advisor and sales engineer, driving growth through cross-functional collaboration and strategic service delivery.',
    ],
  },
  {
    icon: l8s,
    role: 'Director, Technical Security Services',
    company: 'Layer 8 Security',
    website: 'https://layer8security.com',
    location: 'Malvern, PA',
    period: 'Dec 2020 - Apr 2023',
    type: 'Full-time' as JobType,
    description: [
      'Orchestrated cybersecurity strategy development and implementation that achieved 30% faster delivery times and maintained 100% resource availability, while securing average contract renewals of $125K. Provided strategic technology guidance to executives while managing client relationships and driving cross-functional issue resolution.',
    ],
  },
  {
    icon: l8s,
    role: 'Manager, Security Services',
    company: 'Layer 8 Security',
    website: 'https://layer8security.com',
    location: 'Malvern, PA',
    period: 'Oct 2019 - Dec 2020',
    type: 'Full-time' as JobType,
    description: [
      'Directed a 4-person security team that delivered comprehensive assessments and penetration testing for 40+ clients while maintaining 95% team retention. Partnered with product development to launch two new security offerings while collaborating across sales and engagement teams to secure new contracts.',
    ],
  },
  {
    icon: l8s,
    role: 'Cybersecurity Analyst',
    company: 'Layer 8 Security',
    website: 'https://layer8security.com',
    location: 'Malvern, PA',
    period: 'Jan 2019 - Oct 2019',
    type: 'Full-time' as JobType,
    description: [
      'Executed comprehensive security assessments, penetration tests, and incident response while translating complex findings into actionable client recommendations. Performed in-depth threat analysis and delivered defensive security services, including security monitoring and awareness training.',
    ],
  },
  {
    icon: drexel,
    role: 'Adjunct Faculty',
    company: 'Drexel University',
    website: 'https://drexel.edu',
    location: 'Philadelphia, PA',
    period: 'Mar 2021 - Sep 2023',
    type: 'Part-time' as JobType,
    description: [
      'Instructed advanced IT and cybersecurity courses focused on penetration testing and server management using active learning methodologies. Evaluated student progress through comprehensive assessments while providing constructive feedback to enhance technical mastery.',
    ],
  },
  {
    icon: dropseed,
    role: 'Principal',
    company: 'Dropseed Solutions',
    website: '',
    location: 'Bristol, PA',
    period: 'Feb 2011 - Jan 2019',
    type: 'Self-employed' as JobType,
    description: [
      'Founded and operated a web development firm delivering comprehensive hosting, security, and server hardening services. Specialized in content-driven, standards-compliant web solutions for clients.',
    ],
  },
];

const JobCard = ({ job }: JobCardProps) => {
  const { icon, role, company, website, location, period, type, description } =
    job;

  return (
    <CardContent className="flex flex-col gap-4 duration-150 hover:bg-gray-100 sm:flex-row">
      <Image
        src={icon}
        alt={`${company} logo`}
        className="size-12 rounded-full border-2 border-white shadow-sm"
        width={48}
        height={48}
      />

      <div className="w-full">
        <div className="flex flex-wrap items-center justify-between gap-y-2">
          <h3 className="font-medium">{role}</h3>
          <Badge text={type} />
        </div>

        <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600">
          {website ? (
            <Link
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <InfoItem icon={BriefcaseIcon} text={company} />
            </Link>
          ) : (
            <InfoItem icon={BriefcaseIcon} text={company} />
          )}
          <InfoItem icon={PinIcon} text={location} />
          <InfoItem icon={CalendarIcon} text={period} />
        </div>

        <div className="mt-4 max-w-lg space-y-2 text-gray-600">
          {description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </div>
    </CardContent>
  );
};

export default function Experience() {
  return (
    <Card>
      <CardHeading heading="Experience" />
      <div className="mt-4 space-y-1.5">
        {jobsList.map((job) => (
          <JobCard key={job.role} job={job} />
        ))}
      </div>
    </Card>
  );
}
