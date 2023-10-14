import { type ChangeEvent, type SyntheticEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { addHanuriAPI } from '_helpers/client/api';
import client from '_helpers/client/client';

export function useAddHanuri() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState<Array<string>>([]);
  const [thumbnail, setThumbnail] = useState('');
  const [year, setYear] = useState('2023');

  const addHanuriMutate = useMutation(addHanuriAPI);

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
  };

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
