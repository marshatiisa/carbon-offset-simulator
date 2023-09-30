import DataLineChart from "./DataLineChart"

function DataVisualization({data}){
    console.log('DV', data)
    return (
        <div>
            <DataLineChart data={data}/>
        </div>
    )
}
export default DataVisualization