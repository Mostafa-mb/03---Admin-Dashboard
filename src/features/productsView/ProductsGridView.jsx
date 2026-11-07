import React from "react";
import { DiVim } from "react-icons/di";
import ProductCard from "./ProductCard";
import Pagination from "../../components/common/Table/Pagination";

const ProductsGridView = ({ products, setProducts, paginatedProducts }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-3 gap-3">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      <Pagination
        items={products}
        itemsPerPage={7}
        setItems={setProducts}
      ></Pagination>
    </>
  );
};

export default ProductsGridView;
