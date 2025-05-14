import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PostLoader() {
  return (
    <article className="flex-auto flex justify-center">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="flex flex-col gap-4 py-2 px-5 w-[80%] text-white rounded-2xl bg-(--loader-bg)">
          <div className="flex gap-2 items-center">
            <Skeleton circle={true} width="25px" height="25px" />
            <Skeleton width="100px" height="15px" />
          </div>
          <Skeleton height="15px" />
          <Skeleton height="15px" />
          <div className="self-center">
            <Skeleton width="500px" height="300px" />
          </div>
          <div className="flex gap-2">
            <Skeleton width="40px" height="20px" />
            <Skeleton width="40px" height="20px" />
          </div>
          <Skeleton width="250px" height="20px" />
          <Skeleton width="250px" height="20px" />
          <Skeleton width="250px" height="20px" />
        </div>
      </SkeletonTheme>
    </article>
  );
}

export default PostLoader;
