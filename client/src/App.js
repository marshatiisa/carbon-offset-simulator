import {useEffect, useState} from 'react';
import DataVisualization from './DataVisualization';
import DataSelection from './DataSelection';

function App () {
  const [carbonOffsetData, setCarbonOffsetData] = useState([])

  useEffect(()=> {
    async function fetchData(){
      const dataResponse = await fetch("http://localhost:3001/carbonoffsetdata")
      const data = await dataResponse.json()
      console.log(data)
      setCarbonOffsetData(data)
    }
    fetchData()
  }, [])
  
    return (
      <div>
        <DataSelection data={carbonOffsetData} />
        <DataVisualization data={carbonOffsetData} />

      </div>
    )
}

export default App;