import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Feed } from '../../Shared/Feed/Feed'
import { UserHeader } from './Header/UserHeader'
import { UserPhotoPost } from './PhotoPost/UserPhotoPost'
import { UserStats } from './Stats/UserStats'
import styles from './User.module.css'

export const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/stats" element={<UserStats />} />
      </Routes>
    </section>
  )
}
