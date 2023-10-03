import {useEffect, useState} from 'react';
import DataVisualization from './DataVisualization';
import DataSelection from './DataSelection';

function App () {
  const [carbonOffsetData, setCarbonOffsetData] = useState([])

  useEffect(()=> {
    async function fetchData(){
      const dataResponse = await fetch("http://localhost:3001/purchases")
      const data = await dataResponse.json()
      console.log(data)
      setCarbonOffsetData(data)
    }
    fetchData()
  }, [])
  
    return (
      <div style={{ margin: '20px' }}>
        <h1 style={{ textAlign: 'center' }}> Carbon Offset Simulation Tool</h1>
        <DataSelection data={carbonOffsetData} />
        <DataVisualization data={carbonOffsetData} />

      </div>
    )
}

export default App;
