import React from 'react'
import { UserContext } from '../../../Context/UserContext'
import { PhotoCommentsForm } from './Form/PhotoCommentsForm';
import styles from './PhotoComments.module.css'

export const PhotoComments = (props) => {
  const { login } = React.useContext(UserContext);
  const [comments, setComments] = React.useState(() => props.comments);

  return <>
    <ul className={styles.comments}>
      {comments.map(comment => <li key={comment.comment_ID}>
        <b>{comment.comment_author}: </b>
        <span>{comment.comment_content}</span>
      </li>)}
    </ul>
    {login && <PhotoCommentsForm setComments={setComments} id={props.id} />}
  </>
}
