import { PagingOptions } from "../types/Paging";
import { Transaction, TransactionResponse } from "../types/Transaction";
import { Users } from "../types/User";

export const findTransactionsDetails = (
  transactionsData: TransactionResponse[],
  usersObj: Users,
  paging: PagingOptions,
  selectedUserId: string | null
) => {
  let filteredTransactions: TransactionResponse[] = [];

  if (selectedUserId) {
    filteredTransactions = transactionsData.filter(
      (transactionData) =>
        transactionData.sourceId === selectedUserId ||
        transactionData.targetId === selectedUserId
    );
  } else {
    filteredTransactions = transactionsData;
  }

  const transactions: Transaction[] = filteredTransactions.map(
    ({ sourceId, targetId, amount }: TransactionResponse) => {
      const sourceName = usersObj[sourceId]?.name || "";

      const targetName = usersObj[targetId]?.name || "";

      return {
        sourceId,
        targetId,
        sourceName,
        targetName,
        amount,
      };
    }
  );

  return transactions;
};
