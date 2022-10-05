import React from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Context/UserContext';
import Image from '../../../Helpers/Image/Image';
import { PhotoComments } from '../Comments/PhotoComments';
import PhotoDelete from '../Delete/PhotoDelete';
import styles from './PhotoContent.module.css'

export const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;
  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? <PhotoDelete id={photo.id} /> : <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className='title'>
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} {photo.idade === 1 ? 'year old' : 'years old'}</li>
          </ul>
        </div>
      </div>
      <PhotoComments single={true} id={photo.id} comments={comments} />
    </div>
  )
}
