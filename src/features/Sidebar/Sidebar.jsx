import React from "react";
import menus from "../../data/menus";
import Menus from "../../features/Sidebar/components/Menus";
import SidebarHeader from "./components/SidebarHeader";

function Sidebar() {
  return (
    <aside className="w-[272px] relative z-10 bg-white h-screen sticky top-0 border-l border-gray-200 p-6">
      <SidebarHeader></SidebarHeader>
      <Menus menus={menus}></Menus>
    </aside>
  );
}

export default Sidebar;
