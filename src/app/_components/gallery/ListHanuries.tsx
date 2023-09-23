'use client';

import { Hanuri } from './Hanuri';
import { useListHanuries } from './useListHanuries';

export function ListHanuries() {
  const { hanuries, onReadHanuri, setTarget } = useListHanuries();

  return (
    <section className="relative w-full px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-25 to-white">
      <div className="max-w-2xl mx-auto lg:max-w-screen-xl">
        <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-6 xl:gap-8 sm:mt-16">
          {hanuries && hanuries.length > 0
            ? hanuries.map((hanuri, index) => (
                <Hanuri
                  key={`${hanuri.title}-${hanuri.id}`}
                  hanuri={hanuri}
                  onReadHanuri={onReadHanuri}
                  index={index}
                />
              ))
            : null}
        </div>

        <div ref={setTarget} />
      </div>
    </section>
  );
}
