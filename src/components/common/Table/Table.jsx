import React from "react";
import TableHeader from "./Elements/TableHeader";
import Pagination from "./Pagination";

const Table = ({
  header = { title: "لیست آیتم ها", Buttons: undefined },
  children,
  pagination = {
    items: null,
    setItems: null,
    itemsPerPage: null,
  },
}) => {
  return (
    <div className="mt-10 border min-w-full bg-white primary-border-color rounded-xl overflow-hidden">
      <TableHeader header={header}></TableHeader>
      <div>{children}</div>
      <Pagination
        items={pagination.items}
        setItems={pagination.setItems}
        itemsPerPage={pagination.itemsPerPage}
      ></Pagination>
    </div>
  );
};
export default Table;
