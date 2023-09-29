import BootstrapTable from 'react-bootstrap-table-next';
import DataSelectionForm from './DataSelectionForm';
import DataSummary from './DataSummary';

const columns = [
    {
        dataField: 'index',
        text: '#',         
        formatter: (cell, row, rowIndex) => rowIndex + 1,
      },
    {
      dataField: 'month',
      text: 'Month'
    },
 
    {
      dataField: 'numTrees',
      text: 'Number of Trees',
    },
  ];

function DataSelection({data}){
    const dataLis= data.map((d, i)=> 
    <li>
        <span>{i}</span>
        <span>{d.month}</span>
        <span>{d.numTrees}</span>
        <span>delete</span>
    </li>
    )
    return (
        <div>
            <DataSelectionForm />
            <h3>Purchases</h3>
           <BootstrapTable
            keyField="month"
            data={data.map((item, index) => ({ ...item, index: index + 1 }))}
            columns={columns}
            />
            <DataSummary />
        </div>
    )
}
export default DataSelection