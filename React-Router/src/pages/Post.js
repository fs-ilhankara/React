import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

/* const Post = () => {
    const { id }  = useParams()
    
    return (
        <div>
            <h2>Post id: {id} </h2>
        </div>
    )
} */

const Post = () => {
    
    const item = new URLSearchParams(useLocation().search);
    return (
        <div>
            <h2>{item.get('name')} </h2>
            <h2>{item.get('second')} </h2>
        </div>
    )
}

export default Post
