// import FriendList from './FriendList/FriendList';
import SocialProfile from './SocialProfile/SocialProfile';
// import Statistics from './Statistics/Statistics';
// import TransactionHistory from './TransactionHistory/TransactionHistory';
// import friends from './FriendList/friends.json';
import user from './SocialProfile/user.json';
// import data from './Statistics/data.json';
// import transactions from './TransactionHistory/transactions.json';

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
    </>
  );
};

/* export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
 */
