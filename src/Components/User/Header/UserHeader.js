import React from 'react'
import { useLocation } from 'react-router-dom';
import { UserHeaderNav } from './Nav/UserHeaderNav'
import styles from './UserHeader.module.css'

export const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      case '/account/post':
        setTitle('Post your photo');
        break;
      case '/account/stats':
        setTitle('Stats');
        break;
      default:
        setTitle('My Account');
        break;
    }
  }, [location])
  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}
