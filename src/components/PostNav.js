import React from 'react'
import styles from './PostNav.module.css'
import { ReactComponent as Grid } from '../icon/Grid.svg'
import { ReactComponent as IGTV } from '../icon/IGTV.svg'
import { ReactComponent as Tag } from '../icon/Tag.svg'

const PostNav = () => {
  return (
    <div className={styles.nav}>
      <a className={styles.cliked} href="https://www.instagram.com/memopresso/">
        <Grid />
        <span>POSTS</span>
      </a>
      <a href="https://www.instagram.com/memopresso/channel/">
        <IGTV />
        <span>IGTV</span>
      </a>
      <a href="https://www.instagram.com/memopresso/tagged/">
        <Tag />
        <span>TAGGED</span>
      </a>
    </div>
  )
}

export default PostNav
