import { PagingOptions } from "../types/Paging";
import { Transaction, TransactionResponse } from "../types/Transaction";
import { Users } from "../types/User";

export const findTransactionsDetails = (
  transactionsData: TransactionResponse[],
  usersObj: Users,
  paging: PagingOptions
) => {
  const transactions: Transaction[] = transactionsData
    .slice(
      paging.page * paging.entriesPerPage,
      paging.page * paging.entriesPerPage + paging.entriesPerPage
    )
    .map(({ sourceId, targetId, amount }: TransactionResponse) => {
      const sourceName = usersObj[sourceId]?.name || "";

      const targetName = usersObj[targetId]?.name || "";

      return {
        sourceId,
        targetId,
        sourceName,
        targetName,
        amount,
      };
    });

  return transactions;
};
