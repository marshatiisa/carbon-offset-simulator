import {useEffect, useState} from 'react';
import DataVisualization from './DataVisualization';
import DataSelection from './DataSelection';

function App () {
  const [carbonOffsetData, setCarbonOffsetData] = useState([])
  const [purchaseData, setPurchaseData] = useState([])
  const [expenditureData, setExpenditureData] = useState([])

  useEffect(()=> {
    async function fetchData(){
      const carbonOffsetDataResponse = await fetch("http://localhost:3001/carbonoffsetdata")
      const carbonOffsetData = await carbonOffsetDataResponse.json()
      console.log(carbonOffsetData)
      setCarbonOffsetData(carbonOffsetData)

      const purchaseResponse = await fetch("http://localhost:3001/purchases")
      const purchaseData = await purchaseResponse.json()
      console.log('purchaseData', purchaseData)
      setPurchaseData(purchaseData)

      const expenditureResponse = await fetch("http://localhost:3001/expendituredata")
      const expenditureData = await expenditureResponse.json()
      console.log('expenditureData', expenditureData)
      setExpenditureData(expenditureData)
    }
    fetchData()
  }, [])
  
    return (
      <div style={{ margin: '20px' }}>
        <h1 style={{ textAlign: 'center' }}> Carbon Offset Simulation Tool</h1>
        <DataSelection country='US' data={purchaseData} />
      <DataVisualization country='US' countryConsumption={15.52/12*1000} carbonOffsetData={convertMonthlyToThirds(carbonOffsetData)} purchaseData={purchaseData} expenditureData={convertMonthlyToThirdsExpenditures(expenditureData)}/>
      </div>
    )
}

function convertMonthlyToThirds(carbonOffsetData) {
  const groupedData = carbonOffsetData.reduce((result, monthly, index) => {
      const thirdOfYear = Math.floor(index / 4); // Split into thirds
      if (!result[thirdOfYear]) {
          result[thirdOfYear] = {
              month: monthly.month,
              offset: 0,
          };
      }
      console.log(monthly, monthly.offset)
      result[thirdOfYear].offset += monthly.offset;
      return result;
  }, []);

  const thirdsOfYearData = groupedData.map(({ month, offset }) => ({
      month,
      offset,
  }));
console.log(thirdsOfYearData)
  return thirdsOfYearData;
}

function convertMonthlyToThirdsExpenditures(expenditureData) {
  const groupedData = expenditureData.reduce((result, monthly, index) => {
      const thirdOfYear = Math.floor(index / 4); // Split into thirds
      if (!result[thirdOfYear]) {
          result[thirdOfYear] = {
              month: monthly.month,
              expenditure: 0,
          };
      }
      console.log(monthly, monthly.expenditure)
      result[thirdOfYear].expenditure += monthly.expenditure;
      return result;
  }, []);

  const thirdsOfYearData = groupedData.map(({ month, expenditure }) => ({
      month,
      expenditure,
  }));

  return thirdsOfYearData;
}
export default App;