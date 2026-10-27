import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router";

function Menus({ menus }) {
  return (
    <div className="space-y-3 mt-6">
      {menus.map((menu) => (
        <div>
          <p className="text-xs text-gray-500 font-semibold0">{menu.title}</p>
          <div className="mt-2 *:w-full *:flex *:items-center *:gap-2 *:h-10 *:duration-150 *:hover:bg-gray-100 space-y-1 *:px-3 *:rounded-md *:cursor-pointer text-gray-700">
            {menu.items.map((item) => (
              <NavLink
                to={item.href}
                key={item.id}
                className={({ isActive }) =>
                  clsx(
                    isActive
                      ? "relative before:absolute before:w-1 before:h-full before:rounded-l-full before:primary-bg before:-right-6 *:[svg]:text-teal-600! before:border-none bg-zinc-100/60"
                      : "border-transparent",
                  )
                }
              >
                <item.icon></item.icon>
                <span>{item.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menus;
