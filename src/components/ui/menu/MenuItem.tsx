import { Link } from "react-router";

function MenuItem({ name, isSelected }: { name: string; isSelected: string }) {
  return (
    <Link to={"/" + name}>
      <div
        className={
          "flex gap-2 items-center p-2 rounded-2xl border-2 hover:border-(--glass-border-dark) hover:bg-(--glass-fill-dark) " +
          (name === isSelected
            ? "bg-(--glass-fill-dark) border-(--glass-border-dark)"
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
