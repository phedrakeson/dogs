import React from 'react';
import { Link } from 'react-router-dom';
import pathValues from '../../../Enviroment/PathValues';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch(pathValues.API_BASE_URL + 'jwt-auth/v1/token', {
      method: 'POST',
      headers: pathValues.HEADERS,
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={({ target }) => setUsername(target.value)}
          value={username}
        />
        <input
          type="password"
          onChange={({ target }) => setPassword(target.value)}
          value={password}
        />
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
