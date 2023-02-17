import { useState } from 'react'
import './App.css'
import Headers from './components/Headers';
import Balance from './components/Balance';
import IncomeExpence from './components/IncomeExpence';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <GlobalProvider>
   <Headers />
    <div className="container">
     <Balance/>
     <IncomeExpence/>
     <TransactionList/>
     <AddTransaction/>
    </div>
    </GlobalProvider>
   </>
  )
}

export default App
