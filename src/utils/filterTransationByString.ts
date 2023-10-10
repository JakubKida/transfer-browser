import { Transaction } from "../types/Transaction";

export const filterTransactionByString = (
  transaction: Transaction,
  searchValue: string
) => {
  if (transaction.sourceName.toLowerCase().includes(searchValue.toLowerCase()))
    return true;
  if (transaction.targetName.toLowerCase().includes(searchValue.toLowerCase()))
    return true;
  if (transaction.amount.toString().includes(searchValue)) return true;

  return false;
};
