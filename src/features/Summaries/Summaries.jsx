import React from "react";
import { generateSummaries } from "../../utils/home";
import SummaryCard from "./components/SummaryCard";

function Summaries() {
  const summariesDetail = generateSummaries({
    usersLength: 200,
    adminsLength: 5,
    productsLength: 20,
    ticketsLength: 390,
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
      {summariesDetail.map((summary) => (
        <SummaryCard key={summary.id} {...summary}></SummaryCard>
      ))}
    </div>
  );
}

export default Summaries;
