import { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useInfiniteQuery } from '@tanstack/react-query';

import { listHanuriesAPI } from '_helpers/client/api';
import { useObserver } from '_helpers/client/useObserver';

export function useListHanuries() {
  const router = useRouter();
  const pathname = usePathname();

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['hanuries'],
    queryFn: ({ pageParam }) =>
      listHanuriesAPI({ cursor: pageParam, year: pathname.split('/')[2] }),
    getNextPageParam: (data) =>
      data && data.length === 10 ? data[data.length - 1].id : undefined,
    enabled: true,
  });

  const hanuries = useMemo(() => {
    if (!data) return [];

    return ([] as Array<HanuriType>).concat(...data.pages);
  }, [data]);

  const onReadHanuri = (id: string) => {
    router.push(`/hanuri/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  return {
    hanuries,
    onReadHanuri,
    setTarget,
  };
}
