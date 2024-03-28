import css from './FriendList.module.css';
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({friends}){
    return (
    <ul className={css.list}>
        {friends.map((el) => (
            <li key={el.id} className={css.item}>
            <FriendListItem friend = {el}/>
        </li>
        ))}
        
    </ul>
    
    );
}