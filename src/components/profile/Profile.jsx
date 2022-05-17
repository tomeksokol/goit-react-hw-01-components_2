import styles from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({ avatar, tag, username, location, stats }) => {
  return (
    <div className={styles.profileClasses}>
      <div className="description">
        <img className={styles.avatarClasses} src={avatar} alt="User avatar" />
        <p className={styles.nameClasses}>{username}</p>
        <p className={styles.tagClasses}>{tag}</p>
        <p className={styles.locationClasses}>{location}</p>
      </div>
      <ul className={styles.statsClasses}>
        <li className={styles.labelItemClasses}>
          <span className={styles.labelClasses}>{Object.keys(stats)[0]}</span>
          <br></br>
          <span className={styles.quantityClasses}>{stats.followers}</span>
        </li>
        <li className={styles.labelItemClasses}>
          <span className={styles.labelClasses}>{Object.keys(stats)[1]}</span>
          <br></br>
          <span className={styles.quantityClasses}>{stats.views}</span>
        </li>
        <li className={styles.labelItemClasses}>
          <span className={styles.labelClasses}>{Object.keys(stats)[2]}</span>
          <br></br>
          <span className={styles.quantityClasses}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;