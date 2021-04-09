import React from "react";
import styles from './profile.module.css'
import background from '../../background.jpg'
import {Posts} from "./posts/Posts";

export const Profile = () => {
    return (
        <main className="main">
            <img className={styles.back_img} src={background}></img>
            <div className="info">
                <div className="avatar"></div>
                <div className="user-info"></div>
            <Posts/>
            </div>
        </main>
    )
}
