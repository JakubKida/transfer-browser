import React, { createContext, useEffect, useState } from "react";
import { Users } from "../types/User";
import { Transaction, TransactionResponse } from "../types/Transaction";
import usersHttp from "../api/users";
import transactionsHttp from "../api/transactions";
import { calculateBalances } from "../utils/calculateBalances";
import { findTransactionsDetails } from "../utils/findTransactionsDetails";
import { PagingOptions } from "../types/Paging";

export type TransactionsContextType = {
  formattedTransactions: Transaction[];
  users: Users;
  isDataLoaded: boolean;
  setPaging: React.Dispatch<React.SetStateAction<PagingOptions>>;
};

type Props = {
  children?: React.ReactNode;
};

export const TransactionsContext = createContext({} as TransactionsContextType);

export const TransactionsContextProvider = ({ children }: Props) => {
  const [transactionsData, setTransactionsData] = useState<
    TransactionResponse[]
  >([]);
  const [formattedTransactions, setFormattedTransactions] = useState<
    Transaction[]
  >([]);

  const [users, setUsers] = useState<Users>({});

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [paging, setPaging] = useState({ page: 0, entriesPerPage: 50 });

  useEffect(() => {
    const transactionsDetails = findTransactionsDetails(
      transactionsData,
      users,
      paging
    );
    setFormattedTransactions(transactionsDetails);
  }, [paging.page, paging.entriesPerPage, transactionsData, users, paging]);

  useEffect(() => {
    const getData = async () => {
      setIsDataLoaded(false);

      const promises = [
        usersHttp.getUsers(),
        transactionsHttp.getTransactions(),
      ] as const;

      const [usersData, transactionsData] = await Promise.all(promises);

      const usersObj = calculateBalances(usersData, transactionsData);

      const transactionsDetails = findTransactionsDetails(
        transactionsData,
        usersObj,
        paging
      );

      setUsers(usersObj);
      setFormattedTransactions(transactionsDetails);
      setTransactionsData(transactionsData);
      setIsDataLoaded(true);
    };

    getData();
  }, [paging]);

  return (
    <TransactionsContext.Provider
      value={{
        users,
        formattedTransactions,
        isDataLoaded,
        setPaging,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsContextProvider;
