export type PagingOptions = {
  page: number;
  entriesPerPage: number;
};

export enum SortType {
  NONE = "none",
  SENDER = "sender",
  RECEPIENT = "recepient",
  AMOUNT = "amount",
}

export enum SortDirection {
  ASCENDING = "ascending",
  DESCENDING = "descending",
}

export type SortOptions = {
  sortType: SortType;
  sortDirection: SortDirection;
};
