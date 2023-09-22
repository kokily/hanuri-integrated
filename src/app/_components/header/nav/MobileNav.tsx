'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';

import { MenuIcon } from './MenuIcon';

interface Props {
  navigation: {
    label: string;
    href?: string;
  }[];
}

export function MobileNav({ navigation }: Props) {
  return (
    <div className="block lg:hidden">
      <Popover>
        <Popover.Button
          className="relative z-50 w-6 h-5 transition duration-500 ease-in-out transform rotate-0 cursor-pointer group focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {({ open }) => <MenuIcon open={open} />}
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="duration-300 ease-out"
          enterFrom="opacity-0 -translate-y-full"
          enterTo="opacity-100 translate-y-0"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-full"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-0 z-40 w-screen px-4 py-16 overflow-y-scroll bg-gradient-to-tr from-purple-600 to-purple-600 sm:px-8"
          >
            {({ close }) => (
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-col items-center w-full mx-auto space-y-6 justify-evenly">
                  {navigation.map((item) => (
                    <Fragment key={`mobile-link-${item.label}`}>
                      {item.label !== '봉사활동' && (
                        <Link href={item.href!} onClick={() => close()}>
                          <div className="relative p-0.5 group">
                            <span className="relative z-10 text-2xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">
                              {item.label}
                            </span>
                            <span className="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100" />
                          </div>
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>

                <hr className="w-full my-8 border-purple-200 sm:my-10 border-opacity-30" />

                <div className="w-full max-w-md mx-auto">
                  <p className="text-lg font-semibold tracking-wider text-center text-purple-200 uppercase sm:text-left">
                    봉사활동
                  </p>
                  <div className="grid gap-4 mt-4 justify-items-center sm:justify-items-start sm:grid-cols-2 sm:gap-x-8">
                    <Link
                      href={`/gallery/2023`}
                      key={`mobile-dropdown-2023`}
                      className="sm:justify-self-end"
                      onClick={() => close()}
                    >
                      <div className="relative p-0.5 group">
                        <span className="relative z-10 text-xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">
                          2023년
                        </span>
                        <span className="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100" />
                      </div>
                    </Link>

                    <Link
                      href={`/gallery/2022`}
                      key={`mobile-dropdown-2022`}
                      onClick={() => close()}
                    >
                      <div className="relative p-0.5 group">
                        <span className="relative z-10 text-xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">
                          2022년
                        </span>
                        <span className="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100" />
                      </div>
                    </Link>
                    <Link
                      href={`/gallery/2021`}
                      key={`mobile-dropdown-2021`}
                      className="sm:justify-self-end"
                      onClick={() => close()}
                    >
                      <div className="relative p-0.5 group">
                        <span className="relative z-10 text-xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">
                          2021년
                        </span>
                        <span className="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
