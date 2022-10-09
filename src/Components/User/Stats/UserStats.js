import React from 'react'
import { STATS_GET } from '../../../Enviroment/api'
import { Error } from '../../../Shared/Helpers/Error'
import { Head } from '../../../Shared/Helpers/Head/Head'
import { Loading } from '../../../Shared/Helpers/Loading/Loading'
import { useFetch } from '../../../Shared/Hooks/useFetch'
const UserStatsGraphs = React.lazy(() => import('../Graphs/UserStatsGraphs.js'));

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
      <React.Suspense fallback={<div></div>}>
        <Head title="Statistics" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    )
  else return null;
}
