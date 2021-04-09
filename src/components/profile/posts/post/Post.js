import React from "react";
import styles from './post.module.css'

export const Post = () => {
    return (
      <div className={styles.post}>
        <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="avatar" className={styles.avatar}/>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dicta dignissimos ea inventore labore quis quisquam repellat sequi sit voluptates!</p>
      </div>
    )
}
