import { Card, CardHeading, CardContent } from '@/components/ui';
import { LinkIcon, MailIcon } from '@/components/ui/icons';

export default function About() {
  return (
    <Card>
      <CardHeading heading="About Me" />
      <CardContent className="mt-4 space-y-4">
        <div className="prose prose-sm prose-gray text-gray-600">
          <p>
            A hands-on security leader who bridges technical complexity with
            practical implementation, combining deep expertise in threat
            assessment with a passion for developing both teams and client
            capabilities. My approach integrates offensive security insights
            with defensive strategy to create resilient security programs.
          </p>
        </div>

        <hr className="border-gray-200" />

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:ryan@ryanmroth.com"
            className="group inline-flex items-center gap-x-2"
          >
            <MailIcon className="size-4" />
            <span
              id="email"
              className="font-medium group-hover:underline group-hover:underline-offset-4"
            >
              ryan@ryanmroth<b>.ryanmroth</b>.com
            </span>
          </a>
          <a
            href="https://github.com/ryanmroth"
            target="blank"
            className="group inline-flex items-center gap-x-2"
          >
            <LinkIcon className="size-4" />
            <span className="font-medium group-hover:underline group-hover:underline-offset-4">
              github.com/ryanmroth
            </span>
          </a>
          <a
            href="https://linkedin.com/in/rothryan"
            target="blank"
            className="group inline-flex items-center gap-x-2"
          >
            <LinkIcon className="size-4" />
            <span className="font-medium group-hover:underline group-hover:underline-offset-4">
              linkedin.com/in/rothryan
            </span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
