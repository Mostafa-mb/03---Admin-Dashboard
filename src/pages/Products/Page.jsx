import React, { useState } from "react";
import SectionTitle from "../Comments/SectionTitle";
import { CiGrid41, CiViewTable } from "react-icons/ci";
import { products } from "../../data/products";
import ProductsTableView from "../../features/productsView/ProductsTableView";
import ProductsGridView from "../../features/productsView/ProductsGridView";

function Products() {
  const [layoutType, setLayoutType] = useState("TABLE"); // TABLE or GRID
  const [allProducts, setAllProducts] = useState([...products]);

  const toggleLayout = () => {
    const layout = layoutType === "TABLE" ? "GRID" : "TABLE";
    setLayoutType(layout);
  };

  const buttons = (
    <>
      <button
        className="text-2xl size-10 flex-center bg-[#ECEFF3] text-[#818898] *:stroke-1 rounded-md hover:bg-[#e1e4e7] active:scale-90 active:bg-[#ECEFF3] duration-150 transition-all primary-border-color border cursor-pointer shadow"
        onClick={toggleLayout}
      >
        {layoutType === "TABLE" ? (
          <CiGrid41></CiGrid41>
        ) : (
          <CiViewTable></CiViewTable>
        )}
      </button>
      <button className="primary-bg px-3 py-1">ایجاد محصول</button>
    </>
  );
  return (
    <>
      <SectionTitle title="محصولات" Buttons={buttons}></SectionTitle>
      <section className="mt-10 w-full min-w-full">
        {layoutType === "TABLE" ? (
          <ProductsTableView
            products={products}
            setProducts={setAllProducts}
          ></ProductsTableView>
        ) : (
          <ProductsGridView
            products={products}
            setProducts={setAllProducts}
          ></ProductsGridView>
        )}
      </section>
    </>
  );
}

export default Products;
