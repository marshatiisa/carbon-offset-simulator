import DataLineChart from "./DataLineChart"
import DataAreaChart from "./DataAreaChart"

function DataVisualization({data}){
    console.log('DV', data)
    return (
        <div>
            <DataLineChart data={data}/>
            <DataAreaChart data={data} />
        </div>
    )
}
export default DataVisualization