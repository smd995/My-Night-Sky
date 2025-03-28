import clsx from "clsx";

interface Props {
  className?: string;
  title: string;
  date: string;
  explanation: string;
  imageUrl: string;
}

export const Card = (props: Props) => {
  return (
    <div
      className={clsx(
        "border border-neutral-200 rounded-l w-xs h-auto bg-white rounded-lg overflow-hidden flex flex-col shadow-sm",
        props.className
      )}
    >
      <img
        src={props.imageUrl}
        alt={props.title}
        className={clsx("w-full aspect-4/3 overflow-hidden")}
      />
      <div className={clsx("px-4 py-6")}>
        <h2
          className={clsx(
            "text-xl leading-6 tracking-tight font-semibold text-neutral-900"
          )}
        >
          {props.title}
        </h2>
        <p
          className={clsx(
            "text-base leading-6 tracking-normal font-medium text-neutral-700"
          )}
        >
          {props.date}
        </p>
        <p
          className={clsx(
            "text-sm leading-5 tracking-tight font-medium text-neutral-600 truncate"
          )}
        >
          {props.explanation}
        </p>
        <button
          className={clsx(
            "w-full mt-4 px-2 py-4 border-2 border-neutral-400 cursor-pointer rounded-lg"
          )}
        >
          자세히 보기
        </button>
      </div>
    </div>
  );
};
