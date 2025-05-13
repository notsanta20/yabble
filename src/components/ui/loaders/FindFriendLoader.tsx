import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function FindFriendLoader() {
  return (
    <div className="flex gap-2 items-center p-2">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton width="25px" height="25px" />
        <div className="flex-1">
          <Skeleton height="15px" />
        </div>
        <Skeleton width="155px" height="44px" />
      </SkeletonTheme>
    </div>
  );
}

export default FindFriendLoader;
