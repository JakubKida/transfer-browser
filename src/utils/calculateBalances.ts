import { TransactionResponse } from "../types/Transaction";
import { User, UserResponse, Users } from "../types/User";

export const calculateBalances = (
  usersData: UserResponse[],
  transactionsData: TransactionResponse[]
): Users => {
  const usersObj: {
    [key: string]: User;
  } = {};

  usersData.forEach((userData: any) => {
    usersObj[userData.id] = {
      id: userData.id,
      name: userData.name,
      balance: 0,
      transactionCount: 0,
    };
  });

  transactionsData.forEach(({ sourceId, targetId, amount }) => {
    if (usersObj[sourceId]) {
      usersObj[sourceId].balance -= amount;
      usersObj[sourceId].transactionCount++;
    }
    if (usersObj[targetId]) {
      usersObj[targetId].balance += amount;
      usersObj[targetId].transactionCount++;
    }
  });

  return usersObj;
};
