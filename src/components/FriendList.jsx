import css from './FriendList.module.css'
import FriendListItem from './FriendListItem.jsx'


export default function FriendList({ friends }) {
    return (
        <ul className={css.friendsList} >
            {friends.map(friend => <li key={friend.id}>
                <FriendListItem friend={friend} />
            </li>)}
        </ul>
    )
}