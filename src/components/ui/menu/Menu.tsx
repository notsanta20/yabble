import MenuItem from "./MenuItem";
import { useState } from "react";

function Menu() {
  const [isSelected, setIsSelected] = useState<string>("home");

  function handleMenuItem() {}

  return (
    <div className="flex flex-col gap-1 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) backdrop-blur-(--glass-blur) p-2">
      <MenuItem name="home" isSelected={isSelected} />
      <MenuItem name="find-friends" isSelected={isSelected} />
    </div>
  );
}

export default Menu;
