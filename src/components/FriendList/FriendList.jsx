import FriendListItem from '../FriendListItem/FriendListItem'
import './FriendList.css'

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  )
}

export default FriendList
