import React from "react";
import { Link } from "react-router";

function SidebarHeader() {
  return (
    <div className="pb-6 border-b border-gray-400">
      <Link to="/" className="flex items-center gap-3">
        <img src="/images/logo.png" alt="SabzPanel" className="size-10" />
        <span className="text-xl font-black text-zinc-900">پنل سبز</span>
      </Link>
    </div>
  );
}

export default SidebarHeader;
