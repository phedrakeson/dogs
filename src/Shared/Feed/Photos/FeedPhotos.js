import React from 'react'
import { PHOTOS_GET } from '../../../Enviroment/api';
import { Error } from '../../Helpers/Error';
import { Loading } from '../../Helpers/Loading/Loading';
import { useFetch } from '../../Hooks/useFetch'
import { FeedPhotosItem } from './Photo/FeedPhotosItem'
import styles from './FeedPhotos.module.css'

export const FeedPhotos = ({ setModalPhoto, setInfinite, user, page }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });

      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page])

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />)}
      </ul>
    )
  else return null;
}
