import React from 'react'
import { UserHeaderNav } from './Nav/UserHeaderNav'
import styles from './UserHeader.module.css'

export const UserHeader = () => {
  return (
    <header>
      <h1 className='title'>Título</h1>
      <UserHeaderNav />
    </header>
  )
}
