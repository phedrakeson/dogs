import React from 'react'
import styles from './Feed.module.css'
import { FeedModal } from './Modal/FeedModal'
import { FeedPhotos } from './Photos/FeedPhotos'

export const Feed = () => {
  return (
    <div>
      <FeedModal />
      <FeedPhotos />
    </div>
  )
}
