import css from './FriendListItem.module.css';
import clsx from 'clsx';


export default function FriendListItem({friend:{avatar,name,isOnline}}) {
    return (
        <div className={css.friendCard}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            <p className={clsx(isOnline? css.online:css.offline)}>{isOnline ? "Online":"Offline"}</p>
        </div>
    )
}