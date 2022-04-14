import PropTypes from 'prop-types';
import {
  Description,
  Name,
  P,
  Img,
  Ul,
  Profile,
  Li,
  SpanLabel,
  SpanQuantity,
} from './SocialProfile.styled';

export default function SocialProfile({
  username,
  tag,
  location,
  avatar,
  stats,
}) {
  return (
    <Profile>
      <Description>
        <Img src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <P>{tag}</P>
        <P>{location}</P>
      </Description>

      <Ul>
        <Li>
          <SpanLabel>Followers</SpanLabel>
          <SpanQuantity>{stats.followers}</SpanQuantity>
        </Li>
        <Li>
          <SpanLabel>Views</SpanLabel>
          <SpanQuantity>{stats.views}</SpanQuantity>
        </Li>
        <Li>
          <SpanLabel>Likes</SpanLabel>
          <SpanQuantity>{stats.likes}</SpanQuantity>
        </Li>
      </Ul>
    </Profile>
  );
}

SocialProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
