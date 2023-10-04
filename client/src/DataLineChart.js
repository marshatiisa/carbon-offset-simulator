import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function DataLineChart({ data, countryConsumption }) {
  data.forEach((d) => {
    d.countryConsumption = countryConsumption;
  });
  console.log("DL", data);
  return (
    <div>
      <h3>Carbon Offsets</h3>
      <LineChart
        width={600}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <XAxis dataKey="month" angle={-90} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="offset" stroke="#8884d8" />
        <Line type="monotone" dataKey="countryConsumption" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default DataLineChart;
