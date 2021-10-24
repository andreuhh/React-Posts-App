import React from 'react'
import './post.css'

import {useState} from 'react'

const Post = ({id, title, body}) => {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

    setSelected(i)
  }

    return (
        <div className='singlePost' onClick={() => toggle(id)}>
            <div className="singlePost__cont">
                <div className="circle">{id}</div>
                <h2>{title}</h2>
            </div>
            <div className={selected === id ? 'content--selected' : 'content'}>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default Post
