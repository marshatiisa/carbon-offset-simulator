import React, { useState} from 'react';
import { useForm } from 'react-hook-form';
import BootstrapTable from 'react-bootstrap-table-next';
import { Link } from 'react-router-dom';

function SimulationPage(){
    const [purchases, setPurchases] = useState([])
    const {register, handleSubmit, reset} = useForm()

  
    const columns = [
        {dataField: 'id', text: 'ID'},
        {dataField: 'MonthYear',text: 'date'},
        {dataField: 'NumberOfTrees', text: 'number of trees'}
        
    ]
    
    const data =   [
            { id: 1, MonthYear: 'Jan-23', NumberOfTrees: 20 },
            { id: 2, MonthYear: 'Feb-27', NumberOfTrees: 10 },
            { id: 3, MonthYear: 'Dec-24', NumberOfTrees: 0 },
            { id: 4, MonthYear: 'Jun-25', NumberOfTrees: 9 }
    ]
    

    const onSubmit =(data) => {
        setPurchases([...purchases, data])
        reset()
    }
return(
    <div>
        <h2>Carbon Offset Simulation Tool</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='date' name='Month & Year' ref={register} />
            <input type='number' name='Number of trees' ref={register} />
            <button>Add Purchase</button>
        </form>
      
        <BootstrapTable keyField='id' data={ purchases } columns = { columns } /> 
        <div>
        <h3>Summary</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod diam at
            mauris tincidunt, ac eleifend libero pharetra. Duis sed aliquet enim.
        </p>
        <p>
            Vivamus auctor, urna sit amet mattis lacinia, justo libero eleifend est, in
            cursus arcu enim ut massa.
        </p>
      </div>
    </div>
);
}

export default SimulationPage;