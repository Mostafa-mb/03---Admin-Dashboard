import React from "react";
import TableHeader from "./Elements/TableHeader";

const Table = ({
  header = { title: "لیست آیتم ها", Buttons: undefined },
  children,
}) => {
  return (
    <div className="mt-10 border min-w-full bg-white primary-border-color rounded-xl overflow-hidden">
      <TableHeader header={header}></TableHeader>
      {/* <div>{children}</div> */}
    </div>
  );
};
export default Table;
