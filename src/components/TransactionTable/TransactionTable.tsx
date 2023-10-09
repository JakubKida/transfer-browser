import React, { FC, useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsProvider";
import TransactionTableRow from "../TransactionTableRow/TransactionTableRow";

const TransactionTable: FC = () => {
  const { isDataLoaded, formattedTransactions } =
    useContext(TransactionsContext);

  return (
    <div>
      {isDataLoaded
        ? formattedTransactions.map((transaction, i) => (
            <TransactionTableRow key={i} transaction={transaction} />
          ))
        : "loading..."}
    </div>
  );
};

export default TransactionTable;
