interface Props {
  date: string;
  title: string;
  tags: string[];
}

export function HanuriHeader(props: Props) {
  const target = new Date(props.date);
  const targetDate = `${target.getFullYear()}. ${
    target.getMonth() + 1
  }. ${target.getDate()}.`;

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="relative">
        <div className="flex justify-center">
          <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
            {targetDate}
          </span>
        </div>
        <h2 className="max-w-3xl mx-auto mt-4 text-center text-purple-900 h2">
          {props.title}
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800 sm:mt-5">
          {props.tags.map((tag) => (
            <span key={`tag-${tag}`} className="text-blue-400 font-bold">
              #{tag}{' '}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
