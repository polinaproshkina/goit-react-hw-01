import css from './App.module.css'
import Profile from './Profile.jsx'
import FriendList from './FriendList.jsx'
import userData from '../userData.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
import TransactionHistory from './TransactionHistory.jsx'
import "modern-normalize";


export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats} />
      
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
};

