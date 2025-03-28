import clsx from "clsx";

interface Props {
  className?: string;
}

export const Header = (props: Props) => {
  return (
    <div className={clsx("flex justify-between mx-4 my-2", props.className)}>
      <div>
        <div>Logo</div>
      </div>
      <div className="flex gap-2">
        <div>
          <a>검색</a>
        </div>
        <div>
          <a>로그인</a>
        </div>
      </div>
    </div>
  );
};
