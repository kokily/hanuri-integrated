'use client';

import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Transition, Dialog } from '@headlessui/react';

import { Button } from '_components/common/Button';
import { Icon } from '_components/common/Icon';

import heroImage from '/public/main.png';

export function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <section className="px-4 pt-16 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-25 to-purple-50">
      {/* Hero Container */}
      <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Hero Text content */}
        <div className="flex flex-col items-center justify-center lg:items-start lg:col-span-6">
          <div>
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-2">
              하누리에 오신 걸 환영합니다
            </span>
          </div>

          <h1 className="max-w-xl mt-4 text-center text-purple-900 sm:mt-5 lg:text-left h1 lg:max-w-none">
            하누리 봉사회
          </h1>
          <p className="max-w-2xl mt-3 text-xl lreading-loose text-center text-purple-800 lg:text-left">
            이웃을 사랑하는 마음으로 저소득층 아동과 장애아, 그리고 노인 등,
            모든 봉사를 필요로 하는 곳에 따뜻한 손길을 내밀어 적극적인
            봉사활동을 하기 위해 최선을 다하고 있습니다
          </p>

          <div className="flex flex-col items-center mt-8 overflow-hidden sm:flex-row">
            <Button href="/about" variant="primary" size="lg">
              소개글
              <Icon
                icon="arrowNarrowRight"
                className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                stroke={2}
              />
            </Button>
            <Button
              href="/gallery/2023"
              variant="secondary"
              className="mt-6 sm:mt-0 sm:ml-6"
              size="lg"
            >
              갤러리
              <Icon
                icon="playFilled"
                className="mr-3 text-purple-600 duration-300 ease-in-out w-7 h-7 group-hover:text-purple-50"
              />
            </Button>
          </div>

          <p className="hidden text-sm font-medium tracking-wider text-purple-900 uppercase sm:block lg:hidden xl:block mt-14">
            소외된 이웃과 더불어 살아가는{' '}
            <span className="font-semibold text-purple-600">
              아름다운 세상을 만들어갑니다
            </span>
          </p>

          <div className="flex-col hidden mt-8 overflow-hidden divide-y sm:flex sm:mt-5 sm:flex-row sm:divide-x sm:divide-y-0 lg:hidden xl:flex divide-purple-400/20">
            <div className="flex flex-col items-center pb-5 sm:pb-0 sm:pr-10">
              <div className="flex justify-center w-full space-x-1">
                <Icon icon="users" className="w-10 h-10 text-blue-500" />
              </div>
              <p className="mt-2.5 text-xs font-bold text-purple-700 uppercase tracking-wide">
                자원봉사
              </p>
            </div>
            <div className="flex flex-col items-center py-5 sm:py-0 sm:px-10">
              <div className="flex justify-center w-full space-x-1">
                <Icon icon="moodKid" className="w-10 h-10 text-blue-500" />
              </div>
              <p className="mt-2.5 text-xs font-bold text-purple-700 uppercase tracking-wide">
                아동·청소년 복지
              </p>
            </div>
            <div className="flex flex-col items-center pt-5 sm:pt-0 sm:pl-10">
              <div className="flex justify-center w-full space-x-1">
                <Icon icon="messages" className="w-10 h-10 text-blue-500" />
              </div>
              <p className="mt-2.5 text-xs font-bold text-purple-700 uppercase tracking-wide">
                결연·후원
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex flex-col justify-center max-w-3xl mx-auto mt-16 lg:mt-0 lg:max-w-none lg:col-span-6">
          <div className="relative">
            <Image
              src={heroImage}
              priority
              className="w-full h-auto"
              alt="하누리 봉사회 메인사진"
              sizes="(min-width: 1280px) 39rem, (min-width: 1024px) 50vw, (min-width: 768px) 48rem, 100vw"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="absolute inline-flex w-20 h-20 bg-purple-400 rounded-full opacity-60 animate-ping" />

              {/* Video Modal */}
              <button
                className="relative z-10 flex items-center justify-center w-20 h-20 duration-300 ease-in-out rounded-full outline-none bg-purple-600/40 group hover:bg-purple-600/80"
                onClick={openModal}
              >
                <Icon
                  icon="playFilled"
                  className="w-12 h-12 duration-300 ease-in-out text-white/90 group-hover:text-white/95"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 w-full h-full px-4 overflow-hidden transition duration-150 ease-linear"
            aria-modal="true"
            onClose={closeModal}
          >
            {/* Modal overlay */}
            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-50"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-50"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 w-screen h-screen transition-opacity duration-300 ease-linear bg-black opacity-50" />
            </Transition.Child>

            <div className="flex items-center justify-center w-auto min-h-screen mx-auto">
              {/* Modal Content */}
              <Transition.Child
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 scale-95 translate-y-24"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 translate-y-24"
              >
                <Dialog.Panel className="w-full max-w-6xl max-h-full overflow-auto bg-white rounded-2xl">
                  <div className="relative aspect-w-16 aspect-h-9">
                    <iframe
                      className="absolute w-full h-full"
                      src="https://www.youtube.com/embed/Gk8TdpH9cU0"
                      title="Video"
                      allowFullScreen
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </section>
  );
}
