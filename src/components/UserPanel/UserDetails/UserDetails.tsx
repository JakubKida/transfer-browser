import { User } from "../../../types/User";
import styles from "./UserDetails.module.scss";

type Props = {
  user: User;
};

const UserDetails = ({ user }: Props) => {
  return (
    <div>
      <p className={styles.userDetail}>
        user: <span className={styles.userDetailValue}>{user.name}</span>
      </p>
      <p className={styles.userDetail}>
        balance:
        <span className={styles.userDetailValue}>
          {user.balance.toFixed(2)}
        </span>
      </p>
      <p className={styles.userDetail}>
        # of transactions:
        <span className={styles.userDetailValue}>{user.transactionCount}</span>
      </p>
    </div>
  );
};

export default UserDetails;
