import Image from 'next/image';

import { Badge, CardContent } from '@/components/ui';
import { DownloadIcon } from '@/components/ui/icons';

import cover from '/public/img/cover.jpg';
import photo from '/public/img/photo.jpg';

const user = {
  name: 'Ryan Roth',
  role: 'Cybersecurity Professional',
  location: 'USA',
  bio: 'Strategic cybersecurity architect transforming enterprise defense through innovative solutions and team excellence.',
  status: false,
  skills: [
    'Leadership',
    'Strategic Planning',
    'Client Engagement',
    'Consulting',
    'Sales Engineering',
    'Service Delivery Oversight',
    'Vendor Management',
    'Penetration Testing',
    'Digital Forensics',
    'Incident Response',
    'Scripting Languages',
    'DevSecOps',
  ],
};

function WorkStatus({ status }: { status: boolean }) {
  return status ? (
    <div className="flex-none animate-pulse rounded-full bg-emerald-500/20 p-1">
      <div className="size-1.5 rounded-full bg-emerald-500"></div>
    </div>
  ) : (
    <div className="flex-none rounded-full bg-gray-500/20 p-1">
      <div className="size-1.5 rounded-full bg-gray-400"></div>
    </div>
  );
}

export default function User() {
  return (
    <div className="overflow-hidden rounded-xl bg-white">
      <div className="aspect-h-2 aspect-w-3 overflow-hidden">
        <Image
          src={cover}
          alt="cover"
          className="object-cover object-center"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw"
        />

        <div className="flex items-end bg-gradient-to-t from-white p-4">
          <div>
            <Image
              src={photo}
              alt="photo"
              className="rounded-full border-2 border-white object-cover object-center shadow-sm"
              width={80}
              height={80}
              quality={100}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4 p-1.5">
        <div className="px-4">
          <h3 className="flex items-center gap-x-2 text-base font-medium">
            {user.name}
            <WorkStatus status={user.status} />
          </h3>
          <div className="mt-1 flex items-center gap-x-2">
            <p>{user.role}</p>
            <svg
              viewBox="0 0 2 2"
              width={3}
              height={3}
              aria-hidden="true"
              className="fill-gray-900"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <p>{user.location}</p>
          </div>
        </div>

        <CardContent className="space-y-4">
          <p className="text-gray-600">{user.bio}</p>

          <div className="flex flex-wrap gap-1">
            {user.skills.map((skill) => (
              <Badge key={skill} text={skill} />
            ))}
          </div>

          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-x-4 rounded-md bg-blue-600 px-4 py-2.5 font-medium text-white duration-150 hover:bg-blue-700"
          >
            Download CV
            <DownloadIcon className="size-4" />
          </a>
        </CardContent>
      </div>
    </div>
  );
}
