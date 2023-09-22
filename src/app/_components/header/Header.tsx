import { Contact } from './Contact';
import { Navbar } from './Navbar';

export function Header() {
  return (
    <header className="bg-purple-25">
      <Contact />
      <Navbar />
    </header>
  );
}
