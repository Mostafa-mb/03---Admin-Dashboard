import React from "react";
import { Link } from "react-router";

const OpenInPage = ({ itemsLength, navigateTo }) => {
  return (
    <div className="flex items-center justify-between mt-4 pt-4 border-t primary-border-color">
      <div>
        <span className="text-sm text-neutral-500">
          {itemsLength} رکورد یافت شد
        </span>
      </div>
      <Link to={navigateTo || "/"} className="p-2 primary-bg text-sm">
        نمایش کامل لیست
      </Link>
    </div>
  );
};

export default OpenInPage;
