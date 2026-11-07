import React from "react";
import Table from "../../components/common/Table/Table";
import TableHead from "../../components/common/Table/Elements/TableHead";
import TableHeadCell from "../../components/common/Table/Elements/TableHeadCell";
import TableBody from "../../components/common/Table/Elements/TableBody";
import TableRow from "../../components/common/Table/Elements/TableRow";
import TableCell from "../../components/common/Table/Elements/TableCell";
import { productsAllTableHeadRow } from "../../data/products";
import clsx from "clsx";

const ProductsTableView = ({ products, setProducts, paginatedProducts }) => {
  return (
    <Table
      header={{ title: "لیست محصولات", Buttons: undefined }}
      pagination={{ items: products, itemsPerPage: 7, setItems: setProducts }}
    >
      <TableHead>
        {productsAllTableHeadRow.map((headCell) => (
          <TableHeadCell key={headCell}>{headCell}</TableHeadCell>
        ))}
      </TableHead>

      <TableBody>
        {paginatedProducts.map((productItem) => (
          <TableRow key={productItem.id}>
            <TableCell>{productItem.id.slice(0, 10)}...</TableCell>
            <TableCell>{productItem.title}</TableCell>
            <TableCell>
              <img
                src={productItem.img}
                alt={productItem.title}
                className="w-25 rounded-md border primary-border-color"
              />
            </TableCell>
            <TableCell>
              <p
                className={clsx(
                  productItem.isPublished ? "success-badge" : "danger-badge",
                  "badge",
                )}
              >
                {productItem.isPublished ? "عمومی" : "خصوصی"}
              </p>
            </TableCell>
            <TableCell>
              {productItem.price.toLocaleString("fa-IR")} تومان
            </TableCell>
            <TableCell>{productItem.entity}</TableCell>
            <TableCell>عملیات</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductsTableView;
