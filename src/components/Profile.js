import React from 'react'
import styles from './Profile.module.css'
import { ReactComponent as ArrowDown } from '../icon/ArrowDown.svg'
import { ReactComponent as ThreeDots } from '../icon/ThreeDots.svg'

const Profile = () => {
  return (
    <div className={styles.profile}>
      <span className={styles.profileImg}>
        <img
          className={styles.profileImgFrame}
          alt="memopresso's profile avatar"
          src="https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/36159708_235623113825620_3667017535154290688_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&amp;_nc_ohc=hs4_0TGF2LoAX_3Ywiu&amp;oh=adf86ee05647ee08f2ebcaf4d55d22d1&amp;oe=5FBBFFEB"
        />
      </span>

      <div className={styles.profileInfo}>
        <div className={styles.headerTop}>
          <h2 className={styles.userName}>memopresso</h2>
          <button className={styles.followButton}>Follow</button>
          <button className={styles.followToggle}>
            <ArrowDown />
          </button>
          <div className={styles.dotsButton}>
            <ThreeDots />
          </div>
        </div>

        <ul className={styles.profileData}>
          <li>
            <strong>195</strong> posts
          </li>
          <li>
            <strong>5142</strong> followers
          </li>
          <li>
            <strong>277</strong> following
          </li>
        </ul>

        <div className={styles.description}>
          <strong>
            MEMOPRESSO |{' '}
            <span role="img" aria-label="pin">
              📌
            </span>{' '}
            Taiwan
          </strong>{' '}
          <br />
          <span>
            <span role="img" aria-label="mail">
              💌
            </span>{' '}
            Keep your memories forever. 📍台灣✈️韓國
            <br />
            <a href="https://www.instagram.com/explore/tags/memopresso/">
              #memopresso
            </a>{' '}
            分享你的列印美照✨合作事宜請洽business@memopresso.com
            <br />
            <a href="https://linktr.ee/memopresso">linktr.ee/memopresso</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Profile
