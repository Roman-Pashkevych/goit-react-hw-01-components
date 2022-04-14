import PropTypes from 'prop-types';
import { FriendListUl, Li, Status, Avatar, Name } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendListUl>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <Li class="item" key={id}>
          <Status>{isOnline}</Status>
          <Avatar src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </Li>
      ))}
    </FriendListUl>
  );
}

FriendList.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
