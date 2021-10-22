import React from 'react'
import './post.css'

const Post = ({id, title, body}) => {

    return (
        <div className='list'>
            <h3>{title}</h3>
            <span>{body}</span>
        </div>
    )
}

export default Post
