import React from 'react'
import './post.css'

const Post = ({id, title, body}) => {

    return (
        <div className='singlePost'>
            <div className="singlePost__cont">
                <div className="circle">{id}</div>
                <h2>{title}</h2>
            </div>
            <p>{body}</p>
        </div>
    )
}

export default Post
