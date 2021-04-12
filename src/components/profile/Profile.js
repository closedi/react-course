import React from "react";
import {Posts} from "./posts/Posts";
import {UserInfo} from "./user-info/UserInfo";

export const Profile = () => {
    return (
        <main className="main">
            <UserInfo/>
            <Posts/>
        </main>
    )
}
