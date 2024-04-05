import { useState } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import DataSelectionForm from "./DataSelectionForm";
import DataSummary from "./DataSummary";
import { FaTrash } from "react-icons/fa";

const columns = [
  {
    dataField: "index",
    text: "#",
    formatter: (cell, row, rowIndex) => rowIndex + 1,
  },
  {
    dataField: "month",
    text: "Month",
  },

  {
    dataField: "numTrees",
    text: "Number of Trees",
  },
  {
    text: "",
  },
];

function DataSelection({ data, setPurchaseData }) {
  // const [selectedRows, setSelectedRows] = useState([]);
  const dataLis = data.map((d, i) => (
    <li>
      <span>{i}</span>
      <span>{d.month}</span>
      <span>{d.numTrees}</span>
      <span>
        <FaTrash />
      </span>
    </li>
  ));
  

  const handleDelete = (row) => {
    const newData = data.filter((item) => item.month !== row.month);
    setPurchaseData(newData);
  };

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
  );
}
export default DataSelection;
