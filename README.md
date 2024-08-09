#Transactions App

This project is a simple React application that allows users to view, add, and filter transactions. It also demonstrates how to set up a local backend using json-server to simulate a database.

##Table of Contents
Project Setup
Features
Usage
Project Structure


##Project Setup

###Prerequisites
Node.js and npm should be installed on your system.
json-server should be installed globally. If not, install it using:npm install -g json-server

###Installation
Clone the repository:git clone <your-repo-url>
cd transactions-app

###Install dependencies:
npm install

###Set up the backend:
Create a db.json file in the root directory of the project.
Use the provided data from this link for the initial data in db.json.
Start the json-server:json-server --watch db.json --port 8001
Verify the server by visiting http://localhost:3000/transactions.

###Run the React application:
npm start
The application should open automatically in your default browser at http://localhost:3000.

###Features
View Transactions: See a table of all transactions.
Add Transaction: Fill out and submit a form to add a new transaction. This will add the new transaction to the table (Note: the new transaction is not persisted to the backend).
Filter Transactions: Type into the search bar to filter transactions. Only transactions with a description matching the search term will be shown in the transactions table.

###Usage
Viewing Transactions:Upon loading the app, all transactions from the db.json file will be displayed in a table.
Adding a New Transaction:Use the form below the table to add a new transaction. Fill in the description, amount, and date, then click "Add Transaction".
The new transaction will appear in the table.
Filtering Transactions:
Use the search bar to filter transactions by description. Only transactions containing the search term will be displayed.

##Project Structure

Bank-OF-FLATIRON/
│
├── public/
│   ├
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Transactionform.jsx
│   │   |── db.json
│   ├   |__ style.css
│   ├──main.jsx
│   └──...
│
├
├── package.json
└── README.md
src/components/: Contains all the React components used in the project.
db.json: Simulated backend database used by json-server.



