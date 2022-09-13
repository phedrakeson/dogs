import React from 'react'
import { PHOTO_GET } from '../../../Enviroment/api';
import { Error } from '../../Helpers/Error';
import { Loading } from '../../Helpers/Loading';
import { useFetch } from '../../Hooks/useFetch'
import { PhotoContent } from '../Photo/Content/PhotoContent';
import styles from './FeedModal.module.css'

export const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request])

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}
