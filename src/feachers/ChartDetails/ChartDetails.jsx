import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function ChartDetails({ data }) {
  return (
    <div>
      <BarChart
        style={{
          width: "100%",
          height: 400,
        }}
        responsive
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} stroke="transparent" />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={{ stroke: "#888" }}
          tick={{ fill: "#333", fontSize: 13 }}
        />
        <YAxis
          domain={[0, 100]}
          ticks={[0, 25, 50, 75, 100]}
          tickLine={false}
          axisLine={{ stroke: "#888" }}
          tick={{ fill: "#333", fontSize: 13 }}
          width={40}
        />
        <Tooltip />

        <Bar
          dataKey="value"
          fill="#433B8F"
          barSize={200}
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </div>
  );
}

export default ChartDetails;
