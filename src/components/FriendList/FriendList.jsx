import PropTypes from 'prop-types';
import s from './FriendList.module.scss';

function FriendList({ friends }) {
  return (
    <ul className={s['friend-list']}>
      {friends.map(friend => (
        <li key={friend.id} className={s.item}>
          <span
            className={`${friend.isOnline ? s['online'] : s['offline']}`}
          ></span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
