import React from "react";
import users from "../../../data/users";
import SectionTitle from "../../../pages/Comments/SectionTitle";
import OpenInPage from "./OpenInPage";
import UserCard from "./UserCard";

const LastUsers = () => {
  return (
    <div className="col-span-2 max-h-max">
      <SectionTitle title="کاربران اخیر"></SectionTitle>

      <div>
        {users.slice(-5).map((userItem) => (
          <UserCard key={userItem.id} {...userItem}></UserCard>
        ))}
      </div>

      <OpenInPage itemsLength={users.length} navigateTo="/users"></OpenInPage>
    </div>
  );
};

export default LastUsers;
