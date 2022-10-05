import React from 'react'
import styles from './Feed.module.css'
import { FeedModal } from './Modal/FeedModal'
import { FeedPhotos } from './Photos/FeedPhotos'

export const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && <FeedModal setModalPhoto={setModalPhoto} photo={modalPhoto} />}
      <FeedPhotos user={user} setModalPhoto={setModalPhoto} />
    </div>
  )
}
