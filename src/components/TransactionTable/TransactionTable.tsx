import React, { FC, useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsProvider";
import styles from "./TransactionTable.module.scss";
import { FiltersContext } from "../../context/FiltersProvider";
import TransactionTableRow from "./TransactionTableRow/TransactionTableRow";
import TransactionTableHeader from "./TransactionTableHeader/TransactionTableHeader";
import { sortTransactions } from "../../utils/sortTransactions";
import { filterTransactionByString } from "../../utils/filterTransationByString";

const TransactionTable: FC = () => {
  const { isDataLoaded, formattedTransactions } =
    useContext(TransactionsContext);

  const { sortOptions, searchValue } = useContext(FiltersContext);

  return (
    <div className={styles.transactionTable}>
      <TransactionTableHeader />
      {isDataLoaded ? (
        [...formattedTransactions]
          .sort((trA, trB) => sortTransactions(trA, trB, sortOptions))
          .filter((transaction) =>
            filterTransactionByString(transaction, searchValue)
          )
          .map((transaction, i) => (
            <TransactionTableRow key={i} transaction={transaction} />
          ))
      ) : (
        <div className={styles.transactionTableLoader}>Loading...</div>
      )}
    </div>
  );
};

export default TransactionTable;
