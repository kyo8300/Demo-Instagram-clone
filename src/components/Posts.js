import React, { useEffect, useState } from 'react'
import styles from './Post.module.css'
import { data } from '../data/postData'
import Post from './Post'

const Posts = () => {
  const [postNum, setPostNum] = useState(9)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const defalutPosts = data.slice(0, postNum)
    setPosts(defalutPosts)
  }, [postNum])

  const handleLoadMore = () => {
    const additionalPosts = data.slice(postNum, postNum + 9)
    setPosts([...posts, ...additionalPosts])
    setPostNum(postNum + 9)
  }

  return (
    <>
      <div className={styles.wrapper}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      {postNum <= data.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </>
  )
}
export default Posts
