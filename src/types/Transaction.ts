export type TransactionResponse = {
  sourceId: string;
  targetId: string;
  amount: number;
};

export type Transaction = {
  sourceId: string;
  targetId: string;
  sourceName: string;
  targetName: string;
  amount: number;
};
