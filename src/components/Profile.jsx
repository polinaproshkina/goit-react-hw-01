import css from './Profile.module.css'

export default function Profile({name,tag,location,image,stats}) {
    return (
        <div className={css.profileCard}>
            <div>
                <img
                    src={image}
                    alt="User avatar"
                    className={css.profileImg}
                    />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.profileList}>
                <li className={css.profileListEl}>
                    <span className={css.profileStatsName}>Followers</span>
                    <span className={css.profileStatsValue}>{stats.followers}</span>
                </li>
                <li className={css.profileListEl}>
                    <span className={css.profileStatsName}>Views</span>
                    <span className={css.profileStatsValue}>{stats.views}</span>
                </li>
                <li className={css.profileListEl}>
                    <span className={css.profileStatsName}>Likes</span>
                    <span className={css.profileStatsValue}>{stats.likes}</span>
                </li>
            </ul>
        </div>

    )
}