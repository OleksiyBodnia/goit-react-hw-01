import css from '../Profile/Profile.module.css';
export default function Profile({name, tag, location, image, stats:{followers, views, likes} }){
    return (
        <div className={css.mainDiv}>
            <div>
    <img
      src={image}
      alt="User avatar"
      className={css.userImg}
    />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.listItem}>
      <span className={css.listItemSpanF}>Followers</span>
      <span className={css.listItemSpanS}>{followers}</span>
    </li>
    <li className={css.listItem}>
      <span className={css.listItemSpanF}>Views</span>
      <span className={css.listItemSpanS}>{views}</span>
    </li>
    <li className={css.listItem}>
      <span className={css.listItemSpanF}>Likes</span>
      <span className={css.listItemSpanS}>{likes}</span>
    </li>
  </ul>
        </div>
    );
}