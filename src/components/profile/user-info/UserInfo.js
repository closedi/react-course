import styles from "../user-info/user-info.module.css";
import background from "../../../background.jpg";

export const UserInfo = () => {

    return (
        <div className={styles.info}>
            <img className={styles.back_img} src={background} alt="bg"/>
            <img className={styles.avatar} src="https://randomuser.me/api/portraits/women/82.jpg" alt="picture"/>
            <div className={styles.usersInfo}>
                <p className="name">Jessica</p>
            </div>
        </div>
    )
}

