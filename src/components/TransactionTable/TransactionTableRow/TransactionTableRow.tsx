import React, { useContext } from "react";
import styles from "./TransactionTableRow.module.scss";
import { FiltersContext } from "../../../context/FiltersProvider";
import { Transaction } from "../../../types/Transaction";

type Props = {
  transaction: Transaction;
};

const TransactionTableRow = ({ transaction }: Props) => {
  const { selectedUserId } = useContext(FiltersContext);

  return (
    <div className={styles.transactionTableRow}>
      <p className={styles.transactionTableRowSender}>
        {transaction.sourceName}
      </p>
      <p className={styles.transactionTableRowRecipient}>
        {transaction.targetName}
      </p>
      <p
        className={
          selectedUserId
            ? selectedUserId === transaction.sourceId
              ? styles.transactionTableRowSend
              : styles.transactionTableRowReceived
            : ""
        }
      >
        {selectedUserId
          ? selectedUserId === transaction.sourceId
            ? "-"
            : "+"
          : ""}
        {transaction.amount}
      </p>
    </div>
  );
};

export default TransactionTableRow;
