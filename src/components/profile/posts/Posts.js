import React from "react";
import styles from './posts.module.css'
import {Post} from './post/Post'

export const Posts = () => {

    const element = React.createRef()


    const addPost = () => {
        alert(element.current.value)
        console.log(element)
    }

    return (
      <div className="posts">
        <textarea placeholder="your news..." id="posts-input" ref={element}/>
        <button className="btn btn-submit" onClick={addPost}>Send</button>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    )
}
