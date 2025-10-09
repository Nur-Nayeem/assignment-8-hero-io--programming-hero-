import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarChartRating = ({ ratings }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={400} layout="vertical" data={ratings}>
        <XAxis type="number" axisLine={false} tickLine={false} />
        <YAxis
          type="category"
          dataKey="name"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Bar dataKey="count" fill="#00D390" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartRating;
