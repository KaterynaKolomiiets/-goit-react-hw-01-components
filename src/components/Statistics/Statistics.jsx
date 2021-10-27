import s from "./Statistics.module.css";
import PropTypes from "prop-types";
import randomNumber from "../../utils/function-randomNumber";

const Statistics = ({ title, stats }) => {

  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map((item) => {
          return (
            <li
              style={{
                backgroundColor: `rgba(${randomNumber(0, 255)}, 0.5`,
              }}
              className={s.statListItem}
              key={item.id}
            >
              <span className={s.label}>{item.label}</span>
              <span className={s.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }))
};

export default Statistics;
