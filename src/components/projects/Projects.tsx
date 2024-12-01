import Image from 'next/image';
import { StaticImageData } from 'next/image';

import { Card, CardHeading, CardContent, InfoItem } from '@/components/ui';
import {
  LinkIcon,
  FolderIcon,
  UserIcon,
  CalendarIcon,
} from '@/components/ui/icons';

//import codecrafthub from './img/codecrafthub.jpg';

// Types
interface Project {
  icon: StaticImageData;
  name: string;
  category: string;
  role: string;
  date: string;
  description: string;
  website: string;
}

interface ProjectCardProps {
  project: Project;
}

// Constants
const projectsList: readonly Project[] = [
  /*{
    icon: codecrafthub,
    name: 'CodeCraftHub',
    category: 'Developer Tools',
    role: 'Co-Founder',
    date: 'Jun 2021',
    description:
      "CodeCraftHub is a collaborative platform for developers, streamlining code review and project management. Enhance your team's productivity with our intuitive tools.",
    website: 'https://codecrafthub.com',
  },*/
] as const;

// Components
const ProjectCard = ({ project }: ProjectCardProps) => {
  const { icon, name, category, role, date, description, website } = project;
  const displayUrl = website.replace(/^https?:\/\//, '');

  return (
    <CardContent className="flex flex-col gap-4 duration-150 hover:bg-gray-100 sm:flex-row">
      <Image
        src={icon}
        alt={`${name} logo`}
        className="size-12 rounded-full border-2 border-white shadow-sm"
        width={48}
        height={48}
        quality={90}
      />
      <div className="w-full">
        <h3 className="font-medium">{name}</h3>
        <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600">
          <InfoItem icon={FolderIcon} text={category} />
          <InfoItem icon={UserIcon} text={role} />
          <InfoItem icon={CalendarIcon} text={date} />
        </div>
        <p className="mt-4 max-w-lg text-gray-600">{description}</p>
        <a
          href={website}
          className="group mt-4 inline-flex items-center gap-x-2 text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${name} website`}
        >
          <LinkIcon className="size-4" />
          <span className="font-medium group-hover:underline group-hover:underline-offset-4">
            {displayUrl}
          </span>
        </a>
      </div>
    </CardContent>
  );
};

export default function Projects() {
  return (
    <Card>
      <CardHeading heading="Projects" />
      <div className="mt-4 space-y-1.5">
        {projectsList.length > 0 ? (
          projectsList.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))
        ) : (
          <CardContent className="flex flex-col gap-4 duration-150 hover:bg-gray-100 sm:flex-row">
            <div className="w-full">
              <h3 className="font-medium">Coming soon</h3>
            </div>
          </CardContent>
        )}
      </div>
    </Card>
  );
}
