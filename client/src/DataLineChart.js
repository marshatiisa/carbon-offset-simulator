import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from "recharts";

function DataLineChart({ data }) {
  console.log('DL', data);
  return (
    <LineChart
      width={600}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="numTrees"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}

export default DataLineChart;
