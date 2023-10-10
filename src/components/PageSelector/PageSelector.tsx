import React, { useContext } from "react";
import styles from "./PageSelector.module.scss";
import { FiltersContext } from "../../context/FiltersProvider";
import TriangleIcon from "../../assets/triangle.svg";
import { TransactionsContext } from "../../context/TransactionsProvider";
import { PagingOptions } from "../../types/Paging";

type Props = {};

const PageSelector = (props: Props) => {
  const { paging, setPaging } = useContext(FiltersContext);
  const { transactionsForDisplaying } = useContext(TransactionsContext);

  const changePage = (newPaging: PagingOptions) => {
    setPaging(newPaging);
  };

  return (
    <div className={styles.pageSelector}>
      <div
        className={styles.previousPages}
        onClick={() =>
          changePage({
            page: paging.page - 1,
            entriesPerPage: paging.entriesPerPage,
          })
        }
        style={{
          display: paging.page <= 1 ? "none" : "inline",
        }}
      >
        <img
          className={styles.changePageIcon}
          style={{
            rotate: "-90deg",
          }}
          src={TriangleIcon}
          alt=""
        />
      </div>

      <div className={styles.currentPage}>{paging.page}</div>

      <div
        className={styles.nextPages}
        onClick={() =>
          changePage({
            page: paging.page + 1,
            entriesPerPage: paging.entriesPerPage,
          })
        }
        style={{
          display:
            paging.page >
            transactionsForDisplaying.length / paging.entriesPerPage
              ? "none"
              : "inline",
        }}
      >
        <img
          className={styles.changePageIcon}
          style={{
            rotate: "90deg",
          }}
          src={TriangleIcon}
          alt=""
        />
      </div>

      <div className={styles.changePageEntriesSelect}>
        Entries per page:
        <select
          className={styles.userSelect}
          name="entriesPerPage"
          value={paging.entriesPerPage}
          onChange={(e) =>
            changePage({
              page: paging.page,
              entriesPerPage: Number(e.target.value),
            })
          }
        >
          <option key="10" value="10">
            10
          </option>
          <option key="20" value="20">
            20
          </option>
          <option key="50" value="50">
            50
          </option>
          <option key="100" value="100">
            100
          </option>
        </select>
      </div>
    </div>
  );
};

export default PageSelector;
