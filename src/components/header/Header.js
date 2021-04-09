import logo from "../../logo.svg";
import React from "react";
import styles from './header.module.css'


export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={`${styles.logo} ${styles.colored}`} src={logo}></img>
        </header>
    )
}
