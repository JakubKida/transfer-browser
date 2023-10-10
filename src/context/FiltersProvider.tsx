import React, { createContext, useEffect, useState } from "react";
import {
  PagingOptions,
  SortDirection,
  SortOptions,
  SortType,
} from "../types/Paging";

export type FiltersContextType = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  selectedUserId: string | null;
  setSelectedUserId: React.Dispatch<React.SetStateAction<string | null>>;
  sortOptions: SortOptions;
  setSortOptions: React.Dispatch<React.SetStateAction<SortOptions>>;
  paging: PagingOptions;
  setPaging: React.Dispatch<React.SetStateAction<PagingOptions>>;
};

type Props = {
  children?: React.ReactNode;
};

export const FiltersContext = createContext({} as FiltersContextType);

export const FiltersContextProvider = ({ children }: Props) => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const [sortOptions, setSortOptions] = useState<SortOptions>({
    sortType: SortType.NONE,
    sortDirection: SortDirection.ASCENDING,
  });

  const [searchValue, setSearchValue] = useState("");

  const [paging, setPaging] = useState<PagingOptions>({
    page: 1,
    entriesPerPage: 10,
  });

  useEffect(() => {
    setPaging({
      page: 1,
      entriesPerPage: paging.entriesPerPage,
    });
  }, [
    paging.entriesPerPage,
    sortOptions.sortDirection,
    sortOptions.sortType,
    selectedUserId,
    searchValue,
  ]);

  return (
    <FiltersContext.Provider
      value={{
        selectedUserId,
        setSelectedUserId,
        searchValue,
        setSearchValue,
        paging,
        setPaging,
        sortOptions,
        setSortOptions,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersContextProvider;
