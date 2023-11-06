import React from "react";
import {
  Bar,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  BarChart,
  Tooltip,
} from "recharts";
type IBarChartProps = {
  data: any;
  width: number;
  height: number;
  keys: string;
};
const MyBarChart = ({ data, width, height, keys }: IBarChartProps) => {
  return (
    <BarChart width={width} height={height} data={data}>
      <CartesianGrid />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={keys} fill="#F87171" barSize={50} />
      {/* <Bar dataKey="uv" fill="#d1001c" /> */}
    </BarChart>
  );
};

export default MyBarChart;
