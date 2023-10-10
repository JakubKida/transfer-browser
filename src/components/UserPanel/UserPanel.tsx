import React, { useContext } from "react";
import UserDetails from "./UserDetails/UserDetails";
import UserSelect from "./UserSelect/UserSelect";
import { TransactionsContext } from "../../context/TransactionsProvider";
import { FiltersContext } from "../../context/FiltersProvider";
import styles from "./UserPanel.module.scss";

const UserPanel = () => {
  const { users } = useContext(TransactionsContext);

  const { selectedUserId, setSelectedUserId } = useContext(FiltersContext);

  return (
    <div className={styles.userPanel}>
      <UserSelect
        users={users}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
      />
      {selectedUserId && <UserDetails user={users[selectedUserId]} />}
    </div>
  );
};

export default UserPanel;
