import React from "react";
import styles from "./App.module.scss";
import TransactionTable from "./components/TransactionTable/TransactionTable";
import TransactionsContextProvider from "./context/TransactionsProvider";
import FiltersContextProvider from "./context/FiltersProvider";
import UserPanel from "./components/UserPanel/UserPanel";
import PageSelector from "./components/PageSelector/PageSelector";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <FiltersContextProvider>
      <TransactionsContextProvider>
        <div className={styles.mainWrapper}>
          <UserPanel />
          <SearchBar />
          <TransactionTable />
          <PageSelector />
        </div>
      </TransactionsContextProvider>
    </FiltersContextProvider>
  );
}

export default App;
