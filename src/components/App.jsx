import FriendList from './FriendList/FriendList';
import SocialProfile from './SocialProfile/SocialProfile';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import friends from './FriendList/friends.json';
import user from './SocialProfile/user.json';
import data from './Statistics/data.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <SocialProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
