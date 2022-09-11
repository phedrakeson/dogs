import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../../../Shared/Context/UserContext'
import styles from './UserHeaderNav.module.css'
import { ReactComponent as MyPhotos } from '../../../../Assets/feed.svg'
import { ReactComponent as Stats } from '../../../../Assets/estatisticas.svg'
import { ReactComponent as PostPhoto } from '../../../../Assets/adicionar.svg'
import { ReactComponent as LogOut } from '../../../../Assets/sair.svg'

export const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/account" end>
        <MyPhotos />
        {mobile && 'My Photos'}
      </NavLink>
      <NavLink to="/account/stats">
        <Stats />
        {mobile && 'Stats'}
      </NavLink>
      <NavLink to="/account/post">
        <PostPhoto />
        {mobile && 'Post Photo'}
      </NavLink>
      <button onClick={userLogout}>
        <LogOut />
        {mobile && 'Log Out'}
      </button>
    </nav>
  )
}
