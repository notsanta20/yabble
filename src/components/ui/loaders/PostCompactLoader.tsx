import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PostCompactLoader() {
  return (
    <li className="flex items-center gap-2 p-2 rounded-2xl bg-(--loader-bg)">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton width="80px" height="60px" />
        <div className="flex-1 flex flex-col gap-1">
          <Skeleton height="15px" />
          <Skeleton height="15px" />
          <div className="flex gap-4">
            <Skeleton width="40px" height="20px" />
            <Skeleton width="40px" height="20px" />
            <Skeleton width="40px" height="20px" />
          </div>
        </div>
      </SkeletonTheme>
    </li>
  );
}

export default PostCompactLoader;
