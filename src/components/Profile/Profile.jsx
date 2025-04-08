import {
  Prof,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled.jsx';
function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Prof className="profile">
      <Description className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Name className="name">{username}</Name>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>

      <Stats className="stats">
        <StatsItem>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </Prof>
  );
}

export default Profile;
