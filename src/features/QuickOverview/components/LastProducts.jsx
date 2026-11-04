import React from "react";
import SectionTitle from "../../../pages/Comments/SectionTitle";
import { products } from "../../../data/products";
import ProductCard from "./ProductCard";

const LastProducts = () => {
  return (
    <div className="col-span-3">
      <SectionTitle title={"اخرین محصولات"}></SectionTitle>
      <div className="space-y-3 mt-5">
        {products.slice(-3).map((product) => (
          <ProductCard key={product.id} {...product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default LastProducts;
