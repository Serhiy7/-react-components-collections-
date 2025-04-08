import user from '@data/user.json';
import data from '@data/data.json';
import friends from '@data/friends.json';
import items from '@data/bank.json';
import Profile from '@components/Profile/Profile';
import Statistics from '@components/Statistics/Statistics';
import FriendList from '@components/FriendList/FriendList';
import TransactionHistory from '@components/TransactionHistory/TransactionHistory';
import { RootContainer } from './App.styled';

function App() {
  return (
    <RootContainer>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={items} />;
    </RootContainer>
  );
}

export default App;
