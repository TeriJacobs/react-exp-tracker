import React, { useState} from 'react';
import ExpenseForm from '../expense/ExpenseForm';
import Data from '../../data/Data.json'

function CreateExpense(props) {
    const [filteredList, setFilteredList] = useState(JSON.parse(localStorage.getItem('INCOMEDATA')) || Data)

    function saveExpenseDataHandler(enteredExpense){
        const ExpenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        }
        props.onAddExpense(ExpenseData)

    }
  return (
    <>
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </>
  )
}

export default CreateExpense