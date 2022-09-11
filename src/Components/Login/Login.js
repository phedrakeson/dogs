import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './Form/LoginForm'
import LoginCreate from './Create/LoginCreate'
import PasswordLost from './PasswordLost/PasswordLost'
import PasswordReset from './PasswordReset/PasswordReset'
import styles from './Login.module.css'
import { UserContext } from '../../Shared/Context/UserContext'


const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/criar" element={<LoginCreate />} />
        <Route path="/perdeu" element={<PasswordLost />} />
        <Route path="/resetar" element={<PasswordReset />} />
      </Routes>
    </div>
  )
}

export default Login