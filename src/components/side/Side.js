import React from "react";
import styles from './side.module.css';
import {NavLink} from "react-router-dom";

export const Side = () => {

  return (
    <nav className={styles.nav}>
      <ul>
        <li><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink></li>
        <li><NavLink to="/messages" activeClassName={styles.active}>Messages</NavLink></li>
        <li><NavLink to="/news" activeClassName={styles.active}>News</NavLink></li>
        <li><NavLink to="/music" activeClassName={styles.active}>Music</NavLink></li>
        <li><NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink></li>
      </ul>
    </nav>
  )
}
