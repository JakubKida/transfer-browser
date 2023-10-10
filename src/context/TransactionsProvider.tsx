import React, { createContext, useContext, useEffect, useState } from "react";
import { Users } from "../types/User";
import { Transaction, TransactionResponse } from "../types/Transaction";
import usersHttp from "../api/users";
import transactionsHttp from "../api/transactions";
import { calculateBalances } from "../utils/calculateBalances";
import { findTransactionsDetails } from "../utils/findTransactionsDetails";
import { FiltersContext } from "./FiltersProvider";

export type TransactionsContextType = {
  formattedTransactions: Transaction[];
  transactionsData: TransactionResponse[];
  users: Users;
  isDataLoaded: boolean;
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

  const { selectedUserId, paging } = useContext(FiltersContext);

  useEffect(() => {
    const transactionsDetails = findTransactionsDetails(
      transactionsData,
      users,
      paging,
      selectedUserId
    );
    setFormattedTransactions(transactionsDetails);
  }, [
    paging.page,
    paging.entriesPerPage,
    transactionsData,
    users,
    paging,
    selectedUserId,
  ]);

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
        paging,
        selectedUserId
      );

      setUsers(usersObj);
      setFormattedTransactions(transactionsDetails);
      setTransactionsData(transactionsData);
      setIsDataLoaded(true);
    };

    getData();
  }, [paging, selectedUserId]);

  return (
    <TransactionsContext.Provider
      value={{
        users,
        formattedTransactions,
        transactionsData,
        isDataLoaded,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsContextProvider;
