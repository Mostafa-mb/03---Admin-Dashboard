import React, { useState } from "react";
import SectionTitle from "../Comments/SectionTitle";
import { CiGrid41, CiViewTable } from "react-icons/ci";
import { products } from "../../data/products";
import ProductsTableView from "../../features/productsView/ProductsTableView";
import ProductsGridView from "../../features/productsView/ProductsGridView";
import Modal from "../../components/common/Modal";
import AddProductFields from "../../features/ProductsTable/components/AddProductFields";

function Products() {
  const [layoutType, setLayoutType] = useState("TABLE"); // TABLE or GRID
  const [paginatedProducts, setPaginatedProducts] = useState([...products]);
  const [newProduct , setNewProduct] = useState({
    id:crypto.randomUUID,
    title:"",
    description:"",
    price:"",
    img:"/images/product-img.png",
    isPublished:false,
    entity:""
  })

  const toggleLayout = () => {
    const layout = layoutType === "TABLE" ? "GRID" : "TABLE";
    setLayoutType(layout);
  };

  const createNewProduct = ()=>{
    console.log("new product created");
  }

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
      {/*  */}
      <Modal Trigger={<button className="primary-bg px-3 py-1">ایجاد محصول</button>} title="ایجاد محصول جدید" onSubmit={createNewProduct} >
      <AddProductFields newProduct={newProduct} onChange={setNewProduct}></AddProductFields>
      </Modal>
    </>
  );
  return (
    <>
      <SectionTitle title="محصولات" Buttons={buttons}></SectionTitle>
      <section className="mt-10 w-full min-w-full">
        {layoutType === "TABLE" ? (
          <ProductsTableView
            products={products}
            paginatedProducts={paginatedProducts}
            setProducts={setPaginatedProducts}
          ></ProductsTableView>
        ) : (
          <ProductsGridView
            products={products}
            paginatedProducts={paginatedProducts}
            setProducts={setPaginatedProducts}
          ></ProductsGridView>
        )}
      </section>
    </>
  );
}

export default Products;
