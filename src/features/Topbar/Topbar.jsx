import React from "react";
import SearchInput from "./components/SearchInput";
import Notification from "./components/Notification";
import Devider from "./components/Devider";
import Profile from "./components/Profile";

function Topbar() {
  return (
    <div className="flex justify-between items-center w-full h-20 z-10 border-b border-b-gray-400">
      <div>
        <SearchInput></SearchInput>
      </div>
      <div className="flex items-center gap-x-1">
        <Notification></Notification>
        <Devider></Devider>
        <Profile></Profile>
      </div>
    </div>
  );
}

export default Topbar;
