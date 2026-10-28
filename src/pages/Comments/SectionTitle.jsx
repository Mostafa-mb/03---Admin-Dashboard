import React from "react";

function SectionTitle({ title, Buttons }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold font-IRANSansX">{title}</h2>
      </div>
      <div className="flex items-center gap-3">{Buttons}</div>
    </div>
  );
}

export default SectionTitle;
