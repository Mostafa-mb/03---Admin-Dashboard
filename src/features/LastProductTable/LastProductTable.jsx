import React, { useState } from "react";
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
import RemoveProductIcon from "./components/RemoveProductIcon";
import ChangeVisibilityIcon from "./components/ChangeVisibilityIcon";
import EditProductIcon from "./components/EditProductIcon";

function LastProductTable() {
  const [lastProducts, setLastProducts] = useState([...products]);

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

  const removeProduct = (id) => {
    const newProducts = lastProducts.filter((product) => product.id !== id);
    setLastProducts(newProducts);
  };

  const changeProductVisibility = (id) => {
    const newProducts = lastProducts.map((product) => {
      return product.id === id
        ? { ...product, isPublished: !product.isPublished }
        : { ...product };
    });

    setLastProducts(newProducts);
  };

  return (
    <Table header={{ title: "لیست محصولات", Buttons: buttons }}>
      <TableHead>
        {productsTableHeadRow.map((cell) => (
          <TableHeadCell key={cell}>{cell}</TableHeadCell>
        ))}
      </TableHead>

      <TableBody>
        {lastProducts.map((product, index) => {
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
              <TableCell>
                <div className="flex items-center gap-2">
                  <RemoveProductIcon
                    product={product}
                    handler={removeProduct}
                  ></RemoveProductIcon>
                  <ChangeVisibilityIcon
                    product={product}
                    handler={changeProductVisibility}
                  ></ChangeVisibilityIcon>
                  <EditProductIcon product={product}></EditProductIcon>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default LastProductTable;
