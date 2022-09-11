import React from 'react';
import { Link } from 'react-router-dom';
import pathValues from '../../../Enviroment/PathValues';
import Input from '../../../Shared/Forms/Input/Input';
import Button from '../../../Shared/Forms/Button/Button';
import styles from './LoginForm.module.css';
import { useForm } from '../../../Shared/Hooks/useForm';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch(pathValues.API_BASE_URL + 'jwt-auth/v1/token', {
        method: 'POST',
        headers: pathValues.HEADERS,
        body: JSON.stringify(),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
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
