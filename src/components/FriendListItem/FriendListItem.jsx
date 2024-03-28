import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({
    friend: {
        avatar,
        name,
        isOnline
    },
}){
    const amountClassNames = clsx(css.status, isOnline? css.online : css.offline)
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            <p className={amountClassNames}>{isOnline ? "Online": "Offline"}</p>
        </div>
      
    );
}