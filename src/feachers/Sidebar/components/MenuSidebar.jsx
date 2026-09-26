import React from "react";

import menus from "../../../menus";
import ItemMenue from "./ItemMenue";
function MenuSidebar() {
  const { title, items } = menus[0];

  return (
    <div>
      <ul>
        <p className="my-2 text-sm font-bold">{title} </p>
        {items.map((e) => (
          <ItemMenue key={e.id} {...e} />
        ))}
      </ul>
    </div>
  );
}

export default MenuSidebar;
