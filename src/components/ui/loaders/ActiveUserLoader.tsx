import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ActiveUserLoader() {
  return (
    <div className="flex gap-2 items-center p-2">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton circle={true} width="25px" height="25px" />
        <div className="flex-1">
          <Skeleton height="15px" />
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default ActiveUserLoader;
