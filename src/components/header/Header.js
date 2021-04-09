import logo from "../../logo.svg";
import React from "react";
import './header.css'


export const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={logo}></img>
        </header>
    )
}
