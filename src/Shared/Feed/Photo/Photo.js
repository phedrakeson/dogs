import React from 'react'
import { useParams } from 'react-router-dom'
import { PHOTO_GET } from '../../../Enviroment/api';
import { Error } from '../../Helpers/Error';
import { Loading } from '../../Helpers/Loading/Loading';
import { useFetch } from '../../Hooks/useFetch';
import { PhotoContent } from './Content/PhotoContent';

export const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error />
  if (loading) return <Loading />
  if (data) return <section className='container mainContainer'>
    <PhotoContent data={data} single={true} />
  </section>
  else return null;
}
