import MenuItem from "./MenuItem";
import { useState } from "react";
import logout from "../../../utils/auth/logout";

function Menu({ name }: { name: string }) {
  const [isSelected, setIsSelected] = useState<string>(name);

  function handleMenuItem(name: string) {
    setIsSelected(name);
  }

  return (
    <aside className="self-start flex flex-col gap-1 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) p-2">
      <MenuItem
        name="home"
        url="/home"
        isSelected={isSelected}
        handleClick={handleMenuItem}
      />
      <MenuItem
        name="find-friends"
        url="/find-friends"
        isSelected={isSelected}
        handleClick={handleMenuItem}
      />
      <MenuItem
        name="messages"
        url="/messages"
        isSelected={isSelected}
        handleClick={handleMenuItem}
      />
      <MenuItem
        name="profile"
        url="/profile"
        isSelected={isSelected}
        handleClick={handleMenuItem}
      />
      <MenuItem
        name="logout"
        url="/login"
        isSelected={isSelected}
        handleClick={logout}
      />
    </aside>
  );
}

export default Menu;
