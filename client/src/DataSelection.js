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
    style: { width: '10%', textAlign: 'center' }  
  },
  {
    dataField: "month",
    text: "Month",
    headerStyle: { width: '30%' }
  },

  {
    dataField: "numTrees",
    text: "Number of Trees",
    headerStyle: { width: '30%' }
  },
  {
    text: "",
  },
];

function DataSelection({ data, setPurchaseData }) {
  // Ensure data array is not empty before mapping
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const dataLis = data.map((d, i) => (
    <li key={i}> {/* Add key attribute to the list item */}
      <span>{i}</span>
      <span>{d.month}</span>
      <span>{d.numTrees}</span>
      <span>
        <FaTrash onClick={() => handleDelete(d)} /> {/* Pass item to handleDelete function */}
      </span>
    </li>
  ));
  

  const handleDelete = (row) => {
    // Check if row is defined before accessing its properties
    if (!row) {
      return;
    }

    const newData = data.filter((item) => item.month !== row.month);
    setPurchaseData(newData);
  };

  return (
    <div style={containerStyle}>
      <DataSelectionForm />
      <h3 style={sectionHeaderStyle}>Purchases</h3>
      {dataLis.length > 0 ? (
        <ul style={listStyle}>{dataLis}</ul>
      ) : (
        <div>No purchases available</div>
      )}
      <BootstrapTable
        keyField="month"
        data={data.map((item, index) => ({ ...item, index: index + 1 }))}
        columns={columns}
      />
      <DataSummary data={data} /> {/* Pass data prop to DataSummary */}
    </div>
  );
}

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
};

const sectionHeaderStyle = {
  marginBottom: '20px',
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
};

export default DataSelection;
