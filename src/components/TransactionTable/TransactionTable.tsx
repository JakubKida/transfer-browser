import React, { FC, useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsProvider";
import styles from "./TransactionTable.module.scss";
import TransactionTableRow from "./TransactionTableRow/TransactionTableRow";
import TransactionTableHeader from "./TransactionTableHeader/TransactionTableHeader";

const TransactionTable: FC = () => {
  const { isDataLoaded, transactionsForDisplaying } =
    useContext(TransactionsContext);

  return (
    <div className={styles.transactionTable}>
      <TransactionTableHeader />
      {isDataLoaded ? (
        transactionsForDisplaying.map((transaction, i) => (
          <TransactionTableRow key={i} transaction={transaction} />
        ))
      ) : (
        <div className={styles.transactionTableLoader}>Loading...</div>
      )}
    </div>
  );
};

export default TransactionTable;
