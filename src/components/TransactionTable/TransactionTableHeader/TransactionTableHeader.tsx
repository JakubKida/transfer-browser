import React, { useContext } from "react";
import styles from "./TransactionTableHeader.module.scss";
import { FiltersContext } from "../../../context/FiltersProvider";
import { SortDirection, SortType } from "../../../types/Paging";
import TriangleIcon from "../../../assets/triangle.svg";

type Props = {};

const TransactionTableHeader = (props: Props) => {
  const { sortOptions, setSortOptions } = useContext(FiltersContext);

  const setSortingType = (newSortingType: SortType) => {
    if (newSortingType === sortOptions.sortType) {
      if (sortOptions.sortDirection === SortDirection.ASCENDING) {
        setSortOptions({
          sortType: sortOptions.sortType,
          sortDirection: SortDirection.DESCENDING,
        });
      } else {
        setSortOptions({
          sortType: SortType.NONE,
          sortDirection: SortDirection.ASCENDING,
        });
      }
    } else {
      setSortOptions({
        sortType: newSortingType,
        sortDirection: SortDirection.ASCENDING,
      });
    }
  };

  return (
    <div className={styles.transactionTableHeader}>
      <p onClick={() => setSortingType(SortType.SENDER)}>
        Send By{" "}
        {sortOptions.sortType === SortType.SENDER && (
          <img
            className={styles.transactionTableHeaderSortIcon}
            style={{
              rotate:
                sortOptions.sortDirection === SortDirection.DESCENDING
                  ? "180deg"
                  : "0",
            }}
            src={TriangleIcon}
            alt=""
          />
        )}
      </p>
      <p onClick={() => setSortingType(SortType.RECEPIENT)}>
        Received By{" "}
        {sortOptions.sortType === SortType.RECEPIENT && (
          <img
            className={styles.transactionTableHeaderSortIcon}
            style={{
              rotate:
                sortOptions.sortDirection === SortDirection.DESCENDING
                  ? "180deg"
                  : "0",
            }}
            src={TriangleIcon}
            alt=""
          />
        )}
      </p>
      <p onClick={() => setSortingType(SortType.AMOUNT)}>
        Amount{" "}
        {sortOptions.sortType === SortType.AMOUNT && (
          <img
            className={styles.transactionTableHeaderSortIcon}
            style={{
              rotate:
                sortOptions.sortDirection === SortDirection.DESCENDING
                  ? "180deg"
                  : "0",
            }}
            src={TriangleIcon}
            alt=""
          />
        )}
      </p>
    </div>
  );
};

export default TransactionTableHeader;
