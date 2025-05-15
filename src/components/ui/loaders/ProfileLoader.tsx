import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import PostCompactLoader from "./PostCompactLoader";

function ProfileLoader() {
  return (
    <section className="flex-auto flex items-center justify-center text-white">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="min-w-[50%] h-full flex flex-col gap-5 py-3 px-15 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) backdrop-blur-(--glass-blur)">
          <div className="min-w-[400px] flex gap-4 items-center mt-[30px] py-5 px-3 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark)">
            <Skeleton circle={true} width="100px" height="100px" />
            <div className="flex-auto flex flex-col justify-around">
              <Skeleton width="70px" height="25px" />
              <Skeleton width="100px" height="15px" />
            </div>
            <Skeleton width="100px" height="40px" />
          </div>
          <div className="min-w-[400px] grid grid-cols-3 gap-2">
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
          </div>
          <div className="min-w-[400px] flex-auto flex flex-col gap-2">
            <PostCompactLoader />
            <PostCompactLoader />
            <PostCompactLoader />
          </div>
        </div>
      </SkeletonTheme>
    </section>
  );
}

export default ProfileLoader;
