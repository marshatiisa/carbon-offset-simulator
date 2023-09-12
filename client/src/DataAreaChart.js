import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function DataAreaChart({ data}) {
    console.log('areachart!', data);

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
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="numTrees" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </div>
    );
  }
export default DataAreaChart;
