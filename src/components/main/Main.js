import React from "react";
import './main.css'
import background from '../../background.jpg'

export const Main = () => {
    return (
        <main className="main">
            <img className="background-img" src={background}></img>
            <div className="info">
                <div className="avatar"></div>
                <div className="user-info"></div>
            </div>
            <div className="posts">
                <input type="text" placeholder="your news..." id="posts-input"/>
                <button type="submit" className="btn btn-submit">Send</button>
            </div>
        </main>
    )
}
