import type { User } from "../../../types/types";
import PostCompact from "../Post/PostCompactCard";

function UserSection({ page, user }: { page: string; user: User }) {
  if (page === "Posts") {
    if (user.Posts.length === 0) {
      return (
        <div className="h-full flex items-center justify-center">
          <h1 className="font-[Syncopate] font-bold text-xs text-white">
            User has not posted anything
          </h1>
        </div>
      );
    }

    return (
      <ul className="flex flex-col gap-2 w-full">
        {user.Posts.map((post) => (
          <PostCompact post={post} key={post.id} />
        ))}
      </ul>
    );
  }

  if (page === "Likes") {
    if (user.Likes.length === 0) {
      return (
        <div className="h-full flex items-center justify-center">
          <h1 className="font-[Syncopate] font-bold text-xs text-white">
            User has not Liked any post
          </h1>
        </div>
      );
    }

    return (
      <ul className="flex flex-col gap-2 w-full">
        {user.Likes.map((like) => {
          return like.Posts && <PostCompact post={like.Posts} key={like.id} />;
        })}
      </ul>
    );
  }

  if (page === "Comments") {
    if (user.Comments.length === 0) {
      return (
        <div className="h-full flex items-center justify-center">
          <h1 className="font-[Syncopate] font-bold text-xs text-white">
            User has not posted any comments
          </h1>
        </div>
      );
    }

    return (
      <ul className="flex flex-col gap-2 w-full">
        {user.Comments.map((comment) => {
          return (
            comment.Posts && (
              <PostCompact post={comment.Posts} key={comment.id} />
            )
          );
        })}
      </ul>
    );
  }
}

export default UserSection;
