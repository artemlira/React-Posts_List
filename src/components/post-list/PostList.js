import React from 'react'
import PostListItem from '../post-list-item/PostListItem';
import './post-list.css';

export default function PostList({ posts }) {

  const elements = posts.map((item) => {
    return (
      <li key={Date.now()} className='list-group-item'>
        <PostListItem {...item} />
      </li>
    )
  })
  return (
    <ul className='app-list list-group'>
      {elements}
    </ul>
  )
}
