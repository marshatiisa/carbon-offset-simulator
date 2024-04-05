import { useState, useEffect } from 'react'; // Import React hooks

// function DataSummary ({data}){
//     return (
//       <div>
//         <h3>Summary</h3>
//           <p>lorem ipsum 
//         </p>
//           <p>lorem ipsum 
//           </p>
//       </div>
//     )
// }
// export default DataSummary;

// OPTION 2
function DataSummary({ data }) {
  const [summaryStats, setSummaryStats] = useState({
    totalOffsets: 0,
    totalExpenditure: 0,
    averageMonthlyOffset: 0,
    averageMonthlyExpenditure: 0,
    highestOffsetMonth: ''
  });

  useEffect(() => {
    const calculateSummaryStats = () => {
      const totalOffsets = data.reduce((acc, entry) => acc + entry.offset, 0);
      const totalExpenditure = data.reduce((acc, entry) => acc + entry.expenditure, 0);
      const averageMonthlyOffset = totalOffsets / data.length;
      const averageMonthlyExpenditure = totalExpenditure / data.length;

      const highestOffsetMonth = data.reduce((maxMonth, entry) => 
          entry.offset > maxMonth.offset ? entry : maxMonth, data[0]
      ).month;

      setSummaryStats({
        totalOffsets,
        totalExpenditure,
        averageMonthlyOffset,
        averageMonthlyExpenditure,
        highestOffsetMonth
      });
    };

    calculateSummaryStats();
  }, [data]);

  return (
    <div>
      <h3>Summary</h3>
      <p>Total Carbon Offsets: {summaryStats.totalOffsets} tons</p>
      <p>Total Expenditure on Offsets: ${summaryStats.totalExpenditure}</p>
      <p>Average Monthly Offset: {summaryStats.averageMonthlyOffset.toFixed(2)} tons</p>
      <p>Average Monthly Expenditure: ${summaryStats.averageMonthlyExpenditure.toFixed(2)}</p>
      <p>Month with Highest Offset: {summaryStats.highestOffsetMonth}</p>
    </div>
  );
}

export default DataSummary;
