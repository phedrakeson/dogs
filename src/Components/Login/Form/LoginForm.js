import React from 'react';
import { Link } from 'react-router-dom';
import pathValues from '../../../Enviroment/pathValues';
import Input from '../../../Shared/Forms/Input/Input';
import Button from '../../../Shared/Forms/Button/Button';
import styles from './LoginForm.module.css';
import { useForm } from '../../../Shared/Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../../Enviroment/api';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) getUser(token);
  }, [])

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = fetch(url, options);
    const json = await response.json();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({ username: username.value, password: password.value });

      const response = await fetch(url, options)
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
