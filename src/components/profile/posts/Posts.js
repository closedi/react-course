import React from "react";
import styles from './posts.module.css'
import {Post} from './post/Post'

export const Posts = () => {
    return (
      <div className="posts">
        <input type="text" placeholder="your news..." id="posts-input"/>
        <button type="submit" className="btn btn-submit">Send</button>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    )
}
