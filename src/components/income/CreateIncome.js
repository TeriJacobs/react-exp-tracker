import React, {useState} from 'react';
import IncomeForm from './IncomeForm';
import Data from '../../data/Data.json'


const CreateIncome = (props) => {
    const [filteredList, setFilteredList] = useState(JSON.parse(localStorage.getItem('INCOMEDATA')) || Data);

    function saveIncomeDataHandler(enteredIncome){
    const incomeData = {
        ...enteredIncome,
        id: Math.random().toString()
    }
    props.onAddIncome(incomeData)
    }
    
return (
    <>
    <IncomeForm onSaveIncomeData={saveIncomeDataHandler} />
    </>
)
}

export default CreateIncome;