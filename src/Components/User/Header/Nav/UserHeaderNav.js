import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../../../Shared/Context/UserContext'
import styles from './UserHeaderNav.module.css'
import { ReactComponent as MyPhotos } from '../../../../Assets/feed.svg'
import { ReactComponent as Stats } from '../../../../Assets/estatisticas.svg'
import { ReactComponent as PostPhoto } from '../../../../Assets/adicionar.svg'
import { ReactComponent as LogOut } from '../../../../Assets/sair.svg'
import { useMedia } from '../../../../Shared/Hooks/useMedia'

export const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname])

  return (
    <>
      {mobile &&
        <button
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}></button>}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/account" end>
          <MyPhotos />
          {mobile && 'My Photos'}
        </NavLink>
        <NavLink to="/account/stats">
          <Stats />
          {mobile && 'Statistics'}
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
    </>
  )
}
