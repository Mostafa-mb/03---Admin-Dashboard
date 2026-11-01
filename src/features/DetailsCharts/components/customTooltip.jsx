import React from "react";

function customTooltip({ payload }) {
  return  (
    <div className="custom-tooltip bg-white p-2 border shadow rounded-xl">
      <p className="label">{`${payload[0]?.payload?.name} : ${payload[0]?.payload?.value}`}</p>
    </div>
  );
}

export default customTooltip;
