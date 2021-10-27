import s from "./Profile.module.css";
import PropTypes from 'prop-types'

const Profile = ({ name, tag, location, avatar, stats: {followers, views, likes} }) => {
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
      <li className={s.columns}>
        <span className={s.label}>Followers</span>
                  <span className={s.quantity}>{followers}</span>
      </li>
      <li className={s.columns}>
        <span className={s.label}>Views</span>
                  <span className={s.quantity}>{views}</span>
      </li>
      <li className={s.columns}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{likes}</span>
      </li>
    </ul>
  </div>);
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}

export default Profile;
