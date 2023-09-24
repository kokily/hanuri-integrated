'use client';

import { useAddHanuri } from './hooks/useAddHanuri';
import { useTags } from './hooks/useTags';

import { EditorTitle } from './editor/EditorTitle';
import { TagBox } from './editor/Tagbox';
import { Thumbnail } from './editor/Thumbnail';
import { EditorFooter } from './editor/EditorFooter';
import dynamic from 'next/dynamic';

const EditorBody = dynamic(() => import('./editor/EditorBody'), { ssr: false });

export function Write() {
  const {
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
  } = useAddHanuri();
  const { input, localTags, onRemoveTag, onChangeText, onSetTags } = useTags({
    tags,
    onChangeTags,
  });

  return (
    <section className="px-4 pt-16 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-25 to-purple-0">
      <EditorTitle
        value={title}
        onChange={onChangeTitle}
        placeholder="제목을 입력하세요"
      />

      <div className="flex flex-wrap w-full mt-10 mb-8">
        <TagBox
          input={input}
          localTags={localTags}
          onRemoveTag={onRemoveTag}
          onChangeText={onChangeText}
          onSetTags={onSetTags}
        />
      </div>

      <div className="w-full h-auto mx-auto my-0 mb-10">
        <Thumbnail
          thumbnail={thumbnail}
          onChangeThumbnail={onChangeThumbnail}
        />
      </div>

      <div className="w-full h-auto mx-auto my-0 mb-10">
        <select
          className="rounded-lg text-sm"
          value={year}
          onChange={onChangeYear}
        >
          <option value="2023">2023년</option>
          <option value="2022">2022년</option>
          <option value="2021">2021년</option>
        </select>
      </div>

      <EditorBody body={body} onChangeBody={onChangeBody} />

      <EditorFooter onSubmit={onAddHanuri} />
    </section>
  );
}
