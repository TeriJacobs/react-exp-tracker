import React, {useState}  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function ExpenseForm(props) {

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  
  function amountInputHandler(event){
      setAmount(event.target.value)
  }
  function dateInputHandler(event){
      setDate(event.target.value)
  }

  const dropdownChangeHandler = (event) =>{
    setCategory(event.target.value)

  }

  function submitHandler(e){
    e.preventDefault();
    const expenseData = {
      id: Math.random().toString(),
      date: date,
      category: category,
      amount : parseInt(-amount)
    }
    props.onSaveExpenseData(expenseData);
    setAmount('')
    setDate('')
    setCategory('Please Select')

  }
  return (
    <div className="container withdrawals operations-display pt-3 mt-3 card-widget card-widget-expenses">
            <div className="h-50 pb-4 pb-lg-2">
                <div className="card-body">
                    <div className="row text-left">
                        <h4 className="text-muted text-uppercase small">Add an Expense to account</h4>
                    </div>
                    <div className="row">
                    <form onSubmit={submitHandler}>
                        <div className="form-row align-items-center input-group input-group-sm">
                          <div className="col">
                            <select className="form-control expense-income-border" required onChange={dropdownChangeHandler}defaultValue={'DEFAULT'}>
                              <option value="DEFAULT" disabled>--select--</option>
                                <option value='Food'>Food</option>
                                  <option value='Petrol'>Petrol</option>
                                    <option value='Clothing'>Clothing</option>
                                  <option value='Rent'>Rent</option>
                            </select>
                          </div>
                                <div className="col mx-2">
                                <input 
                                    type="date" 
                                    className=" form-control input-date-expense expense-income-border"  
                                    onChange={dateInputHandler} 
                                    name='date' 
                                    value={date}/>
                                </div>
                                <div className="col">
                                    <input 
                                        type="text" 
                                        className=" form-control input-amount-expense expense-income-border" 
                                        placeholder="R400" 
                                        onChange={amountInputHandler}  
                                        value={amount}/>
                                </div>
                                <div className="col">
                                    <button type="submit" className="btn btn-outline-dark submit-expense" value="Submit">Submit</button>
                                </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ExpenseForm