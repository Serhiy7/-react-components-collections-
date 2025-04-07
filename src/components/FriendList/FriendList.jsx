import FriendListItem from '../FriendListItem/FriendListItem';
import { FList } from './FriendList.styled.jsx';

function FriendList({ friends }) {
  return (
    <FList className="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </FList>
  );
}

export default FriendList;
