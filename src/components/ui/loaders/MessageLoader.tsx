import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LeftMessageLoader() {
  const width = Math.floor(Math.random() * 100);
  return (
    <li className="flex self-start gap-2 items-center p-2 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) backdrop-blur-(--glass-blur)">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton width={`${width}px`} height="15px" />
      </SkeletonTheme>
    </li>
  );
}

function RightMessageLoader() {
  const width = Math.floor(Math.random() * 250) + 50;
  return (
    <li className="flex self-end gap-2 items-center p-2 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) backdrop-blur-(--glass-blur)">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton width={`${width}px`} height="15px" />
      </SkeletonTheme>
    </li>
  );
}

export { LeftMessageLoader, RightMessageLoader };
