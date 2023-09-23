import { HanuriBody } from './HanuriBody';
import { HanuriHeader } from './HanuriHeader';
import { HanuriThumbnail } from './HanuriThumbnail';

interface Props {
  hanuri: HanuriType;
}

export function ReadHanuri({ hanuri }: Props) {
  return (
    <section className="px-4 pt-32 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-25 to-white">
      {hanuri ? (
        <>
          <HanuriHeader
            title={hanuri.title}
            tags={hanuri.tags}
            date={hanuri.createdAt}
          />
          <HanuriThumbnail thumbnail={hanuri.thumbnail} />
          <HanuriBody body={hanuri.body} />
        </>
      ) : null}
    </section>
  );
}
