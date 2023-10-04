import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function DataAreaChart({ data }) {
  data.splice(14)
  console.log("areachart!", data);

  return (
    <div>
      <h3>Cumulative Expenditure</h3>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 10,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="month" angle={-90}/>
        <YAxis />
        <Tooltip />
        <Area
          dataKey="expenditure"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </div>
  );
}
export default DataAreaChart;
