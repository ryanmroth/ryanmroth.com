import About from './About';
import Information from './Information';
import User from './User';

export default function Sidebar() {
  return (
    <div className="space-y-4">
      <User />
      <About />
      <Information />
    </div>
  );
}
