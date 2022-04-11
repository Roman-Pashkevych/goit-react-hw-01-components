/* import PropTypes from "prop-types"; */
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
      {/* <div class="description"> */}
      <Description>
        <Img src={avatar} alt="User avatar" class="avatar" />
        <Name class="name">{username}</Name>
        <P class="tag">{tag}</P>
        <P class="location">{location}</P>
      </Description>
      {/*  </div> */}

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
