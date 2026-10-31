import React from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { generateChartData } from "../../utils/home";

function DetailsCharts() {
  const data = generateChartData({
    productsLength: 20,
    usersLength: 200,
    ticketsLength: 390,
    adminsLength: 5,
  });
  return (
    <div className="p-5 space-y-10 bg-white border rounded-xl primary-border-color mt-10">
      <p className="text-lg">آمار کلی داشبورد</p>
      <div className="w-full h-100">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Bar dataKey="value" fill="#8884d8" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DetailsCharts;
