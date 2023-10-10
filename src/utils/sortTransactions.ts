import { SortDirection, SortOptions, SortType } from "../types/Paging";
import { Transaction } from "../types/Transaction";

export const sortTransactions = (
  TransactionA: Transaction,
  TransactionB: Transaction,
  sortOptions: SortOptions
) => {
  let result = 0;
  switch (sortOptions.sortType) {
    case SortType.NONE:
      result = 0;
      break;
    case SortType.AMOUNT:
      result = TransactionA.amount - TransactionB.amount;
      break;
    case SortType.SENDER:
      result = TransactionA.sourceName.localeCompare(TransactionB.sourceName);
      break;
    case SortType.RECEPIENT:
      result = TransactionA.targetName.localeCompare(TransactionB.targetName);
      break;
    default:
      return 0;
  }

  if (sortOptions.sortDirection === SortDirection.DESCENDING) {
    result *= -1;
  }

  return result;
};
