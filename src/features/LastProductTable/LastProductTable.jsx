import React from "react";
import Table from "../../components/common/Table/Table";
import { Link } from "react-router";
import { MdOpenInNew } from "react-icons/md";
import TableHeadCell from "../../components/common/Table/Elements/TableHeadCell";
import { products, productsTableHeadRow } from "../../data/products";
import TableHead from "../../components/common/Table/Elements/TableHead";
import TableBody from "../../components/common/Table/Elements/TableBody";
import TableRow from "../../components/common/Table/Elements/TableRow";
import TableCell from "../../components/common/Table/Elements/TableCell";
import clsx from "clsx";

function LastProductTable() {
  const buttons = () => {
    return (
      <Link
        to={"/products"}
        className="underline hover:text-blue-400 text-blue-500 flex-center gap-1"
      >
        <span>صفحه محصولات</span>
        <MdOpenInNew></MdOpenInNew>
      </Link>
    );
  };
  return (
    <Table header={{ title: "لیست محصولات", Buttons: buttons }}>
      <TableHead>
        {productsTableHeadRow.map((cell) => (
          <TableHeadCell key={cell}>{cell}</TableHeadCell>
        ))}
      </TableHead>

      <TableBody>
        {products.map((product, index) => {
          return (
            <TableRow key={product.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>
                <p
                  className={clsx(
                    product.isPublished ? "success-badge" : "danger-badge",
                    "badge",
                  )}
                >
                  {product.isPublished ? "منتشر شده" : "غیر فعال"}
                </p>
              </TableCell>
              <TableCell>
                {product.price.toLocaleString("fa-ir")} ریال
              </TableCell>
              <TableCell>{}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default LastProductTable;
