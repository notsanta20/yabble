import { Link } from "react-router";

interface largeBtn {
  url: string;
  name: string;
}

interface smallBtn {
  name: string;
}

export function ButtonLarge({ url, name }: largeBtn) {
  return (
    <button className="p-4 rounded-2xl font-[Syncopate] text-xl font-bold text-white border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) hover:bg-(--glass-fill-white) cursor-pointer">
      <Link to={url}>{name}</Link>
    </button>
  );
}

export function ButtonSmall({ name }: smallBtn) {
  return (
    <button className="p-2 rounded-2xl font-[Syncopate] text-xl font-bold text-white border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) hover:bg-(--glass-fill-white) cursor-pointer">
      {name}
    </button>
  );
}
