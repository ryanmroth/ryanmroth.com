import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardHeading,
  CardContent,
  InfoItem,
  Verify,
} from '@/components/ui';
import {
  BadgeIcon,
  CheckIcon,
  CalendarIcon,
  ExpiredIcon,
} from '@/components/ui/icons';

import accessdata from './img/accessdata.jpg';
import cisco from './img/cisco.jpg';
import isc2 from './img/isc2.jpg';
import offsec from './img/offsec.jpg';

interface Certification {
  icon: StaticImageData;
  certificate: string;
  issuer: string;
  status: 'Active' | 'Expired';
  issued: string;
  description: string;
  verify?: 'Verify';
  link?: string;
}

const educationList: Certification[] = [
  {
    icon: isc2,
    certificate: 'Certified Information Systems Security Professional',
    issuer: '(ISC)²',
    status: 'Active', // Now matches the union type
    issued: '2015',
    verify: 'Verify',
    link: 'https://www.credly.com/badges/7c9b22bd-cb40-4bae-9768-85fef72df6c3/public_url',
    description:
      "The CISSP is a globally recognized certification for information security professionals. The credential demonstrates an individual's expertise in designing, implementing, and managing a best-in-class cybersecurity program. It covers a wide range of security topics, including risk management, security architecture and engineering, communication and network security, identity and access management, security assessment and testing, and software development security.",
  },
  {
    icon: offsec,
    certificate: 'Offensive Security Certified Professional',
    issuer: 'Offensive Security',
    status: 'Active',
    issued: '2021',
    verify: 'Verify',
    link: 'https://www.credly.com/badges/d34ef7c0-b53d-43ee-bc86-3786cf223f5a/public_url',
    description:
      'The OSCP is a highly respected certification for cybersecurity professionals who specialize in ethical hacking and penetration testing. The credential focuses on practical, hands-on skills required to identify and exploit vulnerabilities in various computer systems and networks. To earn the OSCP, candidates must pass a challenging 24-hour exam that involves compromising multiple machines in a simulated environment.',
  },
  {
    icon: cisco,
    certificate: 'Cisco Certified CyberOps Associate',
    issuer: 'Cisco',
    status: 'Expired',
    issued: '2018 – 2021',
    verify: 'Verify',
    link: 'https://www.credly.com/badges/30a95e67-e453-4055-a5c5-d32b7b1fd45d/public_url',
    description:
      "The Cisco Certified CyberOps Associate program focuses on the operational skills and knowledge needed for real-world jobs in security operations centers (SOCs). SOC analysts serve as the front line of defense against cybersecurity threats - preventing and detecting threats to defend organizations. Certification as a cybersecurity operations associate validates an individual's skills in this vital function.",
  },
  {
    icon: accessdata,
    certificate: 'AccessData Certified Examiner',
    issuer: 'AccessData',
    status: 'Expired',
    issued: '2017 – 2019',
    description:
      "The AccessData Certified Examiner (ACE) is a professional certification for individuals specializing in digital forensics and electronic discovery using AccessData's suite of tools, particularly Forensic Toolkit (FTK). The ACE certification demonstrates a candidate's proficiency in performing forensic investigations, including evidence acquisition, analysis, and reporting.",
  },
] as const;

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard = ({ certification }: CertificationCardProps) => {
  const {
    icon,
    certificate,
    issuer,
    status,
    issued,
    description,
    verify,
    link,
  } = certification;

  return (
    <CardContent className="flex flex-col gap-4 duration-150 hover:bg-gray-100 sm:flex-row">
      <Image
        src={icon}
        alt={`${issuer} logo`}
        className="size-12 rounded-full border-2 border-white shadow-sm"
        width={48}
        height={48}
      />

      <div className="w-full">
        <div className="flex flex-wrap items-center justify-between gap-y-2">
          <h3 className="font-medium">{certificate}</h3>
          {verify && link && (
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <Verify text={verify} />
            </Link>
          )}
        </div>

        <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600">
          <InfoItem icon={BadgeIcon} text={issuer} />
          <InfoItem icon={CalendarIcon} text={issued} />
          <InfoItem
            icon={status === 'Active' ? CheckIcon : ExpiredIcon}
            text={status}
          />
        </div>

        <p className="mt-4 max-w-lg text-gray-600">{description}</p>
      </div>
    </CardContent>
  );
};

export default function Certification() {
  return (
    <Card>
      <CardHeading heading="Certification" />
      <div className="mt-4 space-y-1.5">
        {educationList.map((cert) => (
          <CertificationCard key={cert.certificate} certification={cert} />
        ))}
      </div>
    </Card>
  );
}
