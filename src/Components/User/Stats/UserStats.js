import React from 'react'
import { STATS_GET } from '../../../Enviroment/api'
import { Error } from '../../../Shared/Helpers/Error'
import { Head } from '../../../Shared/Helpers/Head/Head'
import { Loading } from '../../../Shared/Helpers/Loading/Loading'
import { useFetch } from '../../../Shared/Hooks/useFetch'
import { UserStatsGraphs } from '../Graphs/UserStatsGraphs'
import styles from './UserStats.module.css'

export const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();

      await request(url, options);
    }

    getData();
  }, [request])

  if (loading && <Loading />);
  if (error && <Error error={error} />);
  if (data)
    return (
      <section>
        <Head title="Statistics" />
        <UserStatsGraphs data={data} />
      </section>
    )
  else return null;
}
