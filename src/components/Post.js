import React from 'react'
import styles from './Post.module.css'
import { ReactComponent as Heart } from '../icon/Heart.svg'
import { ReactComponent as Comment } from '../icon/Comment.svg'

const Post = ({ post }) => {
  return (
    <div className={styles.singlePost}>
      <img src={post.url} alt="Post img" />
      <div className={styles.mask}>
        <ul className={styles.likeAndComment}>
          <li>
            <Heart />
            <strong>{post.likes}</strong>
          </li>
          <li>
            <Comment />
            <strong>{post.comments}</strong>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Post
