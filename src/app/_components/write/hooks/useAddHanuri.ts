import type { ChangeEvent, SyntheticEvent } from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';

import {
  addHanuriAPI,
  readHanuriAPI,
  updateHanuriAPI,
} from '_helpers/client/api';
import client from '_helpers/client/client';

interface Props {
  id?: string;
}

export function useAddHanuri({ id }: Props) {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState<Array<string>>([]);
  const [thumbnail, setThumbnail] = useState('');
  const [year, setYear] = useState('2024');

  // Data Query
  const { data } = useQuery({
    queryKey: ['updateHanuri'],
    queryFn: () => readHanuriAPI(id),
    enabled: !!id,
  });

  // Data Mutations
  const addHanuriMutate = useMutation(addHanuriAPI);
  const updateHanuriMutate = useMutation(updateHanuriAPI);

  const onChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (text: string) => {
    setBody(text);
  };

  const onChangeTags = (nextTags: Array<string>) => {
    setTags(nextTags);
  };

  const onChangeThumbnail = () => {
    const upload = document.createElement('input');

    upload.setAttribute('type', 'file');
    upload.setAttribute('accept', 'image/*');
    upload.click();

    upload.addEventListener('change', async () => {
      const file = upload.files[0];
      const formData = new FormData();

      formData.append('file', file);

      try {
        const response = await client.post<{ url: string }>(
          `/upload`,
          formData,
        );

        if (!response.data) {
          alert('upload Failed!');
        }

        const { url } = response.data;

        setThumbnail(`https://hanuri.or.kr/${url}`);
      } catch (err: any) {
        console.log(err);
      }
    });
  };

  const onChangeYear = (e: ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);
  };

  const onAddHanuri = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!id) {
      await addHanuriMutate.mutateAsync(
        {
          title,
          body,
          tags,
          thumbnail,
          year,
        },
        {
          onSuccess: (data) => {
            router.replace(`/hanuri/${data.id}`);
          },
        },
      );
    } else {
      await updateHanuriMutate.mutateAsync(
        {
          id,
          payload: {
            title,
            body,
            tags,
            thumbnail,
            year,
          },
        },
        {
          onSuccess: (data) => {
            router.replace(`/hanuri/${data.id}`);
          },
        },
      );
    }
  };

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setBody(data.body);
      setTags(data.tags);
      setThumbnail(data.thumbnail);
      setYear(data.year);
    }
  }, [data]);

  return {
    title,
    body,
    thumbnail,
    tags,
    year,
    onChangeTitle,
    onChangeBody,
    onChangeThumbnail,
    onChangeTags,
    onChangeYear,
    onAddHanuri,
  };
}
