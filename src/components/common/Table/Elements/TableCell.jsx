import clsx from "clsx";
import React from "react";

function TableCell({ children, className }) {
  return <div className={clsx("line-clamp-1", className)}>{children}</div>;
}

export default TableCell;
