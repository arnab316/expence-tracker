import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import Tranaction from './Tranaction';


function TransactionList() {
  const {transactions} = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map(transaction => <Tranaction key={transaction.id} transaction={transaction}/> )}
       
      </ul>
    </>
  )
}

export default TransactionList
