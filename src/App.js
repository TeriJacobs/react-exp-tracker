import React, {useEffect, useState} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginForm from './components/account/LoginForm';
import CreateIncome from './components/income/CreateIncome';
import TableDisplay from './components/account/TableDisplay';
import Summary from './components/account/Summary';
import CreateExpense from './components/expense/CreateExpense';
import DeleteAccount from './components/account/DeleteAccount';

const objDataList = [
  {
    id: Math.random().toString(),
    date: '12-12-2020',
    category: 'Petrol',
    amount: -100,
  },
  {
    id: Math.random().toString(),
    date: '12-12-2021',
    category: 'Income',
    amount: 300,
  }

];

function App() {

  const adminUser = {
    username: "admin",
    password: "123"
  }
  const [user, setUser] = useState({password: "", username:""});
  const [error, setError] = useState("");
  const [greeting, setGreeting] = useState("");
  const [filteredList, setFilteredList] = useState(JSON.parse(localStorage.getItem('INCOMEDATA')) || objDataList);

  const Login = details => {
    let today = new Date()
    let curHr = today.getHours()
      if(details.username === adminUser.username && details.password === adminUser.password){
        setUser({
          username: details.username,
          password: details.password
        })
        if (curHr < 12) {
          setGreeting('Good morning,')
        } else if (curHr < 18) {
          setGreeting('Good afternoon,')
        } else {
          setGreeting('Good evening,')
        }
      } else {
        setError("details do not match")
      }
  }

  const Logout = () =>{
      setUser({ username: "", password:"" })
  }

  useEffect(()=>{
    localStorage.setItem('INCOMEDATA', JSON.stringify(filteredList));
  },[filteredList])
  useEffect(() => {
    const filteredList = JSON.parse(localStorage.getItem('INCOMEDATA'));
    if(filteredList){
      setFilteredList(filteredList)
    }
    }, [])

    //Now destructuring
    const addIncomeHandler = (income) => {
      setFilteredList(prevIncomeEarned => {
        return [income, ...prevIncomeEarned]
      })
    }
    const addExpenseHandler = (expense) => {
      setFilteredList(prevExpense => {
        return [expense, ...prevExpense]
      })
    }

  return (
  <>
    <div className="App">
        {(user.username !== "" ? (
          <div className="row mt-5 welcome">
            <div className="col-8">
              <h4>{greeting} <span>{user.username}</span></h4>
            </div>
            <div className="col-4">
              <button type="button" className="btn btn-outline-dark" onClick={Logout}>Logout</button>
            </div>
            <div className="container">
              <Summary items={filteredList}/>
              <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-lg-7 mb-4 mb-lg-0">
                  <TableDisplay items={filteredList} />
                </div>
                <div className="col-lg-5 mb-4 mb-lg-0">
                  <CreateIncome onAddIncome={addIncomeHandler} />
                  <CreateExpense onAddExpense={addExpenseHandler}/>
                  <DeleteAccount />
                </div>
              </div>
              </div>
            </div>
          </div> ) : (
          <LoginForm  Login={Login} error={error}/>
          )
        )}
    </div>
  </>
  );
}

export default App;
