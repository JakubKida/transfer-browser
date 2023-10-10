import React, { useContext } from "react";
import styles from "./SearchBar.module.scss";
import { FiltersContext } from "../../context/FiltersProvider";

type Props = {};

const SearchBar = (props: Props) => {
  const { searchValue, setSearchValue } = useContext(FiltersContext);
  return (
    <div className={styles.searchBar}>
      Search:{" "}
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchBar;
