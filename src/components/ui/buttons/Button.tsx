import { Link } from "react-router";

interface largeBtn {
  url: string;
  name: string;
}

interface smallBtn {
  name: string;
  isPending: boolean;
}

export function ButtonLarge({ url, name }: largeBtn) {
  return (
    <button className="p-4 rounded-2xl font-[Syncopate] text-xl font-bold text-white border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) hover:bg-(--glass-fill-white) cursor-pointer">
      <Link to={url}>{name}</Link>
    </button>
  );
}

export function ButtonSmall({ name, isPending }: smallBtn) {
  return (
    <button
      className="p-2 rounded-2xl font-[Syncopate] text-xl font-bold text-white border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) hover:bg-(--glass-fill-white) cursor-pointer flex justify-center"
      disabled={isPending}
    >
      {isPending ? (
        <img src="/assets/loaders/spinner.svg" alt="loader" />
      ) : (
        name
      )}
    </button>
  );
}
