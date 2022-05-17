import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ stats, title }) => {
  const randomHexColor = () =>
  "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  return (
    <section className={styles.statiscticsClasses}>
      {/* rendering title only if avaiable */}
      {title !== "" && <h2 className={styles.titleClasses}>{title}</h2>}

      <ul className={styles.statListClasses}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={styles.itemClasses} style={{backgroundColor: `${randomHexColor()}`}}>
            <span className="label">{label}</span>
            <br></br>
            <span className={styles.percentageClasses}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;