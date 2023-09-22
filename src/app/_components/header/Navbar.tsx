import Link from 'next/link';
import Image from 'next/image';

import logo from '/public/svg/logo.svg';
import { WebNav } from './nav/WebNav';
import { MobileNav } from './nav/MobileNav';

const navigation = [
  { label: '홈으로', href: '/' },
  { label: '소개글', href: '/about' },
  { label: '봉사활동' },
];

export function Navbar() {
  return (
    <div className="px-4 sm:px-6">
      <nav className="flex items-center max-w-screen-xl pt-5 mx-auto">
        <div className="flex items-center justify-between w-full">
          {/* Main Navigation */}
          <WebNav navigation={navigation} />

          {/* Mobile View */}
          <div className="flex-grow-0 flex-shrink-0 block w-48 lg:hidden sm:w-52">
            <Link href="/">
              <Image src={logo} alt="하누리 봉사회" className="h-auto" />
            </Link>
          </div>

          <MobileNav navigation={navigation} />
        </div>
      </nav>
    </div>
  );
}
