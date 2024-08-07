// src/App.js
import React, { useState, useEffect } from "react";
import TransactionForm from "./Transactionform";
import './style.css'
function App() {
  const [transactions, setTransactions] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    return transaction.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>Transactions</h1>
      <TransactionForm/><br/>
      <br />
      <input 
      id="search"
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search transactions"
      />
      <button id="search" onClick={handleSearch}>Search</button>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
