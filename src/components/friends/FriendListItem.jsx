import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  let status = isOnline ? styles.statusOnlineClasses : styles.statusOfflineClasses;
  return (
    <li className={styles.itemClasses}>
      <span className={status}>
      </span>
      <br></br>
      <img
        className={styles.avatarClasses}
        src={avatar}
        alt="User avatar"></img>
      <p className={styles.nameClasses}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;