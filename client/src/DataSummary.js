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

// Possible Enhancements

// You could expand on these insights by calculating the total carbon emissions for a user (based on their inputs and your calculations in other areas of the app) and then comparing this value to the total offsets to give users a better sense of their overall footprint, and the impact of their offsetting. 

// Consider incorporating data from the countryConsumption prop in the DataLineChart component. You could compare a user's offsets with their country's average and provide insights on how they compare. 

// You can customize the summary further by adding more relevant statistics or visualizations, like progress towards a goal, or projected impacts based on maintaining current offsetting behaviors.