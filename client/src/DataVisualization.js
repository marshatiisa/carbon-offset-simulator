import DataLineChart from "./DataLineChart"
import DataAreaChart from "./DataAreaChart"

function DataVisualization({carbonOffsetData, expenditureData, countryConsumption}){
    console.log('EX', expenditureData)
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <DataLineChart data={carbonOffsetData} countryConsumption={countryConsumption} />
            <DataAreaChart data={expenditureData} />
        </div>
    )
}
export default DataVisualization