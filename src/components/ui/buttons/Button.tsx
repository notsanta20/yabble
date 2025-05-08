import { Link } from "react-router";

interface props {
  url: string;
  name: string;
}

function Button({ url, name }: props) {
  return (
    <button className="p-4 rounded-2xl font-[Syncopate] text-xl font-bold text-white border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) hover:bg-(--glass-fill-white) cursor-pointer">
      <Link to={url}>{name}</Link>
    </button>
  );
}

export default Button;
