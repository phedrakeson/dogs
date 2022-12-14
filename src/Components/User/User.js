import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../../Shared/Context/UserContext'
import { Feed } from '../../Shared/Feed/Feed'
import { Head } from '../../Shared/Helpers/Head/Head'
import { NotFound } from '../NotFound/NotFound'
import { UserHeader } from './Header/UserHeader'
import { UserPhotoPost } from './PhotoPost/UserPhotoPost'
import { UserStats } from './Stats/UserStats'
import styles from './User.module.css'

export const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <section className="container">
      <Head title="My Account" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/stats" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}
