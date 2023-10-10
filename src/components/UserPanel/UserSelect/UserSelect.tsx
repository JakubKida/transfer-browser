import React from "react";
import { Users } from "../../../types/User";
import styles from "./UserSelect.module.scss";

type Props = {
  users: Users;
  selectedUserId: string | null;
  setSelectedUserId: React.Dispatch<React.SetStateAction<string | null>>;
};

function UserSelect({ users, selectedUserId, setSelectedUserId }: Props) {
  return (
    <div className="App">
      View as:{" "}
      <select
        className={styles.userSelect}
        name="users"
        value={selectedUserId || "all"}
        onChange={(e) =>
          setSelectedUserId(e.target.value === "all" ? null : e.target.value)
        }
      >
        <option value="all">All</option>
        {Object.values(users).map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserSelect;
