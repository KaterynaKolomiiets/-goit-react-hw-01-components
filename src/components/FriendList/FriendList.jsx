import s from "./FriendList.module.css";
import FriendListItem from "./FriendListItem/FriendListItem";
import PropTypes from 'prop-types'


const FriendList = ({ friends }) => {
    
  return (<ul className={s.friendList}>
      {friends.map(({ id, ...props }) => <FriendListItem key={id} {...props} />)}
  </ul>);
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
  
}
export default FriendList;
