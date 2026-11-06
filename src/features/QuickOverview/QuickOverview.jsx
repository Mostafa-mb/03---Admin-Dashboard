import React from "react";
import LastProducts from "./components/LastProducts";
import LastUsers from "./components/LastUsers";

const QuickOverview = () => {
  return (
    <div className="mt-5 space-y-10 grid grid-cols-5 *:p-5 *:border *:primary-border-color *:bg-white *:rounded-xl gap-5 *:shadow">
      <LastProducts></LastProducts>
      <LastUsers></LastUsers>
    </div>
  );
};

export default QuickOverview;
