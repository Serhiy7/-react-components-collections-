import { FItem, Status, Avatar, Name } from './FriendListItem.styled.jsx';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FItem className="friend-item">
      <Status className="status">{isOnline ? '🟢' : '⚪'}</Status>
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </FItem>
  );
}
export default FriendListItem;
