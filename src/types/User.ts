export type UserResponse = {
  id: string;
  name: string;
};

export type User = {
  id: string;
  name: string;
  balance: number;
  transactionCount: number;
};

export type Users = {
  [key: string]: User;
};
