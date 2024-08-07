// components/TransactionForm.js
import React, { useState } from 'react';
import './style.css'
function TransactionForm(){
    const [newTransaction, setNewTransaction] = useState({
        description: "",
        amount: 0,
      });
      const [transactions, setTransactions] = useState([]);


const handleSubmit = (event) => {
    event.preventDefault();
    const newTransactionData = { ...newTransaction, id: Date.now() };
    setTransactions([...transactions, newTransactionData]);
    setNewTransaction({ description: "", amount: 0 });
  };
return(
    <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            value={newTransaction.description}
            onChange={(event) =>
              setNewTransaction({
                ...newTransaction,
                description: event.target.value,
              })
            }
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            value={newTransaction.amount}
            onChange={(event) =>
              setNewTransaction({
                ...newTransaction,
                amount: parseInt(event.target.value, 10),
              })
            }
          />
        </label>
        <br />
        <br />
        <button type="submit">Add Transaction</button>
      </form>
)}
export default TransactionForm;



