import Image from 'next/image';
import Link from 'next/link';

import { Icon } from '_components/common/Icon';
import logo from '/public/logo.webp';

interface ContactProps {
  title: string;
  content: string;
  icon: string;
  bg: string;
}

const ContactList = [
  {
    title: '후원계좌',
    content: '농협 355-0082-3684-43',
    icon: 'registered',
    bg: 'bg-rose-200',
  },
  {
    title: '주소지',
    content: '천호동 221-1',
    icon: 'mapPin',
    bg: 'bg-yellow-400',
  },
  {
    title: '이메일',
    content: 'xogml18131@hanmail.net',
    icon: 'mail',
    bg: 'bg-purple-200',
  },
];

export function Contact() {
  function ContactItem(props: ContactProps) {
    return (
      <li className="flex flex-shrink-0">
        <div>
          <span
            className={`flex items-center justify-center rounded-2xl w-11 h-11 ${props.bg}`}
          >
            <Icon icon={props.icon} className="w-6 h-6 text-purple-700" />
          </span>
        </div>
        <div className="flex-1 ml-3 xl:ml-4">
          <h5 className="flex items-center text-base font-semibold text-purple-900">
            {props.title}
          </h5>
          <p className="mt-0.5 text-sm text-purple-800 leading-relaxed text-opacity-90">
            {props.content}
          </p>
        </div>
      </li>
    );
  }

  return (
    <div className="hidden px-4 lg:block sm:px-6">
      {/* Container */}
      <div className="relative max-w-screen-xl py-5 mx-auto border-b border-purple-200/30">
        <div className="flex items-center justify-between">
          {/* Site branding */}
          <div className="flex-grow-0 flex-shrink-0 w-60">
            <Link href="/">
              <Image src={logo} alt="Bright" className="h-auto" />
            </Link>
          </div>
          {/* Contact information */}
          <ul className="flex ml-8 lg:space-x-6 xl:space-x-16">
            {ContactList.map((item) => (
              <ContactItem
                key={item.title}
                title={item.title}
                content={item.content}
                icon={item.icon}
                bg={item.bg}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
