import { Metadata } from 'next';

import { ReadHanuri } from '_components/hanuri/ReadHanuri';
import { getData } from './_getData';

export async function generateMetadata({
  params,
}: {
  params: { id: any };
}): Promise<Metadata> {
  const hanuri = await getData(params.id);

  if (!hanuri) {
    throw new Error('Failed to fetch data');
  }

  return {
    title: hanuri.title,
    description: hanuri.body.substring(0, 120).replace(/<[^>]*>?/g, ''),
    keywords: hanuri.tags.toString(),
    openGraph: {
      images: [hanuri.thumbnail],
    },
  };
}

export default async function HanuriPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getData(id);

  return <ReadHanuri hanuri={data} />;
}
