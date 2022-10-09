import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './Form/LoginForm'
import LoginCreate from './Create/LoginCreate'
import PasswordLost from './PasswordLost/PasswordLost'
import PasswordReset from './PasswordReset/PasswordReset'
import styles from './Login.module.css'
import { UserContext } from '../../Shared/Context/UserContext'
import { NotFound } from '../NotFound/NotFound'


const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/account" />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/create" element={<LoginCreate />} />
          <Route path="/lost" element={<PasswordLost />} />
          <Route path="/reset" element={<PasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login