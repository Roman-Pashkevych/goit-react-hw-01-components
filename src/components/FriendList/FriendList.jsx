/* import PropTypes from 'prop-types'; */
import { FriendListUl, Li, Status, Avatar, Name } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendListUl>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <Li class="item" key={id}>
          <Status class="status">{isOnline}</Status>
          <Avatar class="avatar" src={avatar} alt="User avatar" width="48" />
          <Name class="name">{name}</Name>
        </Li>
      ))}
    </FriendListUl>
  );
}
