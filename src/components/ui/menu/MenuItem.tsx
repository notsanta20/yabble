import { Link } from "react-router";

function MenuItem({
  name,
  url,
  isSelected,
  handleClick,
}: {
  name: string;
  url: string;
  isSelected: string;
  handleClick: Function;
}) {
  return (
    <Link
      to={url}
      onClick={() => {
        handleClick(name);
      }}
    >
      <div
        className={
          "flex gap-2 items-center p-2 rounded-2xl border-2 hover:border-(--glass-border-light) hover:bg-(--glass-fill-light) " +
          (name === isSelected
            ? "bg-(--glass-fill-light) border-(--glass-border-light)"
            : "border-(--transparent)")
        }
      >
        <img
          src={"/assets/icons/" + name + ".svg"}
          alt={name}
          className="w-[22px] h-auto"
        />
        <h2 className="text-white text-xs font-[Syncopate] font-bold">
          {name}
        </h2>
      </div>
    </Link>
  );
}

export default MenuItem;
