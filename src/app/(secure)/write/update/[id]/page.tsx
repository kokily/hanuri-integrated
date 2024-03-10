import { Write } from '_components/write/Write';

export default function UpdateWritePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <Write id={id} />;
}
