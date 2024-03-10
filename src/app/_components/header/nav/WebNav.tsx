'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

import { Icon } from '_components/common/Icon';
import { signOut, useSession } from 'next-auth/react';
import { Button } from '_components/common/Button';

interface Props {
  navigation: {
    label: string;
    href?: string;
  }[];
}

export function WebNav({ navigation }: Props) {
  const pathname = usePathname();
  const { data: user } = useSession();

  const onLogout = async () => {
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  function AdminTab() {
    return (
      <>
        <Link href="/write">
          <div className="relative p-0.5 group">
            <span
              className={clsx(
                'relative z-10 text-lg font-medium',
                pathname === 'write'
                  ? 'text-purple-600'
                  : 'duration-300 ease-in-out group-hover:text-purple-600 text-purple-700',
              )}
            >
              글 작성
            </span>
            <span
              className={clsx(
                'absolute bottom-0 h-1.5 origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1',
                pathname === 'write'
                  ? 'sacle-x-100'
                  : 'duration-300 ease-in-out group-hover:scale-x-100',
              )}
            />
          </div>
        </Link>

        <Button onClick={onLogout}>
          <div className="relative p-0.5 group">
            <span className={clsx('relative z-10 text-lg font-medium')}>
              로그아웃
            </span>
          </div>
        </Button>
      </>
    );
  }

  return (
    <div className="items-center justify-between hidden lg:flex md:space-x-6 lg:space-x-10">
      {navigation.map((item) => (
        <Fragment key={`desktop-link-${item.label}`}>
          {item.label === '봉사활동' ? (
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <Menu.Button>
                    <div className="relative p-0.5 group">
                      <span
                        className={clsx(
                          'relative z-10 flex items-center text-lg font-medium duration-300 ease-in-out group-hover:text-purple-600',
                          open ? 'text-purple-600' : 'text-purple-700',
                        )}
                      >
                        봉사활동
                        {/* Heroicon name: solid/chevron-down */}
                        {/* Toggle class 'rotate-180' on dropdown open and close */}
                        <Icon
                          icon="chevronDown"
                          className={clsx(
                            'ml-1.5 w-4.5 h-4.5 transform duration-300 ease-in-out',
                            open && 'rotate-180',
                          )}
                          stroke={2}
                        />
                      </span>
                      <span className="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100" />
                    </div>
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-300"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-200"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute z-20 w-screen max-w-xs p-4 mt-3 -translate-x-1/2 bg-white border shadow-lg left-1/2 border-gray-50 rounded-2xl">
                      <Menu.Item key={`desktop-dropdown-link-2024`} as="div">
                        {({ close }) => (
                          <>
                            <Link
                              href={`/gallery/2024`}
                              className={clsx(
                                'block w-full py-4 rounded-xl sm:p-5 group',
                                pathname === `/gallery/2024`
                                  ? 'bg-purple-25'
                                  : 'transition duration-200 ease-in-out hover:bg-purple-25/60',
                              )}
                              onClick={close}
                            >
                              <h5 className="text-lg font-semibold text-purple-600">
                                2024년
                              </h5>
                              <p className="mt-1 text-sm text-purple-800 opacity-90">
                                하누리 봉사활동
                              </p>
                            </Link>

                            <>
                              <hr className="my-1 border-purple-200/30 sm:my-2" />
                            </>
                          </>
                        )}
                      </Menu.Item>
                      <Menu.Item key={`desktop-dropdown-link-2023`} as="div">
                        {({ close }) => (
                          <>
                            <Link
                              href={`/gallery/2023`}
                              className={clsx(
                                'block w-full py-4 rounded-xl sm:p-5 group',
                                pathname === `/gallery/2023`
                                  ? 'bg-purple-25'
                                  : 'transition duration-200 ease-in-out hover:bg-purple-25/60',
                              )}
                              onClick={close}
                            >
                              <h5 className="text-lg font-semibold text-purple-600">
                                2023년
                              </h5>
                              <p className="mt-1 text-sm text-purple-800 opacity-90">
                                하누리 봉사활동
                              </p>
                            </Link>

                            <>
                              <hr className="my-1 border-purple-200/30 sm:my-2" />
                            </>
                          </>
                        )}
                      </Menu.Item>
                      <Menu.Item key={`desktop-dropdown-link-2023`} as="div">
                        {({ close }) => (
                          <>
                            <Link
                              href={`/gallery/2022`}
                              className={clsx(
                                'block w-full py-4 rounded-xl sm:p-5 group',
                                pathname === `/gallery/2022`
                                  ? 'bg-purple-25'
                                  : 'transition duration-200 ease-in-out hover:bg-purple-25/60',
                              )}
                              onClick={close}
                            >
                              <h5 className="text-lg font-semibold text-purple-600">
                                2022년
                              </h5>
                              <p className="mt-1 text-sm text-purple-800 opacity-90">
                                하누리 봉사활동
                              </p>
                            </Link>

                            <>
                              <hr className="my-1 border-purple-200/30 sm:my-2" />
                            </>
                          </>
                        )}
                      </Menu.Item>
                      <Menu.Item key={`desktop-dropdown-link-2021`} as="div">
                        {({ close }) => (
                          <>
                            <Link
                              href={`/gallery/2021`}
                              className={clsx(
                                'block w-full py-4 rounded-xl sm:p-5 group',
                                pathname === `/gallery/2021`
                                  ? 'bg-purple-25'
                                  : 'transition duration-200 ease-in-out hover:bg-purple-25/60',
                              )}
                              onClick={close}
                            >
                              <h5 className="text-lg font-semibold text-purple-600">
                                2021년
                              </h5>
                              <p className="mt-1 text-sm text-purple-800 opacity-90">
                                하누리 봉사활동
                              </p>
                            </Link>

                            <>
                              <hr className="my-1 border-purple-200/30 sm:my-2" />
                            </>
                          </>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          ) : (
            <Link href={item.href!}>
              <div className="relative p-0.5 group">
                <span
                  className={clsx(
                    'relative z-10 text-lg font-medium',
                    pathname === item.href
                      ? 'text-purple-600'
                      : 'duration-300 ease-in-out group-hover:text-purple-600 text-purple-700',
                  )}
                >
                  {item.label}
                </span>
                <span
                  className={clsx(
                    'absolute bottom-0 h-1.5 origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1',
                    pathname === item.href
                      ? 'sacle-x-100'
                      : 'duration-300 ease-in-out group-hover:scale-x-100',
                  )}
                />
              </div>
            </Link>
          )}
        </Fragment>
      ))}

      {user && <AdminTab />}
    </div>
  );
}
