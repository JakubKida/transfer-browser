import React from "react";
import "./App.module.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import TransactionTable from "./components/TransactionTable/TransactionTable";
import TransactionsContextProvider from "./context/TransactionsProvider";

function App() {
  return (
    <TransactionsContextProvider>
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <TransactionTable />
        </header>
      </div>
    </TransactionsContextProvider>
  );
}

export default App;
