import React from 'react'
import PostListItem from '../post-list-item/PostListItem';
import { ListGroup } from 'reactstrap';
import './post-list.css';

export default function PostList({ posts, onDelete, onToggleImpotrant, onToggleLiked }) {

  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className='list-group-item'>
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleImpotrant={() => onToggleImpotrant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      </li>
    )
  })
  return (
    <ListGroup className='app-list'>
      {elements}
    </ListGroup>
  )
}
