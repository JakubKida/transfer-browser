import React from "react";
import { Transaction } from "../../types/Transaction";
import styles from "./TransactionTableRow.module.scss";

type Props = {
  transaction: Transaction;
};

const TransactionTableRow = ({ transaction }: Props) => {
  return (
    <div className={styles.transactionTableRow}>
      <p className={styles.transactionTableRowSender}>
        FROM: {transaction.sourceName}
      </p>
      <p className={styles.transactionTableRowRecipient}>
        TO: {transaction.targetName}
      </p>
      <p>AMOUNT: {transaction.amount}</p>
    </div>
  );
};

export default TransactionTableRow;
