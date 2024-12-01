import { Education, Experience, Certification } from '@/components/resume';

export default function Home() {
  return (
    <main className="space-y-4">
      <Experience />
      <Education />
      <Certification />
    </main>
  );
}
