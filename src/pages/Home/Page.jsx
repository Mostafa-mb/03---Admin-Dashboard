import React, { useState } from "react";
import SectionTitle from "../Comments/SectionTitle";
import { useNavigate } from "react-router";
import Summaries from "../../features/Summaries/Summaries";
import DetailsCharts from "../../features/DetailsCharts/DetailsCharts";

function Home() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const navigate = useNavigate();

  const toggle = ()=>{
    setIsRedirecting(!isRedirecting);
  }

  const CTAButton = () => {
    const clickHandler = () => {
      toggle();
      navigate("/products")
    };

    return (
      <button
        onClick={clickHandler}
        className="primary-bg px-4 py-2 text-sm rounded-md cursor-pointer hover:opacity-90 text-white"
      >
       {isRedirecting ? "در حال انتقال" : "ایجاد محصول"}
      </button>
    );
  };

  return (
    <>
      <SectionTitle
        title="داشبورد"
        Buttons={<CTAButton></CTAButton>}
      ></SectionTitle>
      <Summaries></Summaries>
      <div className="">
        <DetailsCharts></DetailsCharts>
        {/* <ProductsTable></ProductsTable>
        <QuickOverview></QuickOverview> */}
      </div>
    </>
  );
}

export default Home;
