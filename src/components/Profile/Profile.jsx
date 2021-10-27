import s from "./Profile.module.css";
import PropTypes from 'prop-types'

let pk = 1;

const Profile = ({ name, tag, location, avatar, stats }) => {
  
  return (
    <div className={s.profile}>
    <div className={s.description}>
      <img
        src={avatar}
        alt={name}
        className={s.avatar}
      />
              <p className={s.name}>{name}</p>
              <p className={s.tag}>@{tag}</p>
              <p className={s.location}>{location}</p>
    </div>
      <ul className={s.stats}>
        {Object.entries(stats).map(item => (<li key={pk++} className={s.columns}>
        <span className={s.label}>{item[0]}</span>
        <span className={s.quantity}>{item[1]}</span>
      </li>))}
    </ul>
  </div>);
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
}

export default Profile;
