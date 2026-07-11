import {useEffect, useState} from 'react';
import './App.css';
import Transaction from './components/Transaction';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import AddTransaction from './components/AddTransaction';
import Header from './components/Header';

function App(){
  const [transactions, setTransactions] = useState(() => {
  const savedTransactions = localStorage.getItem("transactions");

  return savedTransactions
    ? JSON.parse(savedTransactions)
    : [
        // başlangıç örnek verileri
      ];
});

  function addTransaction(transaction){
   const yeniListe=[...transactions, transaction];
   setTransactions(yeniListe);
  }
  function deleteTransaction(key){
    const yeni= transactions.filter((transaction)=>{
      return transaction.id !== key;
    });
    setTransactions(yeni);
  }
 useEffect(() => {
  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );
}, [transactions]);

  return(
    <main className="app">
    <Header />
    <section className="dashboard">
      <Balance transactions={transactions} />
      <IncomeExpense transactions={transactions} />
      <AddTransaction addTransaction={addTransaction}/>
      <Transaction transactions={transactions} deleteTransaction={deleteTransaction} />
    </section>

    </main>
  )
}

export default App;
