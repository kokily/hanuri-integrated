import { ReadHanuri } from '_components/hanuri/ReadHanuri';
import client from '_helpers/client/client';

async function getData(id: string): Promise<HanuriType> {
  const res = await client.get(`/hanuries/${id}`);

  if (!res.data) {
    throw new Error('Failed to fetch data');
  }

  return res.data;
}

export default async function HanuriPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getData(id);

  return <ReadHanuri hanuri={data} />;
}
