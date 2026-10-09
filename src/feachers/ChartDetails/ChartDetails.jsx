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
        <Tooltip
          content={({ active, payload, label }) => {
            if (!active || !payload?.length) return null;

            return (
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
                <p className="mb-2 text-sm font-bold text-gray-800">{label}</p>

                <p className="text-sm text-violet-700">
                  مقدار: <span className="font-bold">{payload[0].value}</span>
                </p>
              </div>
            );
          }}
        />

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
