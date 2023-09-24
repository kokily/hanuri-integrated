import { Button } from '_components/common/Button';
import { SyntheticEvent } from 'react';

interface Props {
  onSubmit: (e: SyntheticEvent) => void;
}

export function EditorFooter(props: Props) {
  return (
    <div className="w-full h-16 bottom-0 pl-20 pr-20 bg-teal-600 bg-opacity-60 text-white shadow-md flex justify-center">
      <Button onClick={props.onSubmit}>저장하기</Button>
    </div>
  );
}
